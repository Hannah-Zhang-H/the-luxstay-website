// import { getBookedDatesByVillaId, getVilla } from "@/app/_lib/data-service";

// export async function GET(request, { params }) {
//   const { villaId } = params;

//   try {
//     const [villa, bookedDates] = await Promise.all([
//       getVilla(villaId),
//       getBookedDatesByVillaId(villaId),
//     ]);
//     return Response.json({ test: "test" });
//   } catch {
//     return Response.json({ message: "Villa not found" });
//   }
// }

// // export async function POST() {}
