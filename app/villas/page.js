import { Suspense } from "react";
import VillaList from "../_components/VillaList";
import Spinner from "../_components/Spinner";

/* eslint-disable react/no-unescaped-entities */
export const metadata = {
  title: "Villas",
};

export default function Page() {
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

      {/* Using Supense will not cover the content in p tag for a better UE  */}
      <Suspense fallback={<Spinner />}>
        <VillaList />
      </Suspense>
    </div>
  );
}
