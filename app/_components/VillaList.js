import VillaCard from "./VillaCard";
import { getVillas } from "../_lib/data-service";
import { unstable_noStore as noStore } from "next/cache";

async function VillaList() {
  // This function can be used to declaratively opt out of static rendering and indicate a particular component should not be cached.
  noStore();

  const villas = await getVillas();

  if (!villas.length) return null;

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
        {villas.map((villa) => (
          <VillaCard villa={villa} key={villa.id} />
        ))}
      </div>
    </div>
  );
}

export default VillaList;
