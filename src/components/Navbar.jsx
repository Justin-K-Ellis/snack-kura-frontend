import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-base-200 border-b border-slate-500">
      <div className="navbar-center text-red-600 text-3xl font-bold">
        <Link to={"/"}>Snack Kura - スナック倉</Link>
      </div>
    </nav>
  );
}

export default Navbar;
