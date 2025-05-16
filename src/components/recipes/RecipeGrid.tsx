
import { useState } from "react";
import { RecipeCard, RecipeCardProps } from "./RecipeCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { RecipeDetail } from "./RecipeDetail";
import { Search } from "lucide-react";

interface RecipeDetailProps extends RecipeCardProps {
  description: string;
  ingredients: Array<{
    id: string;
    name: string;
    amount: string;
    category: string;
  }>;
  steps: Array<{
    id: string;
    instruction: string;
  }>;
}

interface RecipeGridProps {
  recipes: RecipeDetailProps[];
}

export function RecipeGrid({ recipes }: RecipeGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeDetailProps | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Filter recipes based on search query
  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openRecipeDetail = (recipe: RecipeDetailProps) => {
    setSelectedRecipe(recipe);
    setIsDialogOpen(true);
  };

  return (
    <div>
      <div className="flex mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      
      {filteredRecipes.length === 0 ? (
        <div className="text-center p-10">
          <p className="text-muted-foreground">No recipes found. Try a different search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              {...recipe}
              onClick={() => openRecipeDetail(recipe)}
            />
          ))}
        </div>
      )}
      
      {/* Recipe detail dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedRecipe && <RecipeDetail {...selectedRecipe} />}
          <div className="flex justify-end mt-6">
            <Button 
              variant="outline" 
              onClick={() => setIsDialogOpen(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
