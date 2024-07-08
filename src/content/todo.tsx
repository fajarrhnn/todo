import { Trash, Pencil } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import Description from "../components/description";

export default function Todos({ id, name }: { id: number; name: string }) {
  return (
    <Card key={id} className="p-3 flex justify-between items-center">
      <Checkbox />
      <Description>{name}</Description>
      <div className="grid gap-3">
        <Button size={"icon"} variant={"secondary"}>
          <Pencil />
        </Button>
        <Button size={"icon"} variant={"destructive"} onClick={()=> localStorage.clear()}>
          <Trash />
        </Button>
      </div>
    </Card>
  );
}
