import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
// Pay attention to the structure in this function

import "@/app/_styles/globals.css";

// This metadata is the title
export const metadata = {
  // title: "The LuxStay",
  title: { template: "%s / The LuxStay", default: "Welcome / The LuxStay" },
  description:
    "Peaceful, luxurious lakefront scenery, calm, reflecting lakes, surrounded by stunning high-end natural landscapes - it's all here at LuxStay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
        <footer>Copyright by The LuxStay</footer>
      </body>
    </html>
  );
}
