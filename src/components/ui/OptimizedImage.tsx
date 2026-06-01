import Image, { type ImageProps } from "next/image";
import {
  BLUR_DATA_URL,
  IMAGE_WIDTH,
  optimizeImageUrl,
  type ImageWidthKey,
} from "@/lib/images";

type OptimizedImageProps = Omit<ImageProps, "src" | "quality"> & {
  src: string;
  /** Preset width for remote image optimization */
  preset?: ImageWidthKey;
  quality?: number;
};

export function OptimizedImage({
  src,
  preset = "section",
  quality = 70,
  placeholder = "blur",
  blurDataURL = BLUR_DATA_URL,
  priority,
  loading,
  ...props
}: OptimizedImageProps) {
  const width = IMAGE_WIDTH[preset];
  const optimizedSrc = optimizeImageUrl(src, width, quality);

  return (
    <Image
      src={optimizedSrc}
      quality={quality}
      priority={priority}
      loading={priority ? undefined : (loading ?? "lazy")}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      {...props}
    />
  );
}
