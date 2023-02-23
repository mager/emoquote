import { Roboto } from "@next/font/google";

const robotoRegular = Roboto({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});
const robotoBold = Roboto({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});

export { robotoRegular, robotoBold };
