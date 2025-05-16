
import { RecipeChat } from "@/components/chatbot/RecipeChat";

export default function AssistantPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4 font-heading text-recipe-green-700">Recipe Assistant</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ask our AI assistant anything about recipes, cooking techniques, ingredient substitutions, 
          nutrition information, and more!
        </p>
      </div>
      
      <RecipeChat />
    </div>
  );
}
