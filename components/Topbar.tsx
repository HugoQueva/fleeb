"use client";

import "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, MenuIcon } from "lucide-react";
import TopbarMenu from "@/components/TopbarMenu";
import { useAuthContext } from "./context/AuthContext";
import Link from "next/link";
import TopbarPhoneMenu from "./TopbarPhoneMenu";

const Topbar = () => {
  const { user, isAuthenticated, isLoading } = useAuthContext();

  return (
    <div
      className={
        "bg-slate-100 w-full min-h-20 border-b-[1px] border-slate-300 z-50"
      }
    >
      <div
        className={
          "px-32 max-md:px-10 max-lg:px-20 flex max-md:justify-between justify-between w-full my-auto h-20 text-sm"
        }
      >
        <div className={"flex gap-20"}>
          <Link className="flex" href="/">
            <Image
              src={"/fleeb_no_text.svg"}
              alt={"fleeb_icon"}
              height={50}
              width={50}
              className={""}
            />
          </Link>
          <TopbarMenu />
        </div>

        <div className={"flex items-center"}>
          <TopbarPhoneMenu />
          <div className="max-md:hidden">
            {isLoading ? ( //! NOTE (WAYxTREME): This is very ugly... refactor necessary for better code readability.
              <></>
            ) : isAuthenticated ? (
              <Link href={`/compte/${user.id}`}>
                <p>{user.name}</p>
              </Link>
            ) : (
              <Link href="/connexion">
                <Button
                  variant={"special"}
                  className={"max-md:hidden flex font-medium gap-1"}
                >
                  Connexion
                  <ArrowUpRight />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
