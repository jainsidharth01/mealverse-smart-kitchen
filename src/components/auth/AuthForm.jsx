
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  
  // Mock authentication - in a real app, this would connect to Supabase
  const handleAuth = async (event, mode) => {
    event.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    
    if (mode === 'register') {
      toast.success("Account created! Please check your email to verify your account.");
    } else {
      toast.success("Welcome back! You are now logged in.");
      // In a real app, you would redirect or update auth state here
    }
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <Card className="border-2 border-recipe-green-100">
        <CardHeader>
          <CardTitle className="text-center text-recipe-green-600">Welcome to RecipeSmart</CardTitle>
          <CardDescription className="text-center">
            Your personal cooking assistant
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={(e) => handleAuth(e, 'login')}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="hello@example.com" required type="email" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-sm text-recipe-green-600 hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Input id="password" required type="password" />
                  </div>
                  <Button disabled={isLoading} className="w-full bg-recipe-green-500 hover:bg-recipe-green-600" type="submit">
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <form onSubmit={(e) => handleAuth(e, 'register')}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input id="register-email" placeholder="hello@example.com" required type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <Input id="register-password" required type="password" />
                  </div>
                  <Button disabled={isLoading} className="w-full bg-recipe-green-500 hover:bg-recipe-green-600" type="submit">
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-4">
          <p className="text-xs text-center text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
