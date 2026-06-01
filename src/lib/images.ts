/** Tiny neutral blur placeholder for lazy-loaded images */
export const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQCEAwEPwAB//9k=";

export const IMAGE_WIDTH = {
  avatar: 96,
  thumb: 320,
  card: 480,
  section: 640,
  hero: 1280,
  full: 1600,
} as const;

export type ImageWidthKey = keyof typeof IMAGE_WIDTH;

/** Optimize remote Unsplash URLs; local paths pass through unchanged */
export function optimizeImageUrl(
  src: string,
  width: number = IMAGE_WIDTH.section,
  quality = 70
): string {
  if (src.startsWith("/")) return src;
  const base = src.split("?")[0];
  return `${base}?w=${width}&q=${quality}&auto=format&fit=crop`;
}
