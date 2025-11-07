import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentKit demo",
  description: "Demo of ChatKit with hosted workflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const domainKey = process.env.NEXT_PUBLIC_CHATKIT_DOMAIN_KEY?.trim() ?? "";
  const chatkitScriptSrc = domainKey
    ? `https://cdn.platform.openai.com/deployments/chatkit/chatkit.js?domain_key=${domainKey}`
    : "https://cdn.platform.openai.com/deployments/chatkit/chatkit.js";

  return (
    <html lang="en">
      <head>
        <Script
          src={chatkitScriptSrc}
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
