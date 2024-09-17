'use client';

import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import { SiTwitter } from 'react-icons/si';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const learnMoreButton = (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href="https://docs.thegrid.id"
  >
    <Button className="w-full md:w-fit">Read the docs</Button>
  </Link>
);

const claimProfileButton = (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href="https://data.thegrid.id/form/d72408d4-d3f2-45ee-9248-70e86bfba351" 
  >
    <Button variant="outline" className="w-full md:w-fit">
      Claim your profile
    </Button>
  </Link>
);

const cloneRepoButton = (
  <Link
    href="https://x.com/TheGridData"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="w-full md:w-fit" variant="outline">
      <SiTwitter className="mr-2" size={18} />
      Check out the Marketmap
    </Button>
  </Link>
);

export const Header = () => {
  return (
    <header className="container flex w-full items-center py-4">
      <div className="w-full items-center justify-start">
        <Link href="/" className="flex items-center">
          <Image
            alt="Breakpoint logo"
            src="/breakpoint_logo.png"
            width={300}
            height={300}
          />
        </Link>
      </div>

      <div className="hidden w-full items-center justify-end gap-2 md:flex">
        {learnMoreButton}
        {claimProfileButton}
        {cloneRepoButton}
      </div>
      <Sheet>
        <SheetTrigger asChild className="flex w-full items-center justify-end">
          <div className="w-full md:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </SheetTrigger>

        <SheetContent>
          <SheetTrigger asChild>
            <Link className="flex items-center gap-2" href="/">
              <h3 className="text-lg font-semibold tracking-tight">The Grid</h3>
            </Link>
          </SheetTrigger>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <SheetTrigger asChild>{learnMoreButton}</SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>{cloneRepoButton}</SheetTrigger>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
};
