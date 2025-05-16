
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import { toast } from "sonner";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function RecipeChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: "👋 Hi! I'm your RecipeSmart Assistant. Ask me anything about recipes, ingredients, cooking techniques, or meal planning!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // In a real app, this would call an AI API like OpenAI
    // For now, we'll simulate a response after a delay
    setTimeout(() => {
      const botResponses: Record<string, string> = {
        'hello': "Hello! How can I help with your cooking today?",
        'hi': "Hi there! Need help with a recipe or cooking technique?",
        'recipe': "I can help you find recipes based on ingredients, dietary restrictions, or cuisine types. What are you looking for?",
        'ingredient': "Let me help you find ingredient substitutions or information about specific ingredients.",
        'meal plan': "I can help you plan meals for the week based on your preferences and dietary needs.",
        'help': "I can answer questions about recipes, ingredients, cooking techniques, meal planning, and more. Just ask away!",
      };
      
      // Check for keywords in the user's message
      const lowercaseInput = input.toLowerCase();
      let responseText = "I'm here to help with your cooking questions. Could you provide more details about what you're looking for?";
      
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (lowercaseInput.includes(keyword)) {
          responseText = response;
          break;
        }
      }
      
      const botMessage: Message = {
        id: `msg-${Date.now() + 1}`,
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle className="text-center text-recipe-green-700">Recipe Assistant</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow overflow-hidden">
        <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.sender === 'user'
                      ? 'bg-recipe-green-500 text-white'
                      : 'bg-muted'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-lg px-4 py-2 bg-muted">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      
      <CardFooter>
        <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
          <Input
            placeholder="Ask about recipes, ingredients, or cooking tips..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-grow"
          />
          <Button 
            type="submit" 
            size="icon"
            disabled={isLoading || input.trim() === ''}
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
