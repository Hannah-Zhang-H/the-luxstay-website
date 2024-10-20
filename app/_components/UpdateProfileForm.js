"use client";
import { useState } from "react";
import { updateGuestInfo } from "../_lib/actions";
import { useFormStatus } from "react-dom";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ children, guest }) {
  const [count, setCount] = useState();
  const { fullName, email, nationality, nationalID, countryFlag, phontNumber } =
    guest;

  return (
    <form
      action={updateGuestInfo}
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          defaultValue={fullName}
          name="fullName"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          defaultValue={email}
          name="email"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-5 rounded-sm"
          />
        </div>
        {/* this children is a server component, we can't use server component in a client component, but we can pass it as a children */}
        {children}
      </div>

      {/* <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          defaultValue={nationalID}
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div> */}

      <div className="flex justify-end items-center gap-4">
        <SubmitButton>Submit</SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
