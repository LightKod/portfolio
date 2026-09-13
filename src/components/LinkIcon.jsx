export default function LinkIcon({ label }) {
  const name = label.toLowerCase();
  let drawing = <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a18 18 0 0 1 0 18 18 18 0 0 1 0-18Z" /></>;
  if (name.includes("résumé")) drawing = <><path d="M14 3H5v18h14V8l-5-5Z M14 3v5h5M8 12h8M8 16h6" /></>;
  if (name.includes("github")) drawing = <><path d="M9 19c-4 1-4-2-6-2M9 22v-4c-5-1-6-7-3-10-.5-1-.5-3 0-4 2 0 3 1 4 1h4c1 0 3-1 4-1 .5 1 .5 3 0 4 3 3 2 9-3 10v4" /></>;
  if (name.includes("linkedin")) drawing = <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7M7 7v.01M11 17v-7M11 13c0-4 6-4 6 0v4" /></>;
  if (name.includes("steam")) drawing = <><circle cx="16.5" cy="7.5" r="4" /><circle cx="6.5" cy="17" r="3" /><path d="m9 15 4.5-5M3 15l4.5 2M10 18l7-6" /></>;
  if (/trailer|demo|youtube/.test(name)) drawing = <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3V9Z" /></>;
  if (name.includes("google play")) drawing = <><path d="m5 3 15 9-15 9V3ZM5 3l11 13M5 21 16 8" /></>;
  if (name.includes("email")) drawing = <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>;
  return <svg className="link-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawing}</svg>;
}
