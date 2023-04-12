import './globals.css';

export const metadata = {
  title: 'Article Generator',
  description: 'The app generates articles using ChatGPT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-800'>
        {children}</body>
    </html>
  )
}
