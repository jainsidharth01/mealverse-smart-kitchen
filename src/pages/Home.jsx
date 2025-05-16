
import { Button } from "@/components/ui/button";
import { RecipeCard } from "@/components/recipes/RecipeCard";
import { RecipeChat } from "@/components/chatbot/RecipeChat";
import { mockRecipes } from "@/data/mockData";
import { Link } from "react-router-dom";

export default function Home() {
  const featuredRecipes = mockRecipes.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-heading text-recipe-green-700 leading-tight">
              Your Smart Kitchen Assistant
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Discover recipes, plan meals, and generate shopping lists with the help of AI. 
              RecipeSmart makes cooking simple and enjoyable.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-recipe-green-500 hover:bg-recipe-green-600">
                <Link to="/recipes">
                  Explore Recipes
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/meal-planner">
                  Try Meal Planner
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvb2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" 
                alt="Healthy meal prep with vegetables" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center font-heading text-recipe-green-700">How RecipeSmart Works</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-recipe-green-100 text-recipe-green-700 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2 font-heading">Discover Recipes</h3>
            <p className="text-muted-foreground">
              Browse our collection of delicious recipes or search by ingredients you have on hand.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-recipe-green-100 text-recipe-green-700 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2 font-heading">Plan Your Meals</h3>
            <p className="text-muted-foreground">
              Create weekly meal plans by adding recipes to specific days and meal times.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-recipe-green-100 text-recipe-green-700 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2 font-heading">Shop Smartly</h3>
            <p className="text-muted-foreground">
              Get auto-generated shopping lists based on your meal plans with smart ingredient consolidation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="mt-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold font-heading text-recipe-green-700">Featured Recipes</h2>
          <Button variant="link" asChild className="text-recipe-green-600">
            <Link to="/recipes">View All</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              {...recipe}
              onClick={() => {}}
            />
          ))}
        </div>
      </section>

      {/* AI Assistant */}
      <section className="mt-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold font-heading text-recipe-green-700">Your Smart Recipe Assistant</h2>
            <p className="mt-4 text-muted-foreground">
              Get answers to your cooking questions, find ingredient substitutions, calculate nutritional values, and receive personalized recipe recommendations with our AI-powered kitchen assistant.
            </p>
            <Button asChild className="mt-6 bg-recipe-orange-500 hover:bg-recipe-orange-600">
              <Link to="/assistant">
                Ask Recipe Assistant
              </Link>
            </Button>
          </div>
          
          <div className="w-full md:w-1/2 max-w-md">
            <RecipeChat />
          </div>
        </div>
      </section>
    </div>
  );
}
