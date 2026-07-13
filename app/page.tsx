import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello NextJS

      Blog Page <Link href="/blogs/1">Blogs</Link>
    </div>
  );
}
