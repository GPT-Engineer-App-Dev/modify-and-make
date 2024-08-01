import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-pink-100">
      <header className="bg-pink-500 text-white p-4">
        <h1 className="text-2xl font-bold">My Pink App</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4 text-pink-800">Welcome to My Pink App</h2>
        <p className="mb-4 text-pink-700">This is a pink-themed application that you can modify and build upon.</p>
        
        <div className="space-y-4">
          <Button 
            className="bg-pink-500 hover:bg-pink-600 text-white"
            onClick={() => alert('Welcome to the pink app!')}
          >
            Click Me!
          </Button>
        </div>
      </main>

      <footer className="bg-pink-300 text-pink-800 p-4 text-center">
        <p>&copy; 2024 My Pink App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
