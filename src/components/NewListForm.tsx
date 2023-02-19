import { useRef } from "react";
import Icon from "@mdi/react";
import { mdiWindowClose } from "@mdi/js";
import { nanoid } from "nanoid";

type NewListFormProps = {
  setListFormActive: React.Dispatch<React.SetStateAction<boolean>>;
  setAllLists: React.Dispatch<
    React.SetStateAction<
      {
        title: string | undefined;
        id: string;
      }[]
    >
  >;
};

function NewListForm({ setListFormActive, setAllLists }: NewListFormProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setAllLists((prev) => [
      ...prev,
      { title: inputRef.current?.value, id: nanoid() },
    ]);
    setListFormActive(false);
  }

  return (
    <div className="list-form-container">
      <form onSubmit={handleSubmit}>
        <div onClick={() => setListFormActive(false)}>
          <Icon className="close-btn" path={mdiWindowClose} />
        </div>
        <label htmlFor="list-input">Create new list</label>
        <input ref={inputRef} id="list-input" name="newListInput" required />
        <button>Add</button>
      </form>
    </div>
  );
}

export default NewListForm;
