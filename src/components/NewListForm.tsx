import { useRef, useContext } from "react";
import { AppContext } from "../AppContext";
import { Icon } from "@mdi/react";
import { mdiWindowClose } from "@mdi/js";
import { nanoid } from "nanoid";
import "./scss/NewListForm.scss";

type NewListFormProps = {
  setListFormActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function NewListForm({ setListFormActive }: NewListFormProps) {
  const context = useContext(AppContext);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const errorRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    let listTitles: (string | undefined)[] = [];
    context?.allLists.forEach((list) => listTitles.push(list.title));
    if (errorRef.current) {
      if (listTitles.includes(inputRef.current?.value)) {
        errorRef.current.style.display = "block";
      } else {
        context?.setAllLists((prev) => [
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
        <input
          ref={inputRef}
          id="list-input"
          name="newListInput"
          maxLength={12}
          required
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default NewListForm;
