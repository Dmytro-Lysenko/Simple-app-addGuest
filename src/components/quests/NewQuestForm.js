import { useRef } from "react";

import classes from "./NewQuestForm.module.css";

const NewQuestForm = (props) => {
  const nameInputRef = useRef();
  const photoInputRef = useRef();
  const ageInputRef = useRef();
  const professionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredPhoto = photoInputRef.current.value;
    const enteredProfession = professionInputRef.current.value;

    const newGuestData = {
      name: enteredName,
      age: enteredAge,
      photo: enteredPhoto,
      profession: enteredProfession,
    };


props.onAddGuest(newGuestData);

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.name}>
        <label htmlFor="name">Quest Name</label>
        <input type="text" required id="name" ref={nameInputRef}></input>
      </div>
      <div className={classes.age}>
        <label htmlFor="age">Quest Age</label>
        <input type="number" required id="age" ref={ageInputRef}></input>
      </div>
      <div className={classes.photo}>
        <label htmlFor="photo">Quest photo</label>
        <input type="url" required id="photo" ref={photoInputRef}></input>
      </div>
      <div className={classes.profession}>
        <label htmlFor="profesion">Quest proffesion</label>
        <input
          type="text"
          required
          id="profesion"
          ref={professionInputRef}
        ></input>
      </div>
      <div className={classes.actions}>
        <button>Add new guest</button>
      </div>
    </form>
  );
};

export default NewQuestForm;
