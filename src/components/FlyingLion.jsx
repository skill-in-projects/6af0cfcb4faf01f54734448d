// A decorative winged lion that flies across the screen on every page. It ignores clicks.
export default function FlyingLion() {
  return (
    <div className="flying-lion" aria-hidden="true">
      <svg viewBox="0 0 120 90" width="120" height="90">
        <path d="M40 40 Q10 4 4 22 Q18 26 24 38 Q8 36 6 50 Q24 50 34 50 Z" fill="#fde68a" stroke="#b45309" strokeWidth="2" />
        <path d="M80 40 Q110 4 116 22 Q102 26 96 38 Q112 36 114 50 Q96 50 86 50 Z" fill="#fde68a" stroke="#b45309" strokeWidth="2" />
        <ellipse cx="60" cy="58" rx="26" ry="16" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
        <circle cx="60" cy="40" r="22" fill="#d97706" stroke="#b45309" strokeWidth="2" />
        <circle cx="60" cy="40" r="15" fill="#fbbf24" />
        <circle cx="53" cy="37" r="2.5" fill="#1f2937" />
        <circle cx="67" cy="37" r="2.5" fill="#1f2937" />
        <path d="M55 45 Q60 49 65 45" fill="none" stroke="#7c2d12" strokeWidth="2" strokeLinecap="round" />
        <path d="M46 58 Q60 66 74 58" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}
