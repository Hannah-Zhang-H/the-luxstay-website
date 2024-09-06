import { getBookedDatesByVillaId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ villa }) {
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
      <ReservationForm villa={villa} />
    </div>
  );
}

export default Reservation;
