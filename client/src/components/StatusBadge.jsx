const styles = {
  Planned: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  "In Progress": "border-secondary/40 bg-secondary/10 text-secondary",
  Completed: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  Active: "border-secondary/40 bg-secondary/10 text-secondary",
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
        styles[status] || styles.Planned
      }`}
    >
      {status}
    </span>
  );
}
