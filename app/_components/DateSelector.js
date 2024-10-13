"use client";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, villa, bookedDates }) {
  const {
    range = { from: null, to: null },
    setRange,
    resetRange,
  } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { normalPrice, discount } = villa;
  const numNights =
    displayRange.from && displayRange.to
      ? differenceInDays(displayRange.to, displayRange.from)
      : 0;
  const villaPrice = numNights * (normalPrice - discount);

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;
  const parsedBookedDates = bookedDates.map((date) =>
    typeof date === "string" ? new Date(date) : date
  );

  // Convert time zone UTC
  const handleSelect = (range) => {
    if (range?.from) {
      const utcFrom = new Date(
        Date.UTC(
          range.from.getFullYear(),
          range.from.getMonth(),
          range.from.getDate()
        )
      );
      range.from = utcFrom;
    }
    if (range?.to) {
      const utcTo = new Date(
        Date.UTC(
          range.to.getFullYear(),
          range.to.getMonth(),
          range.to.getDate()
        )
      );
      range.to = utcTo;
    }
    setRange(range); // Renew range
  };

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center rdp"
        mode="range"
        min={minBookingLength + 1}
        max={maxBookingLength}
        startMonth={new Date()}
        minDate={new Date()}
        maxDate={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        onSelect={handleSelect}
        selected={displayRange}
        disabled={(curDate) =>
          isPast(curDate) ||
          parsedBookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${normalPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${normalPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${normalPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${villaPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Reset Date
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
