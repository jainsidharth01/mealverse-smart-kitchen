
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User } from "lucide-react";

export interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  time: string;
  calories: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  onClick: () => void;
}

export function RecipeCard({
  id,
  title,
  image,
  time,
  calories,
  servings,
  difficulty,
  onClick
}: RecipeCardProps) {
  // Map difficulty to color
  const difficultyColor = {
    easy: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    hard: "bg-red-100 text-red-800"
  };

  return (
    <Card className="recipe-card overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
        <Badge className={`absolute top-2 right-2 ${difficultyColor[difficulty]}`}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="font-heading text-lg font-medium line-clamp-2">{title}</h3>
      </CardHeader>
      
      <CardContent className="pb-2 flex-grow">
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <User className="mr-1 h-4 w-4" />
            <span>{servings}</span>
          </div>
        </div>
        
        <div className="mt-2 text-sm">
          <span className="font-medium">{calories}</span> calories per serving
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          variant="outline" 
          className="w-full border-recipe-green-300 text-recipe-green-600 hover:bg-recipe-green-50 hover:text-recipe-green-700"
          onClick={onClick}
        >
          View Recipe
        </Button>
      </CardFooter>
    </Card>
  );
}
