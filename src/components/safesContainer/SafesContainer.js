import React from "react";
import LeftContainer from "../leftContainer/LeftContainer";
import RightContainer from "../rightContainer/RightContainer";
import "./SafesContainer.css";
import { useState } from "react";


function SafesContainer( ) {
  const [AddButtonDisable, setAddButtonDisable] = useState(true);
  const [selectedSafe, setSelectedSafe] = useState({});
  const [currentIndex, setcurrentIndex] = useState(0)
  const[safeListName,setSafeListName] = useState({});
//  console.log(safeListName);
//console.log(selectedSafe);
  // const safeList = useSelector((state) => state.createSafe.safes);
  // console.log("StfeList",safeList[0].secrets);
  // const [selectSafe, setSelectSafe] = useState();
  // const [renderTrigger, setRender] = useState(0);
  // const reRender = () => {
  //   setRender(renderTrigger + 1);
  //   setSelectSafe({});
  // };
  return (
    <div className="main-content">
      <div className="container">
        <LeftContainer
          setAddButtonDisable={setAddButtonDisable}
          setSelectedSafe={setSelectedSafe}
          setcurrentIndex={setcurrentIndex}
          setSafeListName={setSafeListName}
          // setSelectSafe={setSelectSafe}
          //  renderTrigger={renderTrigger} 
          //  reRender={reRender}
        />
        <RightContainer
          AddButtonDisable={AddButtonDisable}
          setAddButtonDisable={setAddButtonDisable}
          selectedSafe={selectedSafe}
          setSelectedSafe={setSelectedSafe}
          currentIndex={currentIndex}
          safeListName={safeListName}
          // selectSafe={selectSafe} renderTrigger={renderTrigger} reRender={reRender}
          
        />
      </div>
    </div>
  );
}

export default SafesContainer;
