import Link from "next/link";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-20">
      <Link href="/home" className="mt-10">
        Go to About Page
      </Link>
    </main>
  );
}
