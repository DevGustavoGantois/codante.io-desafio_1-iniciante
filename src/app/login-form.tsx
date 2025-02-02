'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function LoginForm() {

    const { toast } = useToast();

    const formSchema = z.object({
        name: z.string().min(3, "O nome precisa ter no mínimo 3 caracteres"),
        email: z.string().email().min(6, "O email precisa ter no mínimo 6 caracteres"),
        password: z.string().min(5, "A senha precisa ter no mínimo 5 caracteres.").max(10, "A senha precisa ter no mínimo 10 caracteres."),
    });

    type formDataSchema = z.infer<typeof formSchema>;

    const form = useForm<formDataSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "", //Começa com uma string vazia
            email: "",
            password: "",
        }
    })

    const handleAction = (data: formDataSchema) => {
        console.log("Formulário enviado:", data);

        if(data.password === "12345") {
            toast({
              title: "Sucesso",
              description: `Olá ${data.name}! Seja bem vindo a plataforma!`
            })
            router.push('/platform')
        } else {
            toast({
              title: "Erro",
              description: `${data.name}. A senha está inválida.`
            })
            return;
        }
    };

    const router = useRouter();


    return (
        <Card className="flex flex-col gap-4 w-full lg:w-[80%]">
        <CardHeader>
          <CardTitle className="text-3xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
              <form onSubmit={form.handleSubmit(handleAction)}>
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          id="name"
                          placeholder="Digite seu nome..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          id="email"
                          placeholder="Digite seu email..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          id="password"
                          placeholder="Digite sua senha..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full mt-4" type="submit">
                  Entrar
                </Button>
              </form>
          </Form>
        </CardContent>
      </Card>
    )
}