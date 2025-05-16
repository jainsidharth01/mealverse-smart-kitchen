
import { ShoppingList } from "@/components/shopping-list/ShoppingList";

// Sample shopping items
const sampleItems = [
  { id: '1', name: 'Apples', amount: '6', category: 'Produce', checked: false },
  { id: '2', name: 'Bananas', amount: '1 bunch', category: 'Produce', checked: false },
  { id: '3', name: 'Chicken breast', amount: '2 lbs', category: 'Meat', checked: false },
  { id: '4', name: 'Olive oil', amount: '1 bottle', category: 'Pantry', checked: false },
  { id: '5', name: 'Greek yogurt', amount: '32 oz', category: 'Dairy', checked: false },
  { id: '6', name: 'Whole wheat bread', amount: '1 loaf', category: 'Bakery', checked: false },
  { id: '7', name: 'Spinach', amount: '1 bag', category: 'Produce', checked: false },
  { id: '8', name: 'Garlic', amount: '1 head', category: 'Produce', checked: false },
  { id: '9', name: 'Brown rice', amount: '2 cups', category: 'Pantry', checked: false },
  { id: '10', name: 'Cheddar cheese', amount: '8 oz', category: 'Dairy', checked: false },
];

export default function ShoppingListPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 font-heading text-recipe-green-700">Shopping List</h1>
        <p className="text-muted-foreground max-w-2xl">
          Your smart shopping list consolidates ingredients from your meal plan. 
          Add, edit, or check off items as you shop.
        </p>
      </div>
      
      <ShoppingList initialItems={sampleItems} />
    </div>
  );
}
