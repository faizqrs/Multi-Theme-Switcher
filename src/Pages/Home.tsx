import { useEffect, useState } from "react";
import { getProducts } from "../api/ProductApi";


// Home Page component to display products in grid
const Home = () => {
  // useState hook to hold the list of products fetched from api
  const [products, setProducts] = useState<any[]>([]);

 
// Fetch products when component mount
useEffect(() => {
  getProducts()
    .then(setProducts)
    .catch((err) => console.error("Error:", err));
}, []);

  return (
    // page wrapper with theme based background & text color
    <div
      className="min-h-screen -mt-24 p-4 bg-[var(--bg)] text-[var(--text)] transition-all duration-300"
    >
      {/* // Page Name */}
      <h2 className="text-2xl font-bold mb-4">Home</h2>
      {/* // Grid of products */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className="p-4 rounded shadow border"
            style={{
              backgroundColor: "var(--card-bg, #ffffff)",
              color: "var(--text)",
              borderColor: "var(--card-border, #e5e7eb)",
            }}
          >
            {/* Product Title */}
            <h3 className="font-semibold">{product.title}</h3>
            {/* Description */}
            <p className="text-sm opacity-80">
              {product.description.slice(0, 80)}...
            </p>
            {/* Buy Button Styled as per theme */}
            <button
              className="mt-2 px-3 py-1 rounded"
              style={{
                backgroundColor: "var(--button-bg, #3b82f6)",
                color: "var(--button-text, #ffffff)",
              }}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
