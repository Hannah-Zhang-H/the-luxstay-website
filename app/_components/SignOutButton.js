import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";
function SignOutButton() {
  const handleSignOut = async () => {
    // Check the result of signOut
    try {
      // Stop using signOut to redirect
      await signOut({ redirect: false });
      console.log("Sign out complete, redirecting manually");

      // redirect manually
      window.location.href = "/";
    } catch (error) {
      console.error("SignOut error:", error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full"
    >
      <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-600" />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;
