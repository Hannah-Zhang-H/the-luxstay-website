import Navigation from "./components/Navigation";
// Pay attention to the structure in this function

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
