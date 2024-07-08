import {
  ChangeEventHandler,
  FormEventHandler,
  useState,
  useEffect,
} from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Plus } from "lucide-react";
import { Card } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import NullTodo from "./content/null";
import { TodoInitialState } from "./types/todo";
import Todos from "./content/todo";

export default function App() {
  const [todos, setTodos] = useState<TodoInitialState[]>([]);
  const [initialState, setInitialState] = useState<TodoInitialState>({
    id: 1,
    name: "",
    completed: false,
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("dataTodo") || "[]");
    setTodos(storedData);
  }, []);

  const submitTodo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      name: initialState.name,
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("dataTodo", JSON.stringify(updatedTodos));
    setInitialState({ id: newTodo.id + 1, name: "", completed: false });
  };

  const changeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setInitialState((prev) => ({
      ...prev,
      name: value,
    }));
  };

  return (
    <>
      <section className="py-5 h-screen mx-auto relative">
        {todos.length > 0 ? (
          <>
            <div className="w-full mx-auto grid md:grid-cols-3 gap-3">
              {todos.map(({ id, name }: TodoInitialState) => (
                <Todos id={id} name={name} key={id} />
              ))}
            </div>
          </>
        ) : (
          <NullTodo />
        )}
        <div className="fixed bottom-10 right-10">
          <Dialog>
            <DialogTrigger asChild>
              <Button size={"icon"}>
                <Plus />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add a new Task</DialogTitle>
              </DialogHeader>
              <form onSubmit={submitTodo}>
                <div className="grid gap-4 py-4">
                  <Card className="border-none shadow-none flex flex-col gap-4">
                    <Label htmlFor="todo">Title</Label>
                    <Input
                      type="text"
                      name="todo"
                      id="todo"
                      onChange={changeInput}
                      value={initialState.name}
                    />
                  </Card>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit">Add</Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </>
  );
}