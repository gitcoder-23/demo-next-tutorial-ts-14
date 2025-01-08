import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <Link href="/blog">Blog</Link>&nbsp;
      <Link href="/products">Products</Link>
    </div>
  );
}
