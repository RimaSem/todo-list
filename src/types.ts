export type AppContextType = {
  allLists: { title: string | undefined; id: string }[];
  setAllLists: React.Dispatch<
    React.SetStateAction<{ title: string | undefined; id: string }[]>
  >;
  allTasks: AllTasksType;
  setAllTasks: React.Dispatch<React.SetStateAction<AllTasksType>>;
  filterBy: string;
  setFilterBy: React.Dispatch<React.SetStateAction<string>>;
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
};

export type TaskType = {
  id: string;
  title: string;
  details: string;
  date: string;
  time: string;
  list: string;
  isImportant: boolean;
  isCompleted: boolean;
};

export type AllTasksType = TaskType[];

export type AllListsType = {
  title: string | undefined;
  id: string;
}[];
