'use client';
import { PaginationLogin } from "@/components/c-pagination-login";
import { LoginForm } from "./login-form";


export default function Page() {

  return (
    <main className="mt-20 lg:mt-60 overflow-y-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        <h2 className="font-bold text-2xl lg:text-4xl flex items-center justify-center text-center">
          Aplicação desktop para <br /> Listagem de Países.
        </h2>
        <div>
        <LoginForm />
      </div>
      </div>
      <div className="-mt-10 flex justify-center items-center lg:items-end lg:justify-end">
        <PaginationLogin />
      </div>
    </main>
  );
}
