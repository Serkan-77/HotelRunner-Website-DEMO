const paths: Record<string, React.ReactNode> = {
  pool: (
    <>
      <path d="M3 16c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0 3-1.2 4.5 0" />
      <path d="M3 20c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0 3-1.2 4.5 0" />
      <path d="M7 12V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v6" />
      <path d="M16 12V8" />
    </>
  ),
  wifi: (
    <>
      <path d="M2 8.5a16 16 0 0 1 20 0" />
      <path d="M5.5 12a11 11 0 0 1 13 0" />
      <path d="M9 15.5a6 6 0 0 1 6 0" />
      <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  parking: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 16V7h3.5a2.75 2.75 0 1 1 0 5.5H9" />
    </>
  ),
  fitness: (
    <>
      <path d="M6.5 7v10" />
      <path d="M17.5 7v10" />
      <path d="M3 9.5v5" />
      <path d="M21 9.5v5" />
      <path d="M6.5 12h11" />
    </>
  ),
  garden: (
    <>
      <path d="M12 21V9" />
      <path d="M12 9C12 5 9 3 5 3c0 4 3 6 7 6Z" />
      <path d="M12 13c0-4 3-6 7-6 0 4-3 6-7 6Z" />
    </>
  ),
  transfer: (
    <>
      <path d="M3 12h13l-3-3" />
      <path d="M13 15l3-3" />
      <rect x="3" y="6" width="13" height="9" rx="1.5" />
      <circle cx="7" cy="18" r="1.5" />
      <circle cx="14" cy="18" r="1.5" />
    </>
  ),
  "room-service": (
    <>
      <path d="M3 17h18" />
      <path d="M5 17a7 7 0 0 1 14 0" />
      <path d="M12 10V6" />
      <circle cx="12" cy="4" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  laundry: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="13" r="4" />
      <path d="M8 6.5h.01" />
      <path d="M11 6.5h.01" />
    </>
  ),
  luggage: (
    <>
      <rect x="5" y="8" width="14" height="12" rx="2" />
      <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M9 12v4" />
      <path d="M15 12v4" />
    </>
  ),
  housekeeping: (
    <>
      <path d="M12 3c-2 3-4 5.5-4 8.5A4 4 0 0 0 12 16a4 4 0 0 0 4-4.5C16 8.5 14 6 12 3Z" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </>
  ),
  phone: (
    <path d="M4 5c0-1 1-2 2-2h2l2 4-2 1.5a10 10 0 0 0 5.5 5.5L15 12l4 2v2c0 1-1 2-2 2C10.5 18 4 11.5 4 5Z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M4 20l1.3-3.9A8 8 0 1 1 8.9 19L4 20Z" />
      <path d="M8.5 9c0 3.5 3 6.5 6.5 6.5.6 0 1-.5.8-1l-.4-1.5a.8.8 0 0 0-.9-.5l-1.2.3a5 5 0 0 1-3-3l.3-1.2a.8.8 0 0 0-.5-.9L8.6 7.2c-.5-.2-1 .2-1 .8Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export default function Icon({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  const content = paths[name];
  if (!content) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
