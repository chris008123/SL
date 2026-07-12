import heroIllustration from '../assets/hero-illustration.svg'

/**
 * Hero illustration (inline-SVG asset) that replaces the previous
 * hero-illustration.png.
 *
 * It is rendered through a plain <img> element — the exact integration
 * pattern the original PNG used — so it is guaranteed to size itself from
 * the SVG's intrinsic aspect ratio (no zero-height / blend-mode pitfalls)
 * and to display on both light and dark themes.
 *
 * Animation lives inside the .svg file (SMIL), so no JS is required.
 *
 * Usage:
 *   <HeroIllustration className="w-full object-contain" style={{ maxWidth: 420 }} />
 */
export default function HeroIllustration({ className = '', style, alt = 'Tech team working with AI, cloud and data tools' }) {
  return (
    <img
      src={heroIllustration}
      alt={alt}
      className={`hero-illustration ${className}`}
      style={style}
      loading="lazy"
      decoding="async"
    />
  )
}
