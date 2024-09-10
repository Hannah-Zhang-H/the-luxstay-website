import { getBookedDatesByVillaId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getServerSession } from "next-auth/next";
import { authConfig } from "@/app/api/auth/[...nextauth]/route";
import LoginMessage from "./LoginMessage";

async function Reservation({ villa }) {
  // Get the current user session information from the server

  const session = await getServerSession(authConfig);
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByVillaId(villa.id),
  ]);

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        villa={villa}
      />
      {session?.user ? (
        <ReservationForm villa={villa} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
