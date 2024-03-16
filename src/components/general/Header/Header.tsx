import React, { useEffect, useState } from 'react';
import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import { Root, NavigationLink } from './Header.interface';

export default function Header(props: Root) {
  console.log('Header:', props?.fields);
  const headerProps = props?.fields;
  const headerNavigations = props?.fields?.NavigationLinks;

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // State to manage menu open/close

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black">
      <header className={`py-${isMobile ? '2' : '6'} dark:bg-gray-800 dark:text-gray-100`}>
        <div className="container flex justify-between h-16 mx-auto">
          <Link rel="noopener noreferrer" href="/" className="flex items-center p-2">
            {isMobile ? (
              <NextImage
                field={headerProps?.MobileLogo?.value}
                alt="MobileLogo"
                height={100}
                width={100}
              />
            ) : (
              <NextImage
                field={headerProps?.HeaderLogo?.value}
                alt="desktopLogo"
                height={150}
                width={150}
              />
            )}
          </Link>
          {isMobile ? (
            <button className="flex justify-end p-4 md:hidden text-white" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          ) : (
            <ul className="items-center hidden space-x-3 md:flex">
              {headerNavigations?.map((navData: NavigationLink, idx: number) => (
                <Link
                  key={idx}
                  className={`text-white pl-3 font-medium text-${isMobile ? 'md' : 'lg'}`}
                  href={navData?.url}
                >
                  {navData?.name}
                </Link>
              ))}
            </ul>
          )}
        </div>
      </header>
      {isMobile && isMenuOpen && (
        <ul className="py-2">
          {headerNavigations?.map((navData: NavigationLink, idx: number) => (
            <li key={idx} className="px-4">
              <Link key={idx} className="text-white text-md" href={navData?.url}>
                {navData?.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
