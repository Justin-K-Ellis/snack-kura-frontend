import ProductTable from "../components/ProductTable";
import Title from "../components/Title";

import { Link } from "react-router-dom";

function Products() {
  return (
    <main>
      <Title title={"All Products"} />
      <ProductTable />
      <div className="flex justify-center">
        <button className="btn btn-outline">
          <Link to={"../products/new"}>New Product</Link>
        </button>
      </div>
    </main>
  );
}

export default Products;
