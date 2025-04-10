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
    thumbnail: "/Beach.jpg",
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
    description:
      "Travel back in time to find characters in this historical setting!",
    thumbnail: "/placeholder.svg?height=300&width=500",
    characters: ["Waldo", "Wenda", "Wizard", "Odlaw"],
  },
];

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

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {levels.map((level) => (
            <div
              key={level.id}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={level.thumbnail}
                  alt={level.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xlfont-bold mb-2">{level.name}</h3>
                <p className="text-gray-600 mb-4">{level.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {level.characters.map((character) => (
                      <div
                        key={character}
                        className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                      >
                        <span className="text-xs font-bold">
                          {character.charAt(0)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <a href={`/game/${level.id}}`}>
                    <Button variant="default">Play</Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-gray-100 rounded-lg p-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">How to Play</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Select a level from the options above</li>
            <li>Find the characters listed at the top of the game screen</li>
            <li>Click on a character when you find them</li>
            <li>Try to find all characters as quickly as possible</li>
            <li>Submit your time to the leaderboard!</li>
          </ol>
        </section>
      </main>
    </div>
  );
};

export default Home;
