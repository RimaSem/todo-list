import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import sampleData from "./sampleData";
import { AppContextType, AllTasksType, AllListsType } from "./types";

type AppContextProviderProps = {
  children: React.ReactNode;
};

const AppContext = React.createContext<AppContextType | null>(null);

function AppContextProvider({ children }: AppContextProviderProps) {
  const [allLists, setAllLists] = useState<AllListsType>(
    localStorage.getItem("lists")
      ? JSON.parse(localStorage["lists"])
      : [
          { title: "Work", id: nanoid() },
          { title: "Shopping", id: nanoid() },
          { title: "Exercise", id: nanoid() },
        ]
  );
  const [allTasks, setAllTasks] = useState<AllTasksType>(
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
    <AppContext.Provider
      value={{
        allLists,
        setAllLists,
        allTasks,
        setAllTasks,
        filterBy,
        setFilterBy,
        selectedFilter,
        setSelectedFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
