
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-24 h-24 bg-recipe-green-100 rounded-full flex items-center justify-center text-recipe-green-600 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
        </svg>
      </div>
      <h1 className="text-4xl font-bold font-heading text-recipe-green-700 mb-2">404</h1>
      <p className="text-xl text-muted-foreground mb-6">Oops! This page doesn't exist.</p>
      <p className="text-center text-muted-foreground mb-8 max-w-md">
        The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button asChild className="bg-recipe-green-500 hover:bg-recipe-green-600">
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
}
