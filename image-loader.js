// Simple image loader for static exports
module.exports = function imageLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`;
};
