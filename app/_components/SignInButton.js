"use client";

import { signIn } from "next-auth/react";

function SignInButton() {
  return (
    <button
      type="button"
      onClick={() => {
        console.log("Button clicked"); // 确认点击事件触发
        signIn("google").catch((error) => console.error(error)); // 打印错误信息
      }}
      className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium"
    >
      <img
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        height="24"
        width="24"
      />
      <span>Continue with Google</span>
    </button>
  );
}

export default SignInButton;
