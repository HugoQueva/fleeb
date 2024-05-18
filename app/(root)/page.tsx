import Image from "next/image";
import { ArrowUpRight, Heart, LockIcon, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <section className={"w-full h-[750px]"}>
        <div
          className={
            "w-full h-full bg-gradient-to-br from-blue-700 to-blue-950"
          }
        >
          <div
            className={
              "mx-12 py-12 font-bold text-white max-md:text-4xl text-5xl"
            }
          >
            <h1>
              L'aménagment extérieur <br />à petit prix
            </h1>
          </div>

          <div
            className={
              "relative top-[50%] mx-12 py-12 text-slate-200 max-md:text-lg text-3xl flex flex-col gap-2"
            }
          >
            <h1>Découvrir nos produits</h1>
            <Button
              variant={"default"}
              className={"flex font-medium gap-1 max-md:w-32 max-md:h-10 w-40"}
            >
              Boutique
              <ArrowUpRight />
            </Button>
          </div>
        </div>
      </section>
      <section className={"w-full h-[750px] bg-slade-100"}>
        <h1 className={"grid-cols-2 grid w-full h-full"}>
          <div className={"w-full h-full"}>
            <div className={"mx-12 my-20"}>
              <h1
                className={
                  "font-bold text-blue-500 max-md:text-4xl text-5xl mb-5"
                }
              ></h1>
              <div
                className={
                  "flex flex-col gap-3 font-bold text-blue-500 text-lg"
                }
              >
                <div className={"flex gap-1 align-middle"}>
                  <LockIcon />
                  <p>Payement Sécurisé</p>
                </div>
                <div className={"flex gap-1 align-middle"}>
                  <Truck />
                  <p>Livraison rapide</p>
                </div>
              </div>
            </div>
          </div>
          <div className={"w-full h-full"}></div>
        </h1>
      </section>
    </main>
  );
}
