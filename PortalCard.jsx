export default function PortalCard({ icon, title, text, button, variant }) {
  return (
    <article className="portal-card">
      <div className={`portal-icon ${variant}`}>{icon}</div>
      <div className="portal-copy">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <button className={`portal-button ${variant}`}>{button}</button>
    </article>
  )
}
