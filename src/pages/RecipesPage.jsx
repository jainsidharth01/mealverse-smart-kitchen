
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RecipeGrid } from "@/components/recipes/RecipeGrid";
import { mockRecipes } from "@/data/mockData";

export default function RecipesPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  
  const categories = [
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Vegetarian",
    "Quick Meals"
  ];
  
  const filteredRecipes = activeCategory && activeCategory !== "All"
    ? mockRecipes.filter(recipe => recipe.title.includes(activeCategory))
    : mockRecipes;

  // Map the recipes to include the onClick property required by RecipeGrid
  const recipesWithOnClick = filteredRecipes.map(recipe => ({
    ...recipe,
    onClick: () => {}
  }));

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 font-heading text-recipe-green-700">Discover Recipes</h1>
        <p className="text-muted-foreground max-w-2xl">
          Explore our collection of delicious recipes for any occasion. Filter by category or search for specific recipes.
        </p>
      </div>
      
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map(category => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className={
              activeCategory === category 
                ? "bg-recipe-green-500 hover:bg-recipe-green-600" 
                : ""
            }
            onClick={() => setActiveCategory(category === "All" ? null : category)}
          >
            {category}
          </Button>
        ))}
      </div>
      
      <RecipeGrid recipes={recipesWithOnClick} />
    </div>
  );
}
