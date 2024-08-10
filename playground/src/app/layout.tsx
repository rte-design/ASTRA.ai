import { ConfigProvider } from "antd"
import { StoreProvider } from "@/store";
import "@/css/globals.css";
import type { Metadata, Viewport } from "next";


export const metadata: Metadata = {
  title: "Astra.ai",
  description: "Generated by create next app",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
}




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            components: {
              Select: {
                selectorBg: "#181A1D",
              },
            },
          }}
        >
          <StoreProvider>
            {children}
          </StoreProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
