import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import TextExpander from "@/app/_components/TextExpander";
import Villa from "@/app/_components/Villa";
import { getVilla, getVillas } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";

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
  // // Here the villaId is the same as this folder's name
  const villa = await getVilla(params.villaId);

  // // ReservationForm and DateSelector are the client components, we get the data from this
  // // server component and pass it to those client components
  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByVillaId(params.villaId);

  // const [villa, settings, bookedDates] = await Promise.all([
  //   getVilla(params.villaId),
  //   getSettings(),
  //   getBookedDatesByVillaId(params.villaId),
  // ]);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Villa villa={villa} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {villa.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation villa={villa} />
        </Suspense>
      </div>
    </div>
  );
}
