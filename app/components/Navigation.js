import Link from "next/link";

// This is a component, each page will use it as the default decoration

function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/villas">Villas</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/account">Your Account</Link>
      </li>
    </ul>
  );
}

export default Navigation;
