import React from "react";
import './AddFolder.css';
import { useSelector } from "react-redux";
import api from "../../api/api";
import { useDispatch } from "react-redux";
import {reLoadsafe} from'../../redux/createSafe/createSafe.action';

const AddFolder = ({ setshowAddFolder,name,selectedSafe,handleSetName,currentIndex }) => {

  const safeList = useSelector((state) => state.createSafe.safes);
  const secrets = safeList[currentIndex]?.secrets;
  //console.log("StfeList",safeList[0].secrets);
  const dispatch = useDispatch();
  console.log(selectedSafe._id)
  const closeAddForm = () => {
    setshowAddFolder((prev) => !prev);
    
  };
  const saveForm = () => {
  //console.log("str",name);
    api
    .patch(`/secrets/${selectedSafe._id}`, {secrets:name})
    .then((result) => {
      console.log("success", result);
      dispatch(reLoadsafe(false))
      console.log(reLoadsafe)
    })
    .catch((error) => {
      console.log(error.response);
    })

    if (!name) {
      return alert("Please fill in all the fileds!");
      //return toast.warn("Please fill in all the fileds!");
    }
    setshowAddFolder((prev) => !prev);
   // secrets?.push(name)
    handleSetName(" ");

  
  };

  return (
    <div className="addFolder">
      <div className="addFolder-content">
        <span className="addFolder-Safename" htmlFor="safename">
          Add Folder
        </span>
        <p className='folder-name'>Folder Name</p>
        <input
          type="text"
          placeholder=""
          id="safename"
          className="addFolder-Safe"
          value={name}
          required
          onChange={(e) => handleSetName(e.target.value)}
        ></input>
        <p>Please enter a minimum of 3 characters lowercase alphabets numbers and underscores only</p>
        <div className="addFolder-btn">
          <button className="addFolder-btn-cancle" onClick={closeAddForm}>
            Cancel
          </button>
          <button className="addFolder-btn-create" onClick={saveForm}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFolder;
