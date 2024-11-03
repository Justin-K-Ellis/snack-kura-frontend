import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul className="menu bg-base-200 rounded-box w-56 m-2 border border-slate-500 h-full md:w-1/6">
      <li>
        <Link to={"./products"}>All Products</Link>
      </li>
      <li>
        <Link to={"./makers"}>Makers</Link>
      </li>
      <li>
        <Link to={"./categories"}>Categories</Link>
      </li>
    </ul>
  );
}

export default Sidebar;
