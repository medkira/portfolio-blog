import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import Image from 'next/legacy/image';

import landing from '../../public/images/landing.jpg';
import { Navbar } from '../components/navbar';

import { Providers } from './providers';

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
    { media: '(prefers-color-scheme: light)', color: 'white' },
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
          'whitefont-sans  min-h-screen antialiased',
          // fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div
            className={`  ${roboto.className} relative flex h-screen flex-col`}
          >
            <Navbar />
            <main className="container z-10 mx-auto max-w-7xl flex-grow bg-transparent px-6 pt-32">
              {children}
            </main>
            {/* <Image
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              src={landing}
            /> */}
            {/* <footer className="flex w-full items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </Link>
            </footer> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
