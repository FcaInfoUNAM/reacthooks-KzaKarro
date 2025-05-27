import { useState, useEffect } from "react";
import Card from "./Card"; // Se importa el Card para usarlo

function ProductGrid() {
    //Se crea la sonstante y el constructor
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);// Ver los datos en la consola
        setProducts(data);// Se usa el constructor para asignar a use state los productos
      })
  }, []); // Para que la peticion a la API se ejecute solo una vez

  return (
    <div
      key="product-grid"
      className="grid grid-cols-4 place-items-stretch gap-4 p-8 dark:bg-gray-900"
    >
      {products.map((e) => (
        <Card
          key={e.id}
          title={e.title}
          paragraph={e.description}
          image={e.image}
          model={e.price}
        />
      ))}
    </div> //Se hace un map a la variable d eproductos para generer Cards
  );
}

export default ProductGrid;
