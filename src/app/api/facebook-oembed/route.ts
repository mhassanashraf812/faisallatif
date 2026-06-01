import { NextRequest, NextResponse } from "next/server";

async function resolveFacebookUrl(url: string): Promise<string> {
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; FacebookBot/1.0; +http://www.facebook.com/externalhit_uatext.php)",
      },
    });
    return res.url || url;
  } catch {
    return url;
  }
}

async function fetchOEmbed(
  type: "video" | "post",
  url: string
): Promise<{ html?: string; thumbnail_url?: string; title?: string } | null> {
  try {
    const endpoint = `https://www.facebook.com/plugins/${type}/oembed.json/?url=${encodeURIComponent(url)}&maxwidth=560`;
    const res = await fetch(endpoint, {
      headers: { Accept: "application/json" },
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "Missing url parameter" }, { status: 400 });
  }

  const resolvedUrl = await resolveFacebookUrl(url);

  let data =
    (await fetchOEmbed("video", resolvedUrl)) ??
    (await fetchOEmbed("video", url)) ??
    (await fetchOEmbed("post", resolvedUrl)) ??
    (await fetchOEmbed("post", url));

  if (!data && resolvedUrl !== url) {
    data = (await fetchOEmbed("video", url)) ?? (await fetchOEmbed("post", url));
  }

  if (!data) {
    const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(resolvedUrl)}&show_text=false&width=560`;
    return NextResponse.json({
      resolvedUrl,
      html: null,
      embedUrl,
      thumbnail_url: null,
      fallback: true,
    });
  }

  return NextResponse.json({
    resolvedUrl,
    html: data.html ?? null,
    embedUrl: data.html
      ? null
      : `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(resolvedUrl)}&show_text=false&width=560`,
    thumbnail_url: data.thumbnail_url ?? null,
    title: data.title ?? null,
    fallback: false,
  });
}
