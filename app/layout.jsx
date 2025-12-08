import "./globals.css";

export const metadata = {
  title: "GrokPrompt – Video Prompt Builder for Grok Imagine",
  description: "Chain perfect prompts for Grok Imagine videos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-192.png" />
        <meta name="theme-color" content="#22d3ee" />
      </head>
      <body>{children}</body>
    </html>
  );
}
