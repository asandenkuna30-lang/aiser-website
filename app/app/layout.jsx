export const metadata = {
  title: "AISER",
  description: "AISER helps clinics get more patient bookings."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
