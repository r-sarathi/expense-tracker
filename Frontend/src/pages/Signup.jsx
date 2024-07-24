import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    password: "",
    gender: "",
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
          <CardTitle className="text-xl font-bold">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Full Name"
                required
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Username</Label>
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
              <Input
                id="password"
                type="password"
                required
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Gender</Label>
              <RadioGroup
                className="flex flex-row gap-4 ml-1"
                value={data.gender}
                onValueChange={(value) =>
                  setData({
                    ...data,
                    gender: value,
                  })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Male" id="Male" />
                  <p className="text-sm" htmlFor="option-one">
                    Male
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Female" id="Female" />
                  <p className="text-sm" htmlFor="option-two">
                    Female
                  </p>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              Create an account
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="underline">
              Sign in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
