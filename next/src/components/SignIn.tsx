"use client";

import { getProviders, signIn } from "next-auth/react";
import Button from "./Button";

type Props = {
  providers: Exclude<Awaited<ReturnType<typeof getProviders>>, null>;
  callbackUrl: string;
};

function SignIn({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <div key={name}>
          <Button
            text={`Sign in with ${name}`}
            onClick={() => signIn(id, { callbackUrl })}
          />
        </div>
      ))}
    </>
  );
}
export default SignIn;
