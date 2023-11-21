import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import ProductsV2 from "./features/products/ProductsV2.Layout"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    // <div style={{ display: "flex", gap: "12px" }}>
      <ProductsV2 />
      
    // </div>
  </Provider>
);