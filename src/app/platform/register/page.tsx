import PaginationRegister from "@/components/c-pagination-register";
import { RegisterForm } from "./register-form";

export default function Register() {
    return (
        <section className="overflow-y-hidden">
            <section className="mt-20 lg:mt-[300px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
                <h1 className="flex justify-center items-center text-2xl lg:text-4xl font-semibold text-center mb-10 lg:mb-0">Não tem uma conta?! <br /> Bem vindo a área de Cadastro!</h1>
            </div>
            <div>
              <RegisterForm />
            </div>
            </div>
            <div>
                <PaginationRegister />
            </div>
        </section>
        </section>
    )
}