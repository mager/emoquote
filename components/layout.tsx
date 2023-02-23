import Header from "./header";
import Footer from "./footer";
import type { ReactNode } from "react";
import { robotoRegular } from "../utils/fonts";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="text-center">
      <Header />
      <main className={robotoRegular.className}>{children}</main>
      <Footer />
    </div>
  );
}
