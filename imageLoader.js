// This is a custom image loader that works with GitHub Pages
module.exports = function imageLoader({ src, width, quality }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Remove any leading slashes from the src
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  
  // For local images, use the basePath
  if (!src.startsWith('http')) {
    return `${basePath}/${cleanSrc}${width ? `?w=${width}&q=${quality || 75}` : ''}`;
  }
  
  // For external images, use the original URL
  return src;
};
