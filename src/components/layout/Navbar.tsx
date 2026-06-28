// src/components/layout/Navbar.tsx
import { Link, NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          {/* Replace with OpenHaus logo image */}
          <div className="h-8 w-8 rounded bg-yellow-400" />
          <span className="font-semibold tracking-wide">
            OPENHAUS <span className="text-xs text-slate-400">by SkinLabs®</span>
          </span>
        </Link>
        <nav className="flex gap-4 text-sm">
          <NavLink to="/marketplace" className="hover:text-yellow-300">
            Marketplace
          </NavLink>
          <NavLink to="/rewards" className="hover:text-yellow-300">
            Rewards
          </NavLink>
          <NavLink to="/account" className="hover:text-yellow-300">
            Account
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
