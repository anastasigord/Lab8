import { Link, useLocation } from 'react-router-dom'
import '../styles/sidebar.css'

function Sidebar() {
  const location = useLocation()

  const isActive = (path) => location.pathname.startsWith(path)

  return (
    <aside className="sidebar">
      <nav className="sidebarNav">
        <div className="navSection">
          <h2 className="navTitle">Меню</h2>
          <ul className="navList">
            <li>
              <Link
                to="/admin/inventory"
                className={`navLink ${isActive('/admin/inventory') ? 'active' : ''}`}
              >
                📋 Адмін-панель
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={`navLink ${isActive('/gallery') ? 'active' : ''}`}>
                🖼️ Галерея
              </Link>
            </li>
            <li>
              <Link to="/favorites" className={`navLink ${isActive('/favorites') ? 'active' : ''}`}>
                ❤️ Улюблені
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
