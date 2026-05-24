import "./globals.css";

export const metadata = {
  title: "Job Portal ATS",
  description: "Industry level job portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}