import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-20 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-muted">This page does not exist.</p>
      <Link href="/" className="text-accent hover:underline">
        Back to home
      </Link>
    </div>
  );
}
