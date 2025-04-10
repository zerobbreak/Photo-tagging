import React, { useState } from "react";
import { useParams } from "react-router";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { useSonner } from "sonner";

interface Character {
  name: string;
  found: boolean;
}

interface Coordinates{
  x: number;
  y: number;
}

const Page = () => {
  const { id } = useParams();
  const levelId = Number(id);

  const [first, setfirst] = useState<any>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [time, settime] = useState(0);
  const [isRunning, setisRunning] = useState(false);
  const [clickPosition, setclickPosition] = useState<Coordinates | null>(null);
  const [showMenu, setshowMenu] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [showCompletionDialog, setShowCompletionDialog] = useState(false);
  const [playerName, setPlayerName] = useState("");

  //Load level data
  //In a real app this would fetch from the API
  // const levelData = getLeveld(levelId)

  return <div className="flex flex-col min-h-scre">
    
  </div>;
};

export default Page;
