import Image from "next/image";
import { Facebook, Instagram, TwitterIcon, Youtube } from "lucide-react";

//TODO: Optimize the footer by using a table and mapping each <p> with the content.
//TODO: Update the icons to use non-deprecated ones.
const Footer = () => {
  return (
    <div
      className={"w-full h-full bg-slate-100 border-t-[1px] border-slate-300"}
    >
      <div className={"mx-[15%] flex gap-[45%] max-md:gap-10 py-20"}>
        <div className={"flex flex-col gap-5"}>
          <Image
            src={"/fleeb_no_text.svg"}
            alt={"fleeb_icon"}
            height={80}
            width={80}
            className={"h-fit"}
          />
          <div className={"flex gap-2 text-slate-500"}>
            <Instagram />
            <Facebook />
            <TwitterIcon />
            <Youtube />
          </div>
        </div>
        <div className={" lg:grid-cols-2 lg:grid-rows-2 grid"}>
          <div className={"w-64 h-24 mb-5 text-sm"}>
            <h3>Parcourir</h3>
            <p
              className={
                "text-slate-500 w-fit hover:underline hover:cursor-pointer"
              }
            >
              Magasin
            </p>
            <p
              className={
                "text-slate-500 w-fit hover:underline hover:cursor-pointer"
              }
            >
              Tendances
            </p>
            <p
              className={
                "text-slate-500 w-fit hover:underline hover:cursor-pointer"
              }
            >
              Réductions
            </p>
          </div>
          <div className={"w-64 h-24 mb-5 text-sm"}>
            <h3>Légal</h3>
            <p
              className={
                "text-slate-500 w-fit hover:underline hover:cursor-pointer"
              }
            >
              Conditions d'Utilisation
            </p>
            <p
              className={
                "text-slate-500 w-fit hover:underline hover:cursor-pointer"
              }
            >
              Politique de Confidentialité
            </p>
            <p
              className={
                "text-slate-500 w-fit hover:underline hover:cursor-pointer"
              }
            >
              Cookies
            </p>
          </div>
          <div className={"w-64 h-24 mb-5 text-sm"}>
            <h3>Communication</h3>
            <p
              className={
                "text-slate-500 w-fit hover:underline hover:cursor-pointer"
              }
            >
              Contact
            </p>
            <p
              className={
                "text-slate-500 w-fit hover:underline hover:cursor-pointer"
              }
            >
              Retours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
