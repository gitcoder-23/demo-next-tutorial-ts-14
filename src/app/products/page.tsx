import Link from "next/link";

interface Product {
  pid: number;
}

// replace ==> make to remove the back navigation

const productList: Product[] = [
  { pid: 1 },
  { pid: 2 },
  { pid: 3 },
  { pid: 4 },
  { pid: 5 },
  { pid: 6 },
];

export default function ProductList() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      {productList.map((product) => (
        <h2 key={product.pid}>
          <Link href={`/products/${product.pid}`} replace = {product.pid=== 3}>Product-{product.pid}</Link>
        </h2>
      ))}
    </>
  );
}
