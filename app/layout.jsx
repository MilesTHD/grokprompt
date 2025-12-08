import "./globals.css";

export const metadata = {
  title: "GrokChain – Video Prompt Builder for Grok Imagine",
  description: "Chain perfect prompts for Grok Imagine videos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/2272/2272963.png" />
        <meta name="theme-color" content="#22d3ee" />
      </head>
      <body>{children}</body>
    </html>
  );
}
