import Description from "../components/description";
import Title from "../components/title";

export default function NullTodo() {
  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="max-w-md h-max text-center w-auto space-y-4">
        <Title>You don't have any tasks.</Title>
        <Description>Please add a new task</Description>
      </div>
    </main>
  );
}
