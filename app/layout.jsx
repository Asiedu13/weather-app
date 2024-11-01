import "./globals.css";
 
export const viewport = {
  themeColor: 'black',
}
export const metadata = {
  title: "Weather App | Home",
  description: "A weather application built by AlephCore",
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

  openGraph: {
    title: 'AlephCore Weather App',
    description: 'Best simple weather app on the internet',
    url: 'https://weather-app-asiedu13.vercel.app/',
    siteName: 'AlephCore Weather App',
    images: [
      {
        url: 'https://weather-app-asiedu13.vercel.app/800x600.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://weather-app-asiedu13.vercel.app/1800x1600.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'AlephCore Weather App',
    description: 'The best simple weather app out there',
    siteId: '1467726470533754880',
    creator: '@Prince_KAsiedu',
    creatorId: '1467726470533754880',
    images: ['https://weather-app-asiedu13.vercel.app/800x600.png'], // Must be an absolute URL
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
