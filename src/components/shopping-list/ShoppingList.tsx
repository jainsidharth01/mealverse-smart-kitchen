
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Download, Plus, Trash } from "lucide-react";
import { toast } from "sonner";

interface ShoppingItem {
  id: string;
  name: string;
  amount: string;
  category: string;
  checked: boolean;
}

interface ShoppingListProps {
  initialItems?: ShoppingItem[];
}

export function ShoppingList({ initialItems = [] }: ShoppingListProps) {
  const [items, setItems] = useState<ShoppingItem[]>(initialItems);
  const [newItemName, setNewItemName] = useState("");
  const [newItemAmount, setNewItemAmount] = useState("");
  
  const categories = ["Produce", "Dairy", "Meat", "Pantry", "Bakery", "Frozen", "Other"];
  
  // Group items by category
  const itemsByCategory = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, ShoppingItem[]>);
  
  const handleCheckItem = (id: string) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };
  
  const handleAddItem = () => {
    if (newItemName.trim() === "") return;
    
    const newItem: ShoppingItem = {
      id: `item-${Date.now()}`,
      name: newItemName.trim(),
      amount: newItemAmount.trim() || "1",
      category: "Other",
      checked: false
    };
    
    setItems([...items, newItem]);
    setNewItemName("");
    setNewItemAmount("");
    toast.success("Item added to your shopping list");
  };
  
  const handleClearChecked = () => {
    setItems(items.filter(item => !item.checked));
    toast.success("Completed items removed from list");
  };
  
  const handleDownloadList = () => {
    const listText = categories
      .filter(category => itemsByCategory[category]?.length > 0)
      .map(category => {
        const categoryItems = itemsByCategory[category]
          .map(item => `${item.amount} ${item.name}`)
          .join("\n");
        
        return `${category.toUpperCase()}:\n${categoryItems}`;
      })
      .join("\n\n");
    
    const blob = new Blob([listText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "shopping-list.txt";
    link.click();
    URL.revokeObjectURL(url);
    
    toast.success("Shopping list downloaded");
  };

  return (
    <Card className="max-w-xl mx-auto bg-white shadow">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-recipe-green-700">Shopping List</CardTitle>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleClearChecked}
              disabled={!items.some(item => item.checked)}
            >
              <Trash className="h-4 w-4 mr-1" />
              Clear Checked
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleDownloadList}
              disabled={items.length === 0}
            >
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Add new item form */}
        <div className="flex space-x-2 mb-6">
          <input
            type="text"
            placeholder="Amount"
            className="px-3 py-2 border rounded-md text-sm w-24"
            value={newItemAmount}
            onChange={(e) => setNewItemAmount(e.target.value)}
          />
          <input
            type="text"
            placeholder="Item name"
            className="px-3 py-2 border rounded-md text-sm flex-1"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleAddItem();
            }}
          />
          <Button onClick={handleAddItem}>
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add item</span>
          </Button>
        </div>
        
        {items.length === 0 ? (
          <p className="text-center py-10 text-muted-foreground">
            Your shopping list is empty. Add items or generate a list from your meal plan.
          </p>
        ) : (
          <div className="space-y-6">
            {/* Group items by category */}
            {categories.filter(category => itemsByCategory[category]?.length > 0).map(category => (
              <div key={category}>
                <h3 className="shopping-list-category">{category}</h3>
                <div>
                  {itemsByCategory[category].map(item => (
                    <div key={item.id} className="flex items-center justify-between py-2">
                      <div className="flex items-start gap-3">
                        <Checkbox 
                          id={`item-${item.id}`}
                          checked={item.checked}
                          onCheckedChange={() => handleCheckItem(item.id)}
                        />
                        <label 
                          htmlFor={`item-${item.id}`}
                          className={`text-sm cursor-pointer ${item.checked ? 'line-through text-muted-foreground' : ''}`}
                        >
                          <div>
                            <span className="font-medium">{item.amount}</span> {item.name}
                          </div>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator className="mt-2" />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
