import { Poppins } from "next/font/google";

import "./globals.css";
import StarCanvas from "@/components/canvases/StarCanvas";
import { ThemeProvider } from "@/components/ThemeProvider";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["200", "500", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "PORTFOLIO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <StarCanvas />
        </ThemeProvider>
      </body>
    </html>
  );
}
