"use client";

import { useForm } from "react-hook-form";
import { registerSchema } from "@/lib/validation/login.validation";
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
import { LoginUser, RegisterUser } from "@/constants/types";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { toast } from "sonner";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { formState } = form;

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    let user: RegisterUser = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    await createUser(user).then(
      (model) => {
        const user: LoginUser = {
          email: values.email,
          password: values.password,
        };

        loginUser(user).then(() => {
          router.push("/");
        });
      },
      (e) => {
        if (e.type === "user_already_exists") {
          toast.error("Cette compte existe déjà");
        }

        console.log("Failed to create account ", e);
      }
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-auto py-32 bg-neutral-100 drop-shadow-2xl rounded-xl h-[650px]  w-[650px]"
      >
        <h1 className={"text-4xl font-bold w-full text-center"}>Inscription</h1>
        <p className={"text-lg text-slate-600 w-full text-center"}>
          Créez-vous un compte ici !
        </p>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className={"px-10"}>
              <FormLabel className={"font-bold"}>Nom du compte</FormLabel>
              <FormControl>
                <Input type={"text"} placeholder="Nom du compte" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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

        <div className={"flex justify-center mt-12"}>
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
            {formState.isSubmitting ? "Chargement" : "Inscription"}
          </Button>
        </div>

        <div className={"flex justify-center mt-3"}>
          <Link
            className="flex gap-1 text-slate-500 w-fit text-sm hover:underline hover:cursor-pointer"
            href="/connexion"
          >
            <p>Je possède un compte</p>
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
  );
};

export default RegisterForm;
