import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authConfig } from "@/app/api/auth/[...nextauth]/route";

export default async function Navigation() {
  // Get the current user session information from the server
  const session = await getServerSession(authConfig);
  // console.log(session);

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/villas"
            className="hover:text-accent-400 transition-colors"
          >
            Villas
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>

        <li>
          <a
            href="https://the-luxstay.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Staff log in
          </a>
        </li>

        <li>
          {session?.user.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-2"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy=" no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
