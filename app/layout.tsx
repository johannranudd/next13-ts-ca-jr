import "./globals.css";
// import Head from "./head";
import ColorThemeProvider from "../context/colorThemeProvider";
import { ContextProvider } from "../context/context";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";

export const metadata = {
  title: "ca-johann-ranudd",
  description: "Metadata description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //  children = page.tsx
  return (
    <html lang="en">
      {/* <Head /> */}
      <body className="relative min-h-screen">
        <ContextProvider>
          <ColorThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ColorThemeProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
