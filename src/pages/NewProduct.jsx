import { useState } from "react";
import Title from "../components/Title";
import useMakers from "../hooks/useMakers";
import useMakerMap from "../hooks/useMakerMap";
import useCategories from "../hooks/useCategories";
import useCategoryMap from "../hooks/useCategoryMap";

function NewProduct() {
  const makers = useMakers();
  const categories = useCategories();
  const makerMap = useMakerMap();
  const categoryMap = useCategoryMap();

  const [newProd, setNewProd] = useState({
    name: "",
    quantity: 0,
    categoryId: null,
    makerId: null,
  });
  // const [isError, setIsError] = useState(false);

  function handleNameChange(event) {
    setNewProd({
      ...newProd,
      name: event.target.value,
    });
  }

  function handleQuantityChange(event) {
    setNewProd({
      ...newProd,
      quantity: event.target.value,
    });
  }

  function handleMakerChange(event) {
    const maker = event.target.value;
    setNewProd({
      ...newProd,
      makerId: makerMap[maker],
    });
  }

  function handleCategoryChange(event) {
    const category = event.target.value;
    setNewProd({
      ...newProd,
      categoryId: categoryMap[category],
    });
  }

  function handleSubmit() {
    console.log("Submitted the following product");
    console.log(newProd);
  }

  if (!categories || !makers) return <p>Loading...</p>;
  // if (isError) return <p>Something went wrong.</p>;

  return (
    <>
      <Title title={"Add a Product"} />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row">
          <label htmlFor="new-product" className="label">
            Product Name
          </label>
          <input
            className="input"
            type="text"
            id="new-product"
            value={newProd.name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="flex flex-row">
          <label htmlFor="quantity" className="label">
            Quantity
          </label>
          <input
            className="input"
            type="number"
            id="quantity"
            value={newProd.quantity}
            onChange={handleQuantityChange}
            required
          />
        </div>
        <div className="flex flex-row">
          <select
            name="category"
            id="category"
            className="select"
            onChange={handleCategoryChange}
          >
            <option>Choose a category</option>
            {categories.map((cat) => {
              return <option key={cat.id}>{cat.name}</option>;
            })}
          </select>
        </div>
        <div className="flex flew-row">
          <select
            required
            name="maker"
            id="maker"
            className="select"
            onChange={handleMakerChange}
          >
            <option disabled selected>
              Choose a maker
            </option>
            {makers.map((maker) => {
              return <option key={maker.id}>{maker.name}</option>;
            })}
          </select>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default NewProduct;
