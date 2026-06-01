"use client";

import { useEffect, useState } from "react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { ExternalLink, Play, Loader2 } from "lucide-react";

interface FacebookVideoEmbedProps {
  url: string;
  caption?: string;
  previewImage?: string;
}

interface OEmbedData {
  resolvedUrl: string;
  html: string | null;
  embedUrl: string | null;
  thumbnail_url: string | null;
  fallback: boolean;
}

export function FacebookVideoEmbed({
  url,
  caption,
  previewImage = "https://images.unsplash.com/photo-1603532648955-039310d9ed75",
}: FacebookVideoEmbedProps) {
  const [oembed, setOembed] = useState<OEmbedData | null>(null);
  const [playing, setPlaying] = useState(false);
  const [embedLoading, setEmbedLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadEmbedData() {
      try {
        const res = await fetch(
          `/api/facebook-oembed?url=${encodeURIComponent(url)}`
        );
        if (!res.ok) return;
        const data: OEmbedData = await res.json();
        if (!cancelled) setOembed(data);
      } catch {
        /* preview still works with local image */
      }
    }

    loadEmbedData();
    return () => {
      cancelled = true;
    };
  }, [url]);

  const thumbnail = oembed?.thumbnail_url ?? previewImage;
  const openUrl = oembed?.resolvedUrl ?? url;
  const canPlayInline = !!(oembed?.html || oembed?.embedUrl);

  const handlePlay = () => {
    if (canPlayInline) {
      setEmbedLoading(true);
      setPlaying(true);
      return;
    }
    window.open(openUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-maroon/10 sm:aspect-video">
        {playing ? (
          <>
            {embedLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-maroon/20">
                <Loader2 className="h-8 w-8 animate-spin text-accent" />
              </div>
            )}
            {oembed?.html ? (
              <div
                className="absolute inset-0 [&>iframe]:h-full [&>iframe]:w-full [&>iframe]:border-0"
                dangerouslySetInnerHTML={{ __html: oembed.html }}
                onLoad={() => setEmbedLoading(false)}
              />
            ) : oembed?.embedUrl ? (
              <iframe
                src={oembed.embedUrl}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                title={caption ?? "Customer review video"}
                onLoad={() => setEmbedLoading(false)}
              />
            ) : null}
            <button
              type="button"
              onClick={() => {
                setPlaying(false);
                setEmbedLoading(false);
              }}
              className="absolute right-2 top-2 z-20 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm hover:bg-black/80"
            >
              Close
            </button>
          </>
        ) : (
          <>
            <OptimizedImage
              src={thumbnail}
              alt={caption ?? "Video preview"}
              fill
              preset="card"
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/30 to-maroon/20" />

            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              aria-label="Play video review"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg ring-4 ring-gold/50 transition-transform hover:scale-105">
                <Play className="ml-1 h-7 w-7 fill-maroon text-maroon" />
              </span>
              <span className="rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-maroon shadow">
                {canPlayInline ? "Play Review" : "Watch on Facebook"}
              </span>
            </button>
          </>
        )}
      </div>

      {(caption || openUrl) && (
        <div className="flex items-center justify-between gap-3 p-4">
          {caption && (
            <p className="text-sm text-text-secondary">{caption}</p>
          )}
          <a
            href={openUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-accent hover:underline"
          >
            Open on Facebook
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      )}
    </div>
  );
}
