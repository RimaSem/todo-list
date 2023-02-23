import { useEffect, useState } from "react";
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
  >(
    localStorage.getItem("lists")
      ? JSON.parse(localStorage["lists"])
      : [
          { title: "Work", id: nanoid() },
          { title: "Shopping", id: nanoid() },
          { title: "Exercise", id: nanoid() },
        ]
  );

  const [allTasks, setAllTasks] = useState<{}[]>(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage["tasks"])
      : sampleData
  );
  const [filterBy, setFilterBy] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(allTasks));
  }, [allTasks]);
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(allLists));
  }, [allLists]);

  return (
    <div className="App">
      <Menu
        allLists={allLists}
        setAllLists={setAllLists}
        allTasks={allTasks}
        setAllTasks={setAllTasks}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Content
        allLists={allLists}
        setAllLists={setAllLists}
        allTasks={allTasks}
        setAllTasks={setAllTasks}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
    </div>
  );
}

export default App;
