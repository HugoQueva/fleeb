import Image from "next/image";
import { ArrowUpRight, Heart, LockIcon, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getUserInfo } from "@/lib/api/database";
import Error from "@/components/Error";

export default async function Profile({ params }: { params: { id: string } }) {
  let userInfo = undefined;

  try {
    userInfo = await getUserInfo(params.id);
  } catch (e) {
    console.log("Couldn't get user info document ", e);
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="flex justify-center h-screen">
        {userInfo === undefined || userInfo === null ? (
          <Error
            className="mt-48"
            code={404}
            description="Ce compte n'existe pas"
          />
        ) : (
          <p>{userInfo.name}</p>
        )}
      </div>
    </main>
  );
}
