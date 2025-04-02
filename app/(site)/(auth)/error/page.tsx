"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const ErrorContent = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  let errorMessage = "An error occurred during authentication.";

  if (error === "OAuthSignin") {
    errorMessage = "Error occurred during OAuth sign in.";
  } else if (error === "OAuthCallback") {
    errorMessage = "Error occurred during OAuth callback.";
  } else if (error === "OAuthCreateAccount") {
    errorMessage = "Error creating OAuth account.";
  } else if (error === "EmailCreateAccount") {
    errorMessage = "Error creating email account.";
  } else if (error === "Callback") {
    errorMessage = "Error during authentication callback.";
  } else if (error === "OAuthAccountNotLinked") {
    errorMessage = "Email already used with different provider.";
  } else if (error === "EmailSignin") {
    errorMessage = "Error sending verification email.";
  } else if (error === "CredentialsSignin") {
    errorMessage = "Invalid credentials.";
  } else if (error === "SessionRequired") {
    errorMessage = "Please sign in to access this page.";
  }

  return (
    <Card className='w-full max-w-md'>
      <CardHeader className='flex items-center justify-center'>
        <CardTitle>
          <div className='-ml-3 flex w-fit items-center space-x-2'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-2xl font-medium text-background'>
              N
            </div>
            <h1 className='font-sans text-3xl font-bold'>NETTIX</h1>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col items-center gap-4'>
          <h2 className='text-xl font-semibold text-destructive'>
            Authentication Error
          </h2>
          <p className='text-center text-muted-foreground'>{errorMessage}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const ErrorPage = () => {
  return (
    <Suspense>
      <ErrorContent />
    </Suspense>
  );
};

export default ErrorPage;
