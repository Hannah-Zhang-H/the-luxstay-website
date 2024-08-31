import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <h1>The lux-stay. Welcome to paradise</h1>
      {/* use Link instead of a, the page will ne refetched again. Speed up. */}
      <Link href="/villas">Explore luxtury villas</Link>
    </div>
  );
}
