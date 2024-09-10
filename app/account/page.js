import Navigation from "../_components/Navigation";

import { getServerSession } from "next-auth/next";
import { authConfig } from "@/app/api/auth/[...nextauth]/route";
export const metadata = {
  title: "Account",
};
async function Account() {
  const session = await getServerSession(authConfig);
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome, {session?.user?.name || "Guest"}
      </h2>
    </div>
  );
}

export default Account;
