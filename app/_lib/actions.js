"use server";

import { getServerSession } from "next-auth/next";
import { authConfig } from "@/app/api/auth/[...nextauth]/route";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

export async function updateGuestInfo(formData) {
  const session = await getServerSession(authConfig);
  if (!session) throw new Error("You must be logged in");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  const updateData = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("Guest could not be updated");
  }

  // Clean all the cache in this route and reload the data as long as the flag get changed
  revalidatePath("/account/profile");
}
