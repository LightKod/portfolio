export default function Arrow({ direction = "up", ...props }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" {...props}>
    {direction === "up" ? <path d="M5 19 19 5M5 5h14v14" /> : direction === "left" ? <path d="m14 6-6 6 6 6" /> : <path d="m10 6 6 6-6 6" />}
  </svg>;
}
