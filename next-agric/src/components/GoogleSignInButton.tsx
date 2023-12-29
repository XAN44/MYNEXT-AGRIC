<<<<<<< HEAD
import { signIn } from 'next-auth/react'
import { FC, ReactNode } from 'react'
import { Button } from './ui/button'

interface GoogleSignInButtonProps {
    children: ReactNode
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
    const loginWithGoogle = () =>
        signIn('google', {
            callbackUrl: '/',
        })

    return (
        <Button onClick={loginWithGoogle} className="w-full">
            {children}
        </Button>
    )
}

export default GoogleSignInButton
=======
import { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () =>
    signIn("google", {
      callbackUrl: "/profile",
    });

  return (
    <Button onClick={loginWithGoogle} className="w-full">
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
