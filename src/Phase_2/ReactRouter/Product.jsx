function Product() {

    const products = [
       { id: 1, name: "Laptop" },
       { id: 2, name: "Phone" },
       { id: 3, name: "Headphone" },
    ];

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product)=>{
        return(
            <p key={product.id}>id: {product.id} name: {product.name} </p>
        );
      })}
    </div>
  );
}

export default Product;