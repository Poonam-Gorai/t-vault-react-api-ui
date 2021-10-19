import React from "react";
import "./Modal.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { EditItem } from "../../redux/createSafe/createSafe.action";
import api from "../../api/api";
import {reLoadsafe} from'../../redux/createSafe/createSafe.action';

const EditModel = ({ onCancel, index, safe }) => {
  const dispatch = useDispatch();
  
  const safeNameInputRef = useRef();
  const ownerInputRef = useRef();
  const typeInputRef = useRef();
  const descriptionInputRef = useRef();

  console.log("editModel", index);
  console.log(safe._id);

  const editSafe = (newSafe) => {
    dispatch(EditItem(newSafe, index));
    onCancel();
  };

  function submitHandler(event) {
    event.preventDefault();

    const enteredSafeName = safeNameInputRef.current.value;
    const enteredOwner = ownerInputRef.current.value;
    const enteredType = typeInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    if (
      !enteredSafeName ||
      !enteredOwner ||
      !enteredType ||
      !enteredDescription
    ) {
      return alert("Please fill in all the fileds!");
      //return toast.warn("Please fill in all the fileds!");
    }

    const { secrets } = safe;

    let prevScrets = secrets.length !== 0 ? secrets : [];
    const newSafe = {
      safename: enteredSafeName,
      owner: enteredOwner,
      type: enteredType,
      description: enteredDescription,
      secrets: prevScrets,
    };
    editSafe(newSafe);
    api
      .patch(`/${safe._id}`, {
        safename: enteredSafeName,
        owner: enteredOwner,
        type: enteredType,
        description: enteredDescription,
      })
      .then((result) => {
        console.log("success", result);
        dispatch(reLoadsafe(false));
        //console.log(reLoadsafe);
      })
      .catch(function (error) {
        console.log(error.response.data.message.code);
        if (error.response.data.message.code === 11000) {
          alert("Safe Name Already Exist!!")
        }
      });
  }

  return (
    <form className="modal">
      <p className="create">Edit Safe</p>
      <div className="modal-img">
        <img src="./assets/icon.png" className="icon" alt='iconimg'></img>
        <p className="model-content">
          A Safe is a logical unit to store the secrets. All the safes are
          created within Vault. You can control access only at the safe level.
          As a vault administrator you can manage safes but cannot view the
          content of the safe.
        </p>
      </div>
      <div className="input-content">
        <span className="Safename" htmlFor="safename">
          Safe Name
        </span>
        <input
          type="text"
          placeholder="Safe Name"
          id="safename"
          className="Safe"
          ref={safeNameInputRef}
          autoComplete="off"
          required
          defaultValue={safe.safename}
          //onChange={(e) => enteredSafeName(e.target.value)}
        ></input>
        <span className="Safename" htmlFor="owner">
          Owner
        </span>
        <input
          type="text"
          placeholder="Owner"
          id="owner"
          className="Safe"
          ref={ownerInputRef}
          autoComplete="off"
          required
          defaultValue={safe.owner}
        ></input>
        <span className="Safename" htmlFor="type">
          Type
        </span>
        <input
          type="text"
          placeholder="Type"
          id="type"
          className="Safe"
          ref={typeInputRef}
          autoComplete="off"
          required
          defaultValue={safe.type}
        ></input>
        <span className="Safename" htmlFor="description">
          Description
        </span>
        <textarea
          placeholder="Description"
          id="description"
          className="Safe"
          rows="3"
          ref={descriptionInputRef}
          required
          defaultValue={safe.description}
        ></textarea>
        <span className="Safename">Please add minimum of 10 characters</span>
      </div>
      <div className="modal-btn">
        <button className="modal-btn-cancle" onClick={onCancel}>
          Cancel
        </button>
        <button className="modal-btn-create" onClick={submitHandler}>
          {" "}
          Save
        </button>
      </div>
    </form>
  );
};

export default EditModel;
