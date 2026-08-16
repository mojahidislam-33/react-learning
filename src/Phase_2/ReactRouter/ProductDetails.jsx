import { useParams, Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 800,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 500,
  },
  {
    id: 3,
    name: "Headphone",
    price: 100,
  },
];

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div>
      <h1>Product Details</h1>

      <h2>{product.name}</h2>

      <p>Price: ${product.price}</p>

      <Link to="/products">
        Back to Products
      </Link>
    </div>
  );
}

export default ProductDetails;