import { useEffect, useState } from "react";

function ProductDescription() {
    const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);// Ver los datos en la consola
        setProduct(data);// Se usa el constructor para asignar a use state los productos
      })
  }, []); // Para que la peticion a la API se ejecute solo una vez

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div className="border rounded-xl shadow-md p-4 bg-white dark:bg-gray-800 text-black dark:text-white">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
      <p className="mt-2 font-bold">Precio: ${product.price}</p>
      <p className="text-sm italic text-gray-500">Categoría: {product.category}</p>
      <p className="text-sm">
        ⭐ {product.rating?.rate} ({product.rating?.count} valoraciones)
      </p>
    </div>
  );
}

export default ProductDescription;