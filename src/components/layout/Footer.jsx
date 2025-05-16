
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white border-t py-8 mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-recipe-green-600 font-heading">RecipeSmart</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Your smart kitchen assistant for meal planning, recipe discovery, and intelligent shopping lists.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-medium mb-2">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-recipe-green-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/recipes" className="text-muted-foreground hover:text-recipe-green-600">
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link to="/meal-planner" className="text-muted-foreground hover:text-recipe-green-600">
                    Meal Planner
                  </Link>
                </li>
                <li>
                  <Link to="/shopping-list" className="text-muted-foreground hover:text-recipe-green-600">
                    Shopping List
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/help" className="text-muted-foreground hover:text-recipe-green-600">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-recipe-green-600">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-muted-foreground hover:text-recipe-green-600">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/terms" className="text-muted-foreground hover:text-recipe-green-600">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:text-recipe-green-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-muted-foreground hover:text-recipe-green-600">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RecipeSmart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
