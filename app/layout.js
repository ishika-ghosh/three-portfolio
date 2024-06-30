import "./globals.css";
import StarCanvas from "@/components/canvases/StarCanvas";
import { ThemeProvider } from "@/components/ThemeProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PORTFOLIO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
