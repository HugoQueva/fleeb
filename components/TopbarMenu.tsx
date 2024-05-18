"use client";

import Link from "next/link";
import { menu } from "@/constants/menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopbarMenu = () => {
  return (
    <NavigationMenu className={"h-full max-md:hidden"}>
      <NavigationMenuList
        className={"flex gap-5 align-middle items-center h-full"}
      >
        <NavigationMenuItem>
          <NavigationMenuTrigger>Portails</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div //! NOTE (WAYxTREME): This is a nesting nightmare...
              className={
                "bg-slate-100 px-5 py-3 " +
                "border-slate-300 w-[500px] h-[200px]"
              }
            >
              <div className={"flex"}>
                <div className={"w-64 h-full mb-1 text-sm"}>
                  <h3>Matière</h3>
                  {menu.Portails.Matière.map((value) => {
                    return (
                      <p
                        key={value.title}
                        className={
                          "text-slate-500 w-fit hover:underline hover:cursor-pointer"
                        }
                      >
                        {value.title}
                      </p>
                    );
                  })}
                </div>

                <div className={"w-64 h-24 mb-1 text-sm"}>
                  <h3>Types</h3>
                  {menu.Portails.Types.map((value) => {
                    return (
                      <p
                        key={value.title}
                        className={
                          "text-slate-500 w-fit hover:underline hover:cursor-pointer"
                        }
                      >
                        {value.title}
                      </p>
                    );
                  })}
                </div>

                <div className={"w-64 h-24 mb-1 text-sm"}>
                  <h3>Mécanisme</h3>
                  {menu.Portails.Mécanisme.map((value) => {
                    return (
                      <p
                        key={value.title}
                        className={
                          "text-slate-500 w-fit hover:underline hover:cursor-pointer"
                        }
                      >
                        {value.title}
                      </p>
                    );
                  })}
                </div>
              </div>

              <Button variant={"default"} className={"mt-2 flex gap-1"}>
                Voir plus
                <ArrowRight />
              </Button>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Portillons</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div
              className={
                "bg-slate-100 px-5 py-3 " +
                "border-slate-300 w-[500px] h-[200px]"
              }
            >
              <div className={"flex"}>
                <div className={"w-64 h-full mb-1 text-sm"}>
                  <h3>Matière</h3>
                  {menu.Portillons.Matière.map((value) => {
                    return (
                      <p
                        key={value.title}
                        className={
                          "text-slate-500 w-fit hover:underline hover:cursor-pointer"
                        }
                      >
                        {value.title}
                      </p>
                    );
                  })}
                </div>
                <div className={"w-64 h-full mb-1 text-sm"}>
                  <h3>Remplissage</h3>
                  {menu.Portillons.Remplissage.map((value) => {
                    return (
                      <p
                        key={value.title}
                        className={
                          "text-slate-500 w-fit hover:underline hover:cursor-pointer"
                        }
                      >
                        {value.title}
                      </p>
                    );
                  })}
                </div>
                <div className={"w-64 h-full mb-1 text-sm"}>
                  <h3>Extra</h3>
                  {menu.Portillons.Extra.map((value) => {
                    return (
                      <p
                        key={value.title}
                        className={
                          "text-slate-500 w-fit hover:underline hover:cursor-pointer"
                        }
                      >
                        {value.title}
                      </p>
                    );
                  })}
                </div>
              </div>

              <Button variant={"default"} className={"mt-2 flex gap-1"}>
                Voir plus
                <ArrowRight />
              </Button>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={""}>Boutique</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default TopbarMenu;
