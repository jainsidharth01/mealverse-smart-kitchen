
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link, NavLink } from "react-router-dom";
import { User } from "lucide-react";
import { useState } from "react";
import { AuthForm } from "../auth/AuthForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

  // This would be handled by authentication state in a real app
  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsAuthDialogOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="border-b bg-white sticky top-0 z-40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-recipe-green-600 font-heading">RecipeSmart</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                isActive 
                  ? "text-recipe-green-700 font-medium" 
                  : "text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/recipes"
              className={({ isActive }) => 
                isActive 
                  ? "text-recipe-green-700 font-medium" 
                  : "text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              Recipes
            </NavLink>
            <NavLink 
              to="/meal-planner"
              className={({ isActive }) => 
                isActive 
                  ? "text-recipe-green-700 font-medium" 
                  : "text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              Meal Planner
            </NavLink>
            <NavLink 
              to="/shopping-list"
              className={({ isActive }) => 
                isActive 
                  ? "text-recipe-green-700 font-medium" 
                  : "text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              Shopping List
            </NavLink>
            <NavLink 
              to="/assistant"
              className={({ isActive }) => 
                isActive 
                  ? "text-recipe-green-700 font-medium" 
                  : "text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              Recipe Assistant
            </NavLink>
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-recipe-green-100 text-recipe-green-700">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/saved-recipes">Saved Recipes</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Dialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-recipe-green-500 hover:bg-recipe-green-600">
                  Sign In
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <AuthForm />
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </header>
  );
}
