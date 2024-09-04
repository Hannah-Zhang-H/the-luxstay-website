/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import bg from "@/public/bg.png";
import about2 from "@/public/about-2.jpg";
import { getVillas } from "../_lib/data-service";

export const revalidate = 5;

export const metadata = {
  title: "About",
};
export default async function Page() {
  const villas = await getVillas();
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The LuxStay
        </h1>

        <div className="space-y-8">
          <p>
            Where serene landscapes and luxurious comfort meet in perfect
            harmony. Nestled in the heart of Zew Nealand, this retreat is your
            haven, far removed from the hustle and bustle. But it's more than
            just the exquisite villas—it's about reconnecting with nature and
            savoring life's simple joys with loved ones.
          </p>
          <p>
            Our {villas.length} exclusive villas offer a warm and inviting
            refuge, yet the true tranquility and freedom lie in the majestic
            mountains that surround you. Stroll through vibrant woodlands,
            inhale the crisp, clean air, and gaze at the stars from the comfort
            of your private hot tub or by the crackling campfire.
          </p>
          <p>
            This is a place where unforgettable memories are crafted, amidst the
            beauty of nature. It's an escape to unwind, rejuvenate, and cherish
            the simple pleasure of being together in a breathtaking environment.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={bg}
          alt="Family sitting around a fire pit in front of villa"
        />
      </div>

      <div className="col-span-2">
        <Image src={about2} alt="Family that manages The LuxStay" />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1966
        </h1>

        <div className="space-y-8">
          <p>
            Since 1966, The LuxStay has been a beloved retreat, cherished and
            nurtured by our family across generations. Founded by our
            grandparents, this sanctuary has been a labor of love, handed down
            with care and a commitment to creating a warm and inviting
            atmosphere for all who visit.
          </p>
          <p>
            Over the years, we’ve preserved the soul of The LuxStay, combining
            the enduring beauty of the mountains with the personalized care that
            only a family business can provide. At The LuxStay, you’re more than
            a guest; you’re part of our family’s legacy. Visit us soon, where
            tradition and tranquility come together, and each stay feels like
            coming home.
          </p>

          <div>
            <a
              href="/villas"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury villas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
