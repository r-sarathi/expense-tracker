import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="h-screen flex items-center">
      <Card className="mx-auto max-w-sm md:w-3/4">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="username"
                placeholder="Username"
                required
                value={data.username}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto inline-block text-sm font-medium underline"
              >
                Forgot your password?
              </a>
              <Input
                id="password"
                type="password"
                required
                value={data.password}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full" onClick={handleSubmit}>
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            {`Don't have an account?`}{" "}
            <a href="/signup" className="underline">
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
