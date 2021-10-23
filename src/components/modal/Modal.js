//import { useRef } from "react"; //for reading the user input using reference
import "./Modal.css";
import api from "../../api/api";
import { useDispatch } from "react-redux";
import { useState } from "react";
//import { createSafe } from "../../redux/createSafe/createSafe.action";
import { reLoadsafe } from "../../redux/createSafe/createSafe.action";
function Modal(props) {
  const dispatch = useDispatch();

  const [safeNameInputRef ,setSafeNameInputRef]= useState();
  const [ownerInputRef,setOwnerInputRef] = useState();
  const [typeInputRef,setTypeInputRef] = useState("Personal");
  const [descriptionInputRef,setDescriptionInputRef] = useState();

  function cancleHandler() {
    props.onCancel();
  }

  function submitHandler(event) {
    event.preventDefault(); //to prevent Default input
    if (
            !safeNameInputRef ||
            !ownerInputRef ||
            !typeInputRef ||
            !descriptionInputRef 
          ) {
            return alert("Please fill in all the feilds!");
          } 
   else if (descriptionInputRef?.length < 10) {
      return alert("Please enter 10 characters");
    }
    
    api
      .post("/", {
        safename: safeNameInputRef,
        owner: ownerInputRef,
        type: typeInputRef,
        description: descriptionInputRef,
      })
      .then((result) => {
        //console.log("success", result);

        dispatch(reLoadsafe(false));
        //console.log(reLoadsafe);
      })
      .catch(function (error) {
        //console.log(error.response.data.message.code);
        if (error.response.data.message.code === 11000) {
          alert("Safe Name Already Exist!!");
        }
      });
    cancleHandler();
  }

  return (
    <form className="modal">
      <p className="create">Create Safe</p>
      <div className="modal-img">
        <img src="./assets/icon.png" className="icon" alt="iconimg"></img>
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
          name="safename"
          className="Safe"
          value={safeNameInputRef} 
          onChange={(e) => setSafeNameInputRef(e.target.value)}
          autoComplete="off"
          required
        ></input>
        <span className="Safename" htmlFor="owner">
          Owner
        </span>
        <input
          type="text"
          placeholder="Owner"
          name="owner"
          className="Safe"
          value={ownerInputRef}
          onChange={(e) => setOwnerInputRef(e.target.value)}
          autoComplete="off"
          required
        ></input>

        <span className="Safename" htmlFor="type">
          Type
        </span>
        <select
          id=""
          placeholder="Type"
          name="type"
          className="Safe"
          value={typeInputRef}
          onChange={(e) => setTypeInputRef(e.target.value)}
          autoComplete="off"
          required
        >
          <option value="Personal" selected>Personal</option>
            <option value="Shared">Shared</option>
            <option value="Associates">Associates</option>
        </select>

        <span className="Safename" htmlFor="description">
          Description
        </span>
        <textarea
          placeholder="Description"
          name="description"
          className="Safe"
          rows="3"
          value={descriptionInputRef}
          onChange={(e) => setDescriptionInputRef(e.target.value)}
          required
        ></textarea>
        <span className="Safename">Please add minimum of 10 characters</span>
      </div>
      <div className="modal-btn">
        <button className="modal-btn-cancle" onClick={cancleHandler}>
          Cancel
        </button>
        <button className="modal-btn-create" onClick={submitHandler}>
          {" "}
          + Create
        </button>
      </div>
    </form>
  );
}

export default Modal;
