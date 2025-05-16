
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MealItem({ id, title, image, onRemove }) {
  return (
    <div className="flex items-center gap-3 p-2 bg-white border rounded-md">
      <img 
        src={image} 
        alt={title} 
        className="w-14 h-14 object-cover rounded"
      />
      <div className="flex-1">
        <h4 className="font-medium text-sm line-clamp-1">{title}</h4>
      </div>
      <Button 
        variant="ghost" 
        size="sm" 
        className="h-8 w-8 p-0 text-muted-foreground hover:text-red-500"
        onClick={onRemove}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Remove</span>
      </Button>
    </div>
  );
}
