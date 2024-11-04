import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function MakerInfo() {
  const { makerId } = useParams();
  const baseUrl = import.meta.env.VITE_API_BASE;
  const [makerInfo, setMakerInfo] = useState([]);

  useEffect(() => {
    const getMakerInfo = async () => {
      try {
        const response = await fetch(`${baseUrl}/maker/${makerId}`);
        const data = await response.json();
        setMakerInfo(data);
      } catch (error) {
        console.log(`Failed to fetch maker ${makerId} info: ${error}`);
      }
    };
    getMakerInfo();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">{makerInfo.name}</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {makerInfo.products.map((prod) => {
            return (
              <tr key={prod.id}>
                <td>{prod.name}</td>
                <td>{prod.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MakerInfo;
