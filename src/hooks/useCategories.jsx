import { useState, useEffect } from "react";

function useCategories() {
  const [categories, setCategories] = useState([]);
  const baseUrl = import.meta.env.VITE_API_BASE;

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(`${baseUrl}/all-categories`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(`Failed to get categories: ${error}`);
      }
    };
    getCategories();
  }, []);
  return categories;
}

export default useCategories;
