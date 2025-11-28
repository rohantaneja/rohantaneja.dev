"use client";

interface NavbarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

const pages = ["About", "Resume", "Contact"];

export default function Navbar({ activePage, onPageChange }: NavbarProps) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {pages.map((page) => (
          <li key={page} className="navbar-item">
            <button
              className={`navbar-link ${activePage === page.toLowerCase() ? "active" : ""}`}
              onClick={() => onPageChange(page.toLowerCase())}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
