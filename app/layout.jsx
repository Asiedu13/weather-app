import "./globals.css";
 
export const viewport = {
  themeColor: 'black',
}
export const metadata = {
  title: "Weather App | Home",
  description: "A weather application",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["weather", "weather app", "accra weather", "best weather app", "app"],
  authors: [
    { name: "Prince Asiedu" },
    {
      name: "Prince Asiedu",
      url: "https://www.linkedin.com/in/princek-asiedu/",
    },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>{children}</body>
    </html>
  );
}
