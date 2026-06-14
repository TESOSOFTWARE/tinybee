'use client';

import { useState } from 'react';

/**
 * Renders a vocabulary image from an imageUrl string.
 * Supports multiple formats:
 *  - "iconify:url1|url2"  → two Iconify SVG images side by side
 *  - "iconify:url"        → single Iconify SVG image
 *  - "twemoji:url"        → single Twemoji SVG fallback
 *  - "/path/to/image.png" → static local image
 *  - "https://..."        → external image (Supabase, Pixabay, Pexels, etc.)
 */
export function VocabIcon({ imageUrl, size = 96 }: { imageUrl: string; size?: number }) {
  const [hasError, setHasError] = useState(false);

  const normalizeSupabaseUrl = (url: string): string => {
    if (!url) return url;
    const match = url.match(/https?:\/\/[^\/]+\.supabase\.co\/storage\/v1\/(object|render\/image)\/public\/[^\/]+\/(.+)$/);
    if (match) {
      const filename = match[2];
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uzgrmusaxsgirshvkwzx.supabase.co';
      const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET || 'vocab-icons';
      return `${supabaseUrl}/storage/v1/object/public/${bucketName}/${filename}`;
    }
    return url;
  };

  const normalizedUrl = normalizeSupabaseUrl(imageUrl);

  const iconSize = Math.round(size * 0.78);
  const wrapClass =
    'relative rounded-2xl overflow-hidden border-2 border-indigo-200 bg-white shadow-sm flex items-center justify-center p-2 mb-2';
  const wrapStyle = { width: size, height: size };

  if (hasError || !normalizedUrl) return null;

  // --- iconify: multi/single URL ---
  if (normalizedUrl.startsWith('iconify:')) {
    const urls = normalizedUrl.substring(8).split('|').filter(Boolean);
    return (
      <div className={wrapClass} style={wrapStyle}>
        <div className="flex gap-2 items-center justify-center flex-wrap">
          {urls.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt="Vocabulary Clue"
              style={{ width: iconSize, height: iconSize }}
              className="object-contain drop-shadow-sm"
              onError={() => setHasError(true)}
            />
          ))}
        </div>
      </div>
    );
  }

  // --- twemoji: single URL ---
  if (normalizedUrl.startsWith('twemoji:')) {
    return (
      <div className={wrapClass} style={wrapStyle}>
        <img
          src={normalizedUrl.substring(8)}
          alt="Vocabulary Clue"
          style={{ width: iconSize, height: iconSize }}
          className="object-contain"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  // --- Static local or external image (Supabase, Pixabay, Pexels) ---
  return (
    <div className={wrapClass} style={wrapStyle}>
      <img
        src={normalizedUrl}
        alt="Vocabulary Clue"
        className="max-w-full max-h-full object-contain"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
