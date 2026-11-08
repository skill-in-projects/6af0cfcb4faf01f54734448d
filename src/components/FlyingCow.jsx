// A decorative winged cow that flies across the screen on every page. It ignores clicks.
export default function FlyingCow() {
  return (
    <div className="flying-cow" aria-hidden="true">
      <svg viewBox="0 0 120 90" width="120" height="90">
        <path d="M44 40 Q18 8 10 20 Q22 28 30 42 Z" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
        <path d="M76 40 Q102 8 110 20 Q98 28 90 42 Z" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
        <ellipse cx="60" cy="54" rx="34" ry="20" fill="#ffffff" stroke="#334155" strokeWidth="2" />
        <ellipse cx="46" cy="50" rx="8" ry="6" fill="#1f2937" />
        <ellipse cx="72" cy="60" rx="9" ry="6" fill="#1f2937" />
        <path d="M30 60 L28 74 M44 66 L44 80 M76 66 L76 80 M90 60 L92 74" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="94" cy="40" rx="16" ry="14" fill="#ffffff" stroke="#334155" strokeWidth="2" />
        <ellipse cx="104" cy="44" rx="7" ry="5" fill="#fbcfe8" stroke="#334155" strokeWidth="1.5" />
        <path d="M84 30 L80 20 M100 28 L104 18" stroke="#a16207" strokeWidth="3" strokeLinecap="round" />
        <circle cx="92" cy="36" r="2.5" fill="#1f2937" />
        <ellipse cx="82" cy="33" rx="4" ry="6" fill="#1f2937" transform="rotate(-20 82 33)" />
      </svg>
    </div>
  )
}
