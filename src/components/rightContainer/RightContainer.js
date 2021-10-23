import React from "react";
import "./RightContainer.css";
import { useState } from "react";
import AddFolder from "../modal/AddFolder";
import RightCard from "./rightCard/rightCard";
import { useSelector } from "react-redux";
import Backdrop from "../backdrop/Backdrop";
import Folder from "../../assets/folder.png";

function RightContainer({
  AddButtonDisable,
  setAddButtonDisable,
  selectedSafe,
  setSelectedSafe,
  currentIndex,
  safeListName,
}) {
  const [showAddFolder, setshowAddFolder] = useState(false);
  const [name, setName] = useState("");
  const safeList = useSelector((state) => state.createSafe.safes);
  //console.log(safeListName);
  console.log(currentIndex);
  let Indexvalue = safeList[currentIndex];

  console.log(Indexvalue);

  let secrets;
  if (selectedSafe.length === 0) {
    secrets = [];
  } else {
    secrets = selectedSafe.secrets;
  }
  function closeModalHandler() {
    setshowAddFolder(false);
  }

  const handleSetName = (add) => {
    setName(add);
  };
  const handelClick = () => {
    setshowAddFolder((prev) => !prev);
    setAddButtonDisable((prevState) => !prevState);
  };
  return (
    <>
      {showAddFolder === true && (
        <AddFolder
          currentIndex={currentIndex}
          handleSetName={handleSetName}
          name={name}
          selectedSafe={selectedSafe}
          setSelectedSafe={setSelectedSafe}
          setshowAddFolder={setshowAddFolder}
        />
      )}
      {showAddFolder && <Backdrop onClick={closeModalHandler} />}
      
      <div className="right-container">
        <div className="image-container">
          {safeListName?.length === 0 && (
            <>
              <div className="safe-Content">
                <p className="Sample">No Safes Created yet</p>
                <p className="content">
                  Create a Safe to see your secrets, folders and permissions
                  here
                </p>
              </div>
            </>
          )}
          {safeListName?.length !== 0 && (
            <>
              <div className="safe-Content2">
                <p className="Sample">{selectedSafe?.safename}</p>
                <p className="content">{selectedSafe?.description}</p>
              </div>
            </>
          )}
        </div>
        <div className="secret-content">
          <ul className="secrets">
            <li>Secrets</li>
            <li disabled={AddButtonDisable} onClick={() => handelClick()}>
              {" "}
              <img src={Folder} alt="folder"></img>
            </li>
          </ul>
          <div className="line"></div>
          <div className="All_secrets">
            {/* <div className="right-card">{name}</div> */}
            {secrets?.map((secret, index) => {
              return <RightCard name={secret} key={index} />;
            })}

            {secrets?.length === 0 && (
              <div className="img-content">
                <img
                  src="./assets/Group.png"
                  alt="an group"
                  className="image2"
                ></img>
                <p className="right-content">
                  You
                  <span className="text-style-2"> do </span>
                  not have acess to this
                  <span className="text-style-2"> Safe </span>
                  and cannot view it’s contents
                </p>
                <button
                  disabled={AddButtonDisable}
                  onClick={() => handelClick()}
                  className="addButton"
                >
                  + Add
                </button>
              </div>
            )}
            {secrets?.length !== 0 && (
              <div className="img-content-none">
                <img
                  src="./assets/Group.png"
                  alt="an group"
                  className="image2"
                ></img>
                <p className="right-content">
                  You
                  <span className="text-style-2"> do </span>
                  not have acess to this
                  <span className="text-style-2"> Safe </span>
                  and cannot view it’s contents
                </p>
                <button
                  disabled={AddButtonDisable}
                  onClick={() => handelClick()}
                  className="addButton"
                >
                  + Add
                </button>
              </div>
            )}
            {!selectedSafe?.safename && (
              <div className="img-content">
                <img
                  src="./assets/Group.png"
                  alt="an group"
                  className="image2"
                ></img>
                <p className="right-content">
                  You
                  <span className="text-style-2"> do </span>
                  not have acess to this
                  <span className="text-style-2"> Safe </span>
                  and cannot view it’s contents
                </p>
                <button
                  disabled={AddButtonDisable}
                  onClick={() => handelClick()}
                  className="addButton"
                >
                  + Add
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RightContainer;
