import { useState, useEffect } from "react";

function useMakers() {
  const [makers, setMakers] = useState([]);
  const baseUrl = import.meta.env.VITE_API_BASE;

  useEffect(() => {
    const getMakers = async () => {
      try {
        const response = await fetch(`${baseUrl}/all-makers`);
        const data = await response.json();
        setMakers(data);
      } catch (error) {
        console.log(`Failed to fetch makers: ${error}`);
        return error;
      }
    };
    getMakers();
  }, []);

  return makers;
}

export default useMakers;
