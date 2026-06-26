import './globals.css';

export const metadata = {
  title: 'Prabina Kumar Das - Full Stack Freelancer',
  description: 'Premium portfolio of Prabina Kumar Das - Full Stack Developer, MERN Stack Specialist',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  );
}