import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { Navbar } from '../components/animated-navbar/navbar';

import { Providers } from './providers';

import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/config/site';
import { roboto } from '@/config/fonts';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/images/logo.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    // { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body
        className={clsx(
          'white flex  min-h-screen flex-col justify-between font-sans antialiased',
          // fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className={`${roboto.className}`}>
            <div className="fixed left-0 right-0 top-0 z-20 ">
              <Navbar />
            </div>
            <div className="fixed left-[30px] top-[35px]   z-10 text-[1.35rem] ">
              <h1> Med Kira</h1>
              <p className="-mt-1 text-xs text-zinc-400">Software Engineer</p>
            </div>
            <Toaster />
            {/* container z-10 mx-auto max-w-7xl flex-grow bg-transparent px-6 */}
            <main>{children}</main>
          </div>
        </Providers>
        {/* bottom-0 text-center text-sm sm:ml-2 sm:justify-start" */}

        <p className="  justify-end pb-3  text-center text-sm">
          &copy; 2024{' '}
          <a
            className="font-bold"
            href="https://www.totaltechtn.com"
            rel="noreferrer"
            target="_blank"
          >
            totaltechtn
          </a>
          . All rights reserved.
        </p>
      </body>
    </html>
  );
}
