import { useEffect } from "react";
import { useState } from "react";

function ProductTable() {
  const baseUrl = import.meta.env.VITE_API_BASE;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(`${baseUrl}/all-products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(`Error when fetching products: ${error}`);
      }
    };
    getProducts();
  }, []);

  return (
    <table className="table md:w-11/12 border border-slate-400 rounded mx-auto mb-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Maker</th>
          <th>Quantity</th>
        </tr>
      </thead>

      <tbody>
        {products.map((prod) => {
          return (
            <tr key={prod.id} className="hover">
              <td>{prod.name}</td>
              <td>{prod.category.name}</td>
              <td>{prod.maker.name}</td>
              <td>{prod.quantity}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
