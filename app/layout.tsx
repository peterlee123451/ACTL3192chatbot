import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MilkenTelligence",
  description: "Demo of ChatKit with hosted workflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const domainKey = process.env.NEXT_PUBLIC_CHATKIT_DOMAIN_KEY?.trim() ?? "";
  
  // Build ChatKit script URL - domain key is now passed via useChatKit config
  // but we can also include it in the script URL as a fallback
  const chatkitScriptSrc = domainKey
    ? `https://cdn.platform.openai.com/deployments/chatkit/chatkit.js?domain_key=${encodeURIComponent(domainKey)}`
    : "https://cdn.platform.openai.com/deployments/chatkit/chatkit.js";

  return (
    <html lang="en">
      <head>
        <Script
          src={chatkitScriptSrc}
          strategy="beforeInteractive"
        />
        {process.env.NODE_ENV === "development" && domainKey && (
          <script
            dangerouslySetInnerHTML={{
              __html: `console.log('[ChatKit Debug] Domain key loaded:', '${domainKey.substring(0, 20)}...');`,
            }}
          />
        )}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
