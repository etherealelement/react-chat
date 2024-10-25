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
import { useValidate } from "../_model/use-validate";
import { FormFields } from "../_domian";

export function Auth() {
  const { form } = useValidate();

  const onSubmit = async (values: FormFields) => {
    console.log(values);
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
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
