import { ThirdwebProvider } from "thirdweb/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <ThirdwebProvider>{children}</ThirdwebProvider>
      </body>
    </html>
  );
}
