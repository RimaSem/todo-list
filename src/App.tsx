import { useState } from "react";
import Menu from "./components/Menu";
import Content from "./components/Content";
import { nanoid } from "nanoid";

function App() {
  const [allLists, setAllLists] = useState<
    {
      title: string | undefined;
      id: string;
    }[]
  >([
    { title: "Work", id: nanoid() },
    { title: "Shopping", id: nanoid() },
    { title: "Exercise", id: nanoid() },
  ]);

  const [allTasks, setAllTasks] = useState<any[]>([
    {
      id: "235f",
      title: "Walk the cat",
      details: "for potty and exploring",
      date: "2023-02-02",
      time: "22:44",
      list: "General",
      isImportant: true,
      isCompleted: false,
    },
    {
      id: "236f",
      title: "Walk the parrot",
      details: "for flying and exploring",
      date: "2024-03-02",
      time: "22:44",
      list: "Work",
      isImportant: false,
      isCompleted: false,
    },
  ]);

  const [filterBy, setFilterBy] = useState("");

  return (
    <div className="App">
      <Menu
        allLists={allLists}
        setAllLists={setAllLists}
        allTasks={allTasks}
        setAllTasks={setAllTasks}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <Content
        allLists={allLists}
        setAllLists={setAllLists}
        allTasks={allTasks}
        setAllTasks={setAllTasks}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
    </div>
  );
}

export default App;
