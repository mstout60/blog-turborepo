"use client";

import SubmitButton from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const SignUpForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="John Doe" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="john@example.com"
          type="email"
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" />
      </div>
      <SubmitButton>Sign Up</SubmitButton>
    </form>
  );
};

export default SignUpForm;
