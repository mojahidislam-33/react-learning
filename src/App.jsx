function ProductCard({ title, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />

      <h2>{title}</h2>

      <p>${price}</p>

      <button>Add to Cart</button>
    </div>
  );
}

function App() {
  return (
    <div>
   
      <ProductCard
        title="Headphone"
        price={100}
        image="/headphone.jpg"
      />
    </div>
  );
}

export default App;