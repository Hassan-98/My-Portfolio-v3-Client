import { cookies } from 'next/headers';
import { GoogleTagManager } from '@next/third-parties/google';
import { Toaster } from 'sonner';
//= Components
import ProgressBar from '@/components/UIs/ProgressBar';
//= Contexts
import Contexts from '@/contexts';
//= Types
import type { Metadata } from 'next';
//= Styles
import "swiper/css/bundle";
import "bootstrap/scss/bootstrap.scss";
import '@/styles/globals.scss';
import '@sweetalert2/theme-wordpress-admin/wordpress-admin.css';

export const metadata: Metadata = {
  title: "Hassan Ali - Personal Website",
  description: 'Hassan Ali, a passionate self-taught frontend developer from Egypt with over 2.5 years of experience in front-end web development.',
  applicationName: 'Hassan Ali Portfolio',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Hassan Ali' }],
  creator: 'Hassan Ali',
  keywords: ["Hassan", "Ali", "Hassan Ali", "Hassan Ali's Portfolio", "Hassan Ali's Website", "Hassan Ali's Portfolio Website", "Hassan Portfolio", "Hassan Portfolio Website", "hassan ali", "hassanali", "developer", "mern", "web", "react", "portfolio", "personal"],
  category: 'personal portfolio',
  icons: {
    icon: '/logo-secondary.svg',
    shortcut: '/logo-secondary.svg',
    apple: '/logo-png.png'
  },
  openGraph: {
    title: 'Hassan Ali - Personal Website',
    description: 'Hassan Ali, a passionate self-taught frontend developer from Egypt with over 2.5 years of experience in front-end web development.',
    url: 'https://hassanali.tk',
    siteName: 'Hassan Ali - Personal Website',
    images: "https://storage.googleapis.com/portfolio-storage-63979.appspot.com/images/general%20settings/image_1718183502086?GoogleAccessId=firebase-adminsdk-3tkkh%40portfolio-storage-63979.iam.gserviceaccount.com&Expires=4102444800&Signature=qRMsa5PlMvuBPJ4Q2wiYHqks2mb24YVWTCONFl3gL1nBOJwVCJbwnqZYy2RbzYyz%2F4k2YxHVEIL9hbTS%2FOpvqjgdKy2wQ%2F%2FBDuRnbqVjGHkyobggOi4c7090I5r7DXHTlZU2L3MTFlI8nEVGauaT9X9DlC%2B7qXzVL5wxcovyaDL6HbQuSCJ42KI5ylGPXOHJzyzSa3jzCEmdiNBdUpywEY54ExBUQKOaViFfMghBdBkOhKLhiqIImGr%2FhA5h4ROYCo3yg4VWcNbou7zc5eNpHhRXddbLNXYSHHORdziFnX%2B%2FnpqJuo8tp5h1iLy%2F8hCblIKHgFBLX4bZqPj8Gh24eQ%3D%3D",
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
    },
  },
  verification: {
    google: '_U2xB66Sbt6dFzxjqW99iSxKgr47T7RwA621oA5G2Tk',
    other: {
      me: ['7assan.3li1998@gmail.com', 'https://hassanali.tk'],
    },
  }
}

type Props = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  const allCookies = cookies();
  const theme = allCookies.get('portfolio-theme-mode')?.value;

  return (
    <html lang="en" data-bs-theme={theme || 'light'}>
      <GoogleTagManager gtmId="G-HRSGV4Z9YH1" />
      <body>
        <Contexts defaultTheme={theme || 'light'}>
          {children}
        </Contexts>
        <Toaster
          position="bottom-right"
          toastOptions={{ duration: 5000 }}
        />
        <ProgressBar />
      </body>
    </html>
  )
}
