import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function MakerInfo() {
  const { makerId } = useParams();
  const baseUrl = import.meta.env.VITE_API_BASE;
  const [makerInfo, setMakerInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMakerInfo = async () => {
      try {
        const response = await fetch(`${baseUrl}/maker/${makerId}`);
        const data = await response.json();
        setMakerInfo(data);
        setLoading(false);
      } catch (error) {
        console.log(`Failed to fetch maker ${makerId} info: ${error}`);
      }
    };
    getMakerInfo();
  }, []);

  if (loading) return <p>Loading...</p>;

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
      <div className="flex justify-center mt-4">
        <button className="btn btn-outline">
          <Link to={"../makers"}>Back</Link>
        </button>
      </div>
    </div>
  );
}

export default MakerInfo;
