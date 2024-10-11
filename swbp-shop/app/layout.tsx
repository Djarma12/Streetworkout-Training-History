import "@/app/_styles/globals.css";
import { Roboto_Serif } from "next/font/google";

const roboto = Roboto_Serif({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / SWBP-Shop",
    default: "Welcome / SWBP-Shop",
  },
  description:
    "SWBP is a street workout community located in Serbia, Backa Palanka. We train together, pushing our limits and supporting each other. We compete at various levels, showcasing our skills and dedication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
