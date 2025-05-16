
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock, CalendarPlus, User, Printer, Star } from "lucide-react";
import { toast } from "sonner";

export interface Ingredient {
  id: string;
  name: string;
  amount: string;
  category: string;
}

export interface RecipeStep {
  id: string;
  instruction: string;
}

export interface RecipeProps {
  id: string;
  title: string;
  image: string;
  description: string;
  time: string;
  calories: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  ingredients: Ingredient[];
  steps: RecipeStep[];
}

export function RecipeDetail({
  id,
  title,
  image,
  description,
  time,
  calories,
  servings,
  difficulty,
  ingredients,
  steps
}: RecipeProps) {
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  
  const toggleStepCompletion = (stepId: string) => {
    setCompletedSteps(prev => 
      prev.includes(stepId)
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };
  
  const addToMealPlan = () => {
    // This would open a dialog to add to meal planner in a real app
    toast.success("Recipe added to your meal plan!");
  };
  
  const printRecipe = () => {
    window.print();
  };

  return (
    <div className="container max-w-4xl mx-auto">
      <div className="relative rounded-lg overflow-hidden mb-6">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover"
        />
        <Badge className="absolute top-4 right-4 text-white bg-recipe-green-500">
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </Badge>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-recipe-green-700 mb-2">{title}</h1>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-recipe-green-500" />
              <span>{time}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4 text-recipe-green-500" />
              <span>{servings} servings</span>
            </div>
            <div className="flex items-center gap-1 font-medium">
              {calories} calories/serving
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={printRecipe}>
            <Printer className="h-4 w-4 mr-1" />
            Print
          </Button>
          <Button 
            className="bg-recipe-orange-500 hover:bg-recipe-orange-600" 
            size="sm"
            onClick={addToMealPlan}
          >
            <CalendarPlus className="h-4 w-4 mr-1" />
            Add to Meal Plan
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="ingredients" className="mt-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
          <TabsTrigger value="instructions">Instructions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="ingredients" className="p-4 bg-white rounded-lg shadow-sm">
          <ScrollArea className="h-[400px] pr-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {ingredients.map((ingredient) => (
                <div key={ingredient.id} className="ingredient-item">
                  <Checkbox id={`ingredient-${ingredient.id}`} />
                  <label 
                    htmlFor={`ingredient-${ingredient.id}`} 
                    className="text-sm cursor-pointer flex-1"
                  >
                    <span className="font-medium">{ingredient.amount}</span> {ingredient.name}
                  </label>
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="instructions" className="p-4 bg-white rounded-lg shadow-sm">
          <ScrollArea className="h-[400px] pr-4">
            <ol className="space-y-6 list-decimal list-inside">
              {steps.map((step, index) => (
                <li 
                  key={step.id} 
                  className={`recipe-step ${completedSteps.includes(step.id) ? 'line-through text-gray-400' : ''}`}
                >
                  <div className="flex gap-2 items-start">
                    <Checkbox 
                      id={`step-${step.id}`}
                      checked={completedSteps.includes(step.id)}
                      onCheckedChange={() => toggleStepCompletion(step.id)}
                    />
                    <label htmlFor={`step-${step.id}`} className="cursor-pointer">
                      {step.instruction}
                    </label>
                  </div>
                </li>
              ))}
            </ol>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
