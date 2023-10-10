import "./globals.css";
export const metadata = {
  title: "Weather App | Home",
  description: "A weather application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
