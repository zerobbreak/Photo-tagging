import type { Route } from "./+types/_index";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Find Waldo" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const levels = [
  {
    id: 1,
    name: "Beach Party",
    description: "Find the characters enjoying a day at the crowded beach!",
    thumbnail: "/placeholder.svg?height=300&width=500",
    characters: ["Waldo", "Wenda", "Wizard"],
  },
  {
    id: 2,
    name: "City Chaos",
    description: "Can you spot everyone in this busy metropolitan scene?",
    thumbnail: "/placeholder.svg?height=300&width=500",
    characters: ["Waldo", "Odlaw", "Woof"],
  },
  {
    id: 3,
    name: "Medieval Madness",
    description: "Travel back in time to find characters in this historical setting!",
    thumbnail: "/placeholder.svg?height=300&width=500",
    characters: ["Waldo", "Wenda", "Wizard", "Odlaw"],
  },
]

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-red-600 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">Where&apos;s Waldo?</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/leaderboard" className="hover:underline">
                  Leaderboard
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto py-8 px-4">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Find the Characters!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Challenge yourself to find Waldo and his friends hiddenin crowded
            scenes. Click on the characters when you spot them!
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2">
          {levels.map((level) => (
            <div key={level.id} className="border rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <img
                  src={level.thumbnail}
                  alt={level.name}
                  className="w-full h-full object-cover"
                />

              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
