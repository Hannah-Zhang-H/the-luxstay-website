import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
// Pay attention to the structure in this function

// This metadata is the title
export const metadata = {
  title: "The LuxStay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
