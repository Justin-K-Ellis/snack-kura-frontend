import { useEffect } from "react";
import { useState } from "react";

import Card from "../components/Card";
import Title from "../components/Title";

function Makers() {
  const baseUrl = import.meta.env.VITE_API_BASE;
  const [makers, setMakers] = useState([]);

  useEffect(() => {
    try {
      const getMakers = async () => {
        const response = await fetch(`${baseUrl}/all-makers`);
        const data = await response.json();
        setMakers(data);
      };
      getMakers();
    } catch (error) {
      console.log(`Error when fetching makers: ${error}.`);
    }
  }, []);

  return (
    <main>
      <Title title={"Makers"} />
      <div className="flex flex-row flex-wrap gap-2 justify-center">
        {makers.map((maker) => {
          return <Card key={maker.id} title={maker.name} />;
        })}
      </div>
    </main>
  );
}

export default Makers;
