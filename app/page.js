import Link from "next/link";
import Image from "next/image";
// I don't want to specify the actual width and height, so I import this image
import bg from "@/public/about-1.jpg";

export default function Home() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        alt="Mountains and forests with two cabins"
        fill
        className="object-cover object-top"
        placeholder="blur"
        quality={80}
      />
      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-900 mb-8  tracking-tight font-normal">
          Welcome home.
        </h1>
        <Link
          href="/villas"
          className="bg-primary-800 px-8 py-6 text-accent-50 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury villas
        </Link>
      </div>
    </main>
  );
}
