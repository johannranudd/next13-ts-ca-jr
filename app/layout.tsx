import "./globals.css";
import { ContextProvider } from "./context/context";
import ColorThemeProvider from "./context/colorThemeProvider";
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
  return (
    <html lang="en">
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

// suppressHydrationWarning
