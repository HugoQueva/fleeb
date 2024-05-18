"use client";

import { useForm } from "react-hook-form";
import { connexionSchema } from "@/lib/validation/login.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createUser, loginUser } from "@/lib/api/account";
import { LoginUser, RegisterUser, User } from "@/constants/types";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircle, EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof connexionSchema>>({
    resolver: zodResolver(connexionSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { formState } = form;

  async function onSubmit(values: z.infer<typeof connexionSchema>) {
    let user: LoginUser = {
      email: values.email,
      password: values.password,
    };

    await loginUser(user).then(
      () => {
        router.push("/");
      },
      (e) => {
        if (e.type === "general_unknown_origin") {
          toast.error("Erreur serveur.");
        } else if (e.type === "user_invalid_credentials") {
          toast.error("Identifiants incorrects.");
        }

        console.log("Failed to connect to account ", e);
      }
    );
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="px-auto py-32 bg-neutral-100 drop-shadow-2xl rounded-xl h-[650px]  w-[650px]"
        >
          <h1 className={"text-4xl font-bold w-full text-center"}>Connexion</h1>
          <p className={"text-lg text-slate-600 w-full text-center"}>
            Vous êtes de retour!
          </p>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className={"px-10"}>
                <FormLabel className={"font-bold"}>Email</FormLabel>
                <FormControl>
                  <Input
                    type={"email"}
                    placeholder="jesuisfort@hôte.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className={"px-10"}>
                <FormLabel className={"font-bold"}>Mot de passe</FormLabel>
                <FormControl>
                  <div className="flex gap-5">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="jesuisfort@hôte.com"
                      {...field}
                    />
                    <div
                      className="flex self-center text-blue-500 bg-transparent rounded-full border-2 p-1 border-opacity-35 border-blue-500 hover:underline"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className={"flex justify-center mt-14"}>
            <Button
              disabled={form.formState.isSubmitting}
              variant={"special"}
              type="submit"
              className="flex gap-2"
            >
              {formState.isSubmitting ? (
                <ThreeDots
                  visible={true}
                  height={25}
                  width={25}
                  color="#FFFFFF"
                />
              ) : (
                <></>
              )}
              {formState.isSubmitting ? "Chargement" : "Connexion"}
            </Button>
          </div>

          <div className={"flex justify-center mt-3"}>
            <Link
              className="flex gap-1 text-slate-500 w-fit text-sm hover:underline hover:cursor-pointer"
              href="/inscription"
            >
              <p>Je n'ais pas de compte</p>
            </Link>
          </div>

          <div className={"flex justify-center mt-3"}>
            <Link
              className="flex gap-1 text-slate-500 w-fit text-sm hover:underline hover:cursor-pointer"
              href="/"
            >
              <p>Retour</p>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
