"use client";
import { Card, CardTitle, CardDescription, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormControl, FormLabel, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export function RegisterForm() {

    const { toast } = useToast();
    const router = useRouter();

    const genders = [
        {gender: "Masculino", id: "1"},
        {gender: "Feminino", id: "2"},
        {gender: "Outro", id: "3",}
    ];

    const formSchema = z.object({
        name: z.string().min(3, "O nome precisa ter no mínimo 3 caracteres.").max(50, ""),
        email: z.string().email().min(1, "Por favor preencha o email com @gmail.com."),
        phone_number: z.string().min(8, "Por favor digite o seu número de telefone."),
        gender: z.string({
            required_error: "Selecione um gênero."
        }),
        password: z.string().min(5, "A senha precisa ter no mínimo 5 caracteres."),
        confirm_password: z.string().min(5, "A senha precisa ser igual nos 2 campos.")
    });

    type formDataSchema = z.infer<typeof formSchema>;

    const form = useForm<formDataSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone_number: "",
            gender: "",
            password: "",
            confirm_password: ""
        }
    });

    const handleAction = (values: formDataSchema) =>  {
        if(values.password !== values.confirm_password) {
            toast({
                title: "Erro",
                description: "Por favor, as senhas precisam ser iguais."
            })
        } else {
            toast({
                title: "Sucesso",
                description:`Parabéns ${values.name}! Você se cadastrou na nossa plataforma. Volte para página de Login!`
            })
            router.push("/")
            
        }
}


    return (
        <Card className="-mt-20 w-full lg:w-[80%]">
            <CardHeader>
                <CardTitle className="text-2xl">Cadastre-se</CardTitle>
                <CardDescription>Cadastre-se agora na nossa plataforma de listagem de países!</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleAction)}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" >
                        <FormField name="name" control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Nome</FormLabel>
                                <FormControl>
                                    <Input
                                    type="text"
                                    placeholder="Digite seu nome..."
                                    id="name" 
                                    {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField name="email" control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                    type="email"
                                    placeholder="Digite seu email..."
                                    id="email"
                                    {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField name="phone_number" control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Telefone</FormLabel>
                                <FormControl>
                                    <Input
                                    type="tel"
                                    placeholder="+XX (XX) XXXX-XXXX"
                                    id="phone_number"
                                    {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField 
                        name="gender" 
                        control={form.control} 
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Gênero</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger id="gender" className="w-full">
                                <SelectValue placeholder="Selecione um gênero" />
                                </SelectTrigger>
                                <SelectContent>
                                {genders.map((item) => (
                                    <SelectItem key={item.id} value={item.gender}>
                                    {item.gender}
                                    </SelectItem>
                                ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField name="password" control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Digite sua senha</FormLabel>
                                <FormControl>
                                    <Input
                                    type="password"
                                    placeholder="*******"
                                    id="password"
                                    {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField name="confirm_password" control={form.control} render={({field}) => (
                            <FormItem>
                                <FormLabel>Confirme sua senha</FormLabel>
                                <FormControl>
                                    <Input
                                    type="password"
                                    placeholder="*******"
                                    id="confirm_password"
                                    {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        </div>
                        <div className="w-full justify-center items-center mt-6">
                        <Button className="w-full" type="submit" variant="default">Cadastrar-se</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}