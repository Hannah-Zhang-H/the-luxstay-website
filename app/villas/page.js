import { Suspense } from "react";
import VillaList from "../_components/VillaList";
import Spinner from "../_components/Spinner";
import Filter from "@/app/_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

// It's a middle ground between a fully dynamic and fully static
// By changing the frequence of change, the site will refreash every this frequence
// export const revalidate = 3600;
// But I decided to do it in the specific VillaList component, because
// this page is stll static, only the data needs dynamic

/* eslint-disable react/no-unescaped-entities */
export const metadata = {
  title: "Villas",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Villas
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious villas, located right in the heart of Zew Nealand.
        Imagine waking up to beautiful mountain views, spending your days
        exploring the dark forests around, or just relaxing in your private hot
        tub under the stars. Enjoy nature's beauty in your own little home away
        from home. The perfect spot for a peaceful, calm vacation. Welcome to
        paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      {/* Using Supense will not cover the content in p tag for a better UE  */}
      <Suspense fallback={<Spinner />} key={filter}>
        <VillaList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
