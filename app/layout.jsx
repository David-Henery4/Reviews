import "./globals.css";
import {Navbar} from "../components"
import { orbitron } from "./font";

export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
  description: "Only the best indie game reviews for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className="bg-orange-50 flex flex-col px-6 py-2 min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="text-center">
          Game data and images courtesy of{" "}
          <a
            href="https://rawg.io/"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
