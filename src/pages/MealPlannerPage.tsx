
import { MealPlanner } from "@/components/meal-planner/MealPlanner";

export default function MealPlannerPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 font-heading text-recipe-green-700">Weekly Meal Planner</h1>
        <p className="text-muted-foreground max-w-2xl">
          Plan your meals for the week by selecting recipes and adding them to specific days. 
          Your shopping list will be generated automatically based on your meal plan.
        </p>
      </div>
      
      <MealPlanner />
    </div>
  );
}
