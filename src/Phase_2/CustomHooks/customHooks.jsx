import useFetch from "./useFetch";

function CustomHooks() {
  const {
    data,
    loading,
    error,
  } = useFetch(
    "https://fakestoreapi.com/products"
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Products</h1>

      {data.map((product) => (
        <p key={product.id}>
          {product.title}
        </p>
      ))}
    </div>
  );
}

export default CustomHooks;