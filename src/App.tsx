import { useState } from "react";
import Menu from "./components/Menu";
import Content from "./components/Content";
import { nanoid } from "nanoid";
import sampleData from "./sampleData";

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

  const [allTasks, setAllTasks] = useState<{}[]>(sampleData);
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
