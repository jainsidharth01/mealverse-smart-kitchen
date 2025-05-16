
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { CalendarIcon, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { MealItem } from "./MealItem";
import { RecipeGrid } from "../recipes/RecipeGrid";
import { toast } from "sonner";
import { mockRecipes } from "@/data/mockData";

export function MealPlanner() {
  const [date, setDate] = useState(new Date());
  const [meals, setMeals] = useState([]);
  const [isRecipeDialogOpen, setIsRecipeDialogOpen] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState('breakfast');

  const getMealsForDate = (day, type) => {
    return meals.filter(
      meal => 
        meal.date.toDateString() === day.toDateString() && 
        meal.mealType === type
    );
  };

  const handleAddMeal = (recipeId) => {
    // Find the recipe from our mock data
    const recipe = mockRecipes.find(r => r.id === recipeId);
    
    if (recipe) {
      const newMeal = {
        id: `meal-${Date.now()}`,
        recipeId: recipe.id,
        title: recipe.title,
        image: recipe.image,
        mealType: selectedMealType,
        date: date
      };
      
      setMeals([...meals, newMeal]);
      setIsRecipeDialogOpen(false);
      toast.success(`Added ${recipe.title} to your ${selectedMealType} plan for ${format(date, 'MMM dd')}`);
    }
  };

  const removeMeal = (mealId) => {
    setMeals(meals.filter(meal => meal.id !== mealId));
    toast.success("Meal removed from your plan");
  };

  const openRecipeDialog = (mealType) => {
    setSelectedMealType(mealType);
    setIsRecipeDialogOpen(true);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <Card className="md:w-80 bg-white shadow">
          <CardHeader>
            <CardTitle className="text-center">Pick a Date</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center pb-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(day) => day && setDate(day)}
              className={cn("rounded-md border pointer-events-auto")}
            />
          </CardContent>
        </Card>
        
        <div className="flex-1">
          <Card className="bg-white shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Meal Plan for {format(date, 'MMMM dd, yyyy')}</CardTitle>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 border-dashed">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      Jump to Date
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(day) => day && setDate(day)}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Breakfast section */}
                <div className="meal-section">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-heading text-recipe-green-700">Breakfast</h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-recipe-green-600 hover:text-recipe-green-700 hover:bg-recipe-green-50"
                      onClick={() => openRecipeDialog('breakfast')}
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Breakfast
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {getMealsForDate(date, 'breakfast').length > 0 ? (
                      getMealsForDate(date, 'breakfast').map(meal => (
                        <MealItem
                          key={meal.id}
                          id={meal.id}
                          title={meal.title}
                          image={meal.image}
                          onRemove={() => removeMeal(meal.id)}
                        />
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground">No breakfast planned for this day</p>
                    )}
                  </div>
                </div>
                
                {/* Lunch section */}
                <div className="meal-section">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-heading text-recipe-green-700">Lunch</h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-recipe-green-600 hover:text-recipe-green-700 hover:bg-recipe-green-50"
                      onClick={() => openRecipeDialog('lunch')}
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Lunch
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {getMealsForDate(date, 'lunch').length > 0 ? (
                      getMealsForDate(date, 'lunch').map(meal => (
                        <MealItem
                          key={meal.id}
                          id={meal.id}
                          title={meal.title}
                          image={meal.image}
                          onRemove={() => removeMeal(meal.id)}
                        />
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground">No lunch planned for this day</p>
                    )}
                  </div>
                </div>
                
                {/* Dinner section */}
                <div className="meal-section">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-heading text-recipe-green-700">Dinner</h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-recipe-green-600 hover:text-recipe-green-700 hover:bg-recipe-green-50"
                      onClick={() => openRecipeDialog('dinner')}
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add Dinner
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {getMealsForDate(date, 'dinner').length > 0 ? (
                      getMealsForDate(date, 'dinner').map(meal => (
                        <MealItem
                          key={meal.id}
                          id={meal.id}
                          title={meal.title}
                          image={meal.image}
                          onRemove={() => removeMeal(meal.id)}
                        />
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground">No dinner planned for this day</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* View Shopping List button */}
              <div className="mt-12 text-center">
                <Button 
                  className="bg-recipe-orange-500 hover:bg-recipe-orange-600"
                  onClick={() => toast.success("Generated shopping list based on your meal plan")}
                >
                  Generate Shopping List
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Recipe selection dialog */}
      <Dialog open={isRecipeDialogOpen} onOpenChange={setIsRecipeDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Select a Recipe for {selectedMealType}</DialogTitle>
          </DialogHeader>
          
          <Tabs defaultValue="all" className="mt-4">
            <TabsList>
              <TabsTrigger value="all">All Recipes</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-4">
              <RecipeGrid 
                recipes={mockRecipes.map(recipe => ({
                  ...recipe,
                  onClick: () => handleAddMeal(recipe.id)
                }))} 
              />
            </TabsContent>
            
            <TabsContent value="favorites" className="mt-4">
              <p className="text-center p-10 text-muted-foreground">Your favorite recipes will appear here</p>
            </TabsContent>
            
            <TabsContent value="recent" className="mt-4">
              <p className="text-center p-10 text-muted-foreground">Your recently viewed recipes will appear here</p>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}
