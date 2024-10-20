// Pay attention to the structure in this function

import "@/app/_styles/globals.css";

// ================================= Set the font =====================================
// Then use the font class at body tag or other tags
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap", // Can check the font class at Terminal
});

// ================================= Set metadata =====================================
export const metadata = {
  // title: "The LuxStay",
  title: { template: "%s / The LuxStay", default: "Welcome / The LuxStay" },
  description:
    "Peaceful, luxurious lakefront scenery, calm, reflecting lakes, surrounded by stunning high-end natural landscapes - it's all here at LuxStay",
};

// ================================= RootLayout=====================================
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className}  antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="mx-auto max-w-7xl w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
