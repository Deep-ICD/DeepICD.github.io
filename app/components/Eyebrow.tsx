export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">
      {children}
    </p>
  );
}
