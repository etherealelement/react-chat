import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

export function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden"></div>
      <div className="w-full max-w-md z-10">
        <Card className="border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-zinc-100">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2 text-zinc-100">
              Username
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-400"
              />
            </div>
            <div className="grid gap-2 text-zinc-100">
              Password
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-zinc-800 border-zinc-700 text-zinc-100"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-zinc-700 hover:bg-zinc-600 text-zinc-100"
              onClick={onSubmit}
              disabled={isLoading}
            >
              {isLoading && <span>Load...</span>}
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
