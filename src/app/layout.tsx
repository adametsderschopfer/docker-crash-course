import "normalize.css";
import { PropsWithChildren } from "react";
import ThemeRegistry from "@/theme/theme-registry";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}