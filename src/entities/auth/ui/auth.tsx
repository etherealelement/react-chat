import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui/card";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../_model/use-auth";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  password: z
    .string()
    .min(2, { message: "Password must be at least 2 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function Auth() {
  const { error, success, isLoadData, login } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    form.reset();
    login(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden"></div>
      <div className="w-full max-w-md z-10">
        <Card className="bg-inherit">
          <CardHeader className="flex justify-center">
            <CardTitle className="text-2xl text-zinc-50">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-50">Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your username"
                          className="text-zinc-50"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Choose a username that will help identify you
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-zinc-50">Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your password"
                          type="password"
                          className="text-zinc-50"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Please use at least one letter and one number.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {error && (
                  <FormMessage>{error.message}. Please try again</FormMessage>
                )}
                <Button
                  type="submit"
                  variant={error ? "destructive" : "default"}
                  isSuccess={success}
                  isLoading={isLoadData}
                >
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
