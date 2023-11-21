import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./ProductsV2.Slice";
import { MoonLoader } from "react-spinners";

const ProductsV2 = () => {
  const products = useSelector((state) => state.mereProducts);
  const dispatch = useDispatch();

  console.log("1.: Loading Products component ", products);

  useEffect(() => {
    console.log("2. Dispatching Actions from components");
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        My Products {products.isLoading && <MoonLoader size={20} />}
      </h1>
      <div>
        <ul>
          {Array.isArray(products.data) &&
            products.data.map((product) => {
              return <li key={product.id}>{product.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default ProductsV2;
