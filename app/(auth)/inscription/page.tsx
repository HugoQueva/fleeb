import Image from "next/image";
import RegisterForm from "@/components/forms/registerForm";

export default function Page() {
  return (
    <main className="min-h-screen flex justify-center bg-slate-100 items-center">
      <RegisterForm />
    </main>
  );
}
