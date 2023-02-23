import { useRef } from "react";
import Icon from "@mdi/react";
import { mdiWindowClose } from "@mdi/js";
import { nanoid } from "nanoid";
import "./scss/NewListForm.scss";

type NewListFormProps = {
  setListFormActive: React.Dispatch<React.SetStateAction<boolean>>;
  allLists: { title: string | undefined; id: string }[];
  setAllLists: React.Dispatch<
    React.SetStateAction<
      {
        title: string | undefined;
        id: string;
      }[]
    >
  >;
};

function NewListForm({
  setListFormActive,
  allLists,
  setAllLists,
}: NewListFormProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const errorRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    let listTitles: (string | undefined)[] = [];
    allLists.forEach((list) => listTitles.push(list.title));
    if (errorRef.current) {
      if (listTitles.includes(inputRef.current?.value)) {
        errorRef.current.style.display = "block";
      } else {
        setAllLists((prev) => [
          ...prev,
          { title: inputRef.current?.value, id: nanoid() },
        ]);
        setListFormActive(false);
      }
    }
  }

  return (
    <div className="list-form-container">
      <form onSubmit={handleSubmit}>
        <div onClick={() => setListFormActive(false)}>
          <Icon className="close-btn" path={mdiWindowClose} />
        </div>
        <label htmlFor="list-input">Create new list</label>
        <div ref={errorRef} className="list-input-error">
          This list already exists
        </div>
        <input ref={inputRef} id="list-input" name="newListInput" required />
        <button>Add</button>
      </form>
    </div>
  );
}

export default NewListForm;
