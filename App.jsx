import "./App.css";
import KolkataMap from "./features/KolkataMap.jsx";
import StatCard from "./features/StatCard.jsx";
import PortalCard from "./features/PortalCard.jsx";

const cityStats = [
  { label: "Air quality", value: "72 AQI", tone: "amber", detail: "Moderate" },
  {
    label: "Traffic flow",
    value: "High",
    tone: "red",
    detail: "8 active zones",
  },
  {
    label: "Water supply",
    value: "Normal",
    tone: "green",
    detail: "98% operational",
  },
  {
    label: "Power status",
    value: "Stable",
    tone: "blue",
    detail: "2 planned works",
  },
];

const notices = [
  "Monsoon drainage work: Salt Lake, Sector V",
  "Road resurfacing: AJC Bose Road",
  "Water supply restored: Ward 66",
];

export default function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Kolkata Smart City home">
          <span className="brand-mark">KSC</span>
          <span>
            <b>Kolkata</b> Smart City<small>Citizen Command Center</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#updates">City Updates</a>
          <a href="#contact">Contact</a>
          <button className="notification" aria-label="View notifications">
            ♧<i>3</i>
          </button>
          <button className="signup">Sign up</button>
        </nav>
      </header>

      <section className="hero" id="home">
        <aside className="sidebar" aria-label="Live city status">
          <div className="sidebar-heading">
            <span>LIVE OVERVIEW</span>
            <i className="live-pulse">Live</i>
          </div>
          <h1>City at a glance</h1>
          <p className="updated">Updated a few seconds ago</p>
          <div className="stat-list">
            {cityStats.map((stat) => (
              <StatCard stat={stat} key={stat.label} />
            ))}
          </div>
          <button className="report-button">
            <span>＋</span> Report an issue
          </button>
          <div className="notice-box">
            <p>Latest notice</p>
            <strong>{notices[0]}</strong>
            <a href="#updates">See all updates →</a>
          </div>
        </aside>

        <section
          className="map-panel"
          aria-label="Interactive live Kolkata map"
        >
          <KolkataMap />
          <div className="map-topline">
            <span className="map-title">Kolkata live map</span>
            <span className="map-subtitle">42 citizen reports nearby</span>
          </div>
          <div className="layer-control" aria-label="Map layers">
            <button className="selected">Issues</button>
            <button>Traffic</button>
            <button>Air</button>
            <button>Works</button>
          </div>
          <div className="map-legend">
            <span>
              <i className="legend-dot danger" />
              Urgent
            </span>
            <span>
              <i className="legend-dot amber-dot" />
              In progress
            </span>
            <span>
              <i className="legend-dot green-dot" />
              Resolved
            </span>
          </div>
        </section>
      </section>

      <section className="portals" aria-label="Access portals">
        <div className="section-intro">
          <span>ACCESS YOUR PORTAL</span>
          <h2>How would you like to continue?</h2>
        </div>
        <div className="portal-grid">
          <PortalCard
            icon="⌂"
            title="Citizen portal"
            text="Report issues and track their progress."
            button="Citizen login"
            variant="citizen"
          />
          <PortalCard
            icon="⌁"
            title="Staff portal"
            text="Manage assigned work and field updates."
            button="Staff login"
            variant="staff"
          />
          <PortalCard
            icon="▣"
            title="Admin portal"
            text="Monitor operations across the city."
            button="Admin login"
            variant="admin"
          />
        </div>
      </section>

      <section className="updates" id="updates">
        <div>
          <span>CITY UPDATES</span>
          <h2>What’s happening in Kolkata</h2>
        </div>
        <div className="update-list">
          {notices.map((notice, index) => (
            <div className="update" key={notice}>
              <b>0{index + 1}</b>
              <p>{notice}</p>
              <a href="#contact">View</a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
