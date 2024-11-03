import { useEffect } from "react";
import { useState } from "react";

import Title from "../components/Title";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch(`${baseUrl}/all-categories`);
      const data = await response.json();
      setCategories(data);
    };
    getCategories();
  }, []);

  const baseUrl = import.meta.env.VITE_API_BASE;
  return (
    <main>
      <Title title={"Categories"} />
      <ul>
        {categories.map((cat) => {
          return <li key={cat.id}>{cat.name}</li>;
        })}
      </ul>
    </main>
  );
}

export default Categories;
