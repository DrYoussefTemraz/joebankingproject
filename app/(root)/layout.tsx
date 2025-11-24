import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logIn = { firstName: 'youssef', lastName: 'Temraz' }
  return (
    <main className=" flex h-screen w-full font-inter">
      <SideBar user={logIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src='/icons/logo.svg' alt='logo' width={30} height={30} />
          <div>
            <MobileNav user={logIn} />
          </div>
        </div>
        {children}
      </div>

    </main>
  );
}
