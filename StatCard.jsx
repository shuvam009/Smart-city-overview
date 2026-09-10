export default function StatCard({ stat }) {
  return (
    <article className="stat-card">
      <div className={`status-dot ${stat.tone}`} />
      <div>
        <p>{stat.label}</p>
        <strong>{stat.value}</strong>
        <span>{stat.detail}</span>
      </div>
    </article>
  )
}