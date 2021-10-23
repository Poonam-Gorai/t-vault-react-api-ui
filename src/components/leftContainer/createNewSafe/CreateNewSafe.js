import { useDispatch } from "react-redux";
import React, { useState } from "react";
import Card from "./card";
//import { deleteItem } from "../../../redux/createSafe/createSafe.action";
import { reLoadsafe } from "../../../redux/createSafe/createSafe.action";
import { useEffect } from "react";
import api from "../../../api/api";

function CreateNewSafe({
  setSelectedSafe,
  setcurrentIndex,
  setAddButtonDisable,
  setsafeListLength,
  safeData,
}) {
  //const safeList = useSelector((state) => state.createSafe.safes);
const[activeSafeId,setactiveSafeId] = useState(0);
  //console.log(safeList);
  console.log("current index value ",activeSafeId);

  const dispatch = useDispatch();
  setsafeListLength(safeData);

  useEffect(() => {
    if (safeData?.length > 0) {
      setSelectedSafe(safeData[0]);
    }
  }, [safeData]);

  const handelClick = (safe, index) => {
    setactiveSafeId(index)
    setcurrentIndex(index);
    setSelectedSafe(safe);
    setAddButtonDisable((prevState) => !prevState);
  };
  const onDelete = (_id) => {
console.log(setcurrentIndex)
   // dispatch(deleteItem(index));
    //console.log("id is", _id);
    api
      .delete(`/${_id}`)
      .then((result) => {
        setSelectedSafe({})
        //console.log("create-success", result.data.secrets);
        dispatch(reLoadsafe(false));
        
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <>
      {safeData.length > 0 &&
        safeData.map((safe, index) => {
          let isactive = index === activeSafeId?"card-active" :false;
          return (
            <Card
              key={index}
              handelClick={handelClick}
              safe={safe}
              index={index}
              onDelete={() => onDelete(safe._id)}
              isactive={isactive}
            />
          );
        })}
    </>
  );
}

export default CreateNewSafe;
