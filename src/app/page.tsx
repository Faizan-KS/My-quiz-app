import SignInButton from "@/components/SigninButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";


export default async function Home() {
  const session = await getAuthSession()
  if(session?.user){
    return redirect('/dashboard');
  }
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle className="flex items-center justify-center">Welcome to Letz Quizz!</CardTitle>
          <CardDescription className="py-1">
            This is a quiz app that allows you to create and share quiz with anyone
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <SignInButton text = "Signin with Google!"/>
        </CardContent>
      </Card>
    </div>
  );
}
