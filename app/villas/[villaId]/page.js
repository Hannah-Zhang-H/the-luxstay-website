import TextExpander from "@/app/_components/TextExpander";
import { getVilla, getVillas } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// Dynamically generate the title
export async function generateMetadata({ params }) {
  const { name } = await getVilla(params.villaId);
  return { title: `Villa ${name}` };
}

/*
This code is used to generate static pages for all possible dynamic route parameters (villaId) in the Next.js 
application based on the villa data obtained from the backend. 
It ensures that these pages are pre-generated at build time, 
improving the performance of the application and user experience.
*/
export async function generateStaticParams() {
  const villas = await getVillas();
  // This line of code iterates over the obtained villa array (villas) and creates an object for each villa. This object contains a villaId attribute, which is the value of the villa id converted to a string.
  const ids = villas.map((villa) => ({ villaId: String(villa.id) }));
  return ids;
}

export default async function Page({ params }) {
  // Here the villaId is the same as this folder's name
  const villa = await getVilla(params.villaId);
  const { id, name, maxCapacity, normalPrice, discount, image, description } =
    villa;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image
            src={image}
            alt={`Villa ${name}`}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Villa {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Zew NewLand</span>
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
