
import {useDispatch } from "react-redux";
import React from "react";
import Card from "./card";
import {deleteItem} from '../../../redux/createSafe/createSafe.action';
import {reLoadsafe} from'../../../redux/createSafe/createSafe.action';
import { useEffect } from "react";
import api from "../../../api/api";


function CreateNewSafe({ setSelectedSafe, setcurrentIndex,setAddButtonDisable,setsafeListLength,safeData}) {
  //const safeList = useSelector((state) => state.createSafe.safes);
  
  //console.log(safeList);

  const dispatch = useDispatch();
  setsafeListLength(safeData);

  useEffect(() => {
    if(safeData.length>0){
      setSelectedSafe(safeData[0])
    }
  }, [safeData])
  
  const handelClick = (safe, index) => {
    setcurrentIndex(index)
    setSelectedSafe(safe);
    setAddButtonDisable((prevState) => !prevState);
  };
 const onDelete = (index) => {
  //dispatch(deleteItem(index));
  api
  .delete(`/${index}`)
  .then(result =>{
    dispatch(reLoadsafe(false))
  })
  .catch((error) => {
    console.log(error.responce);
  })
  
 }
  return (
    <>
      {safeData.length > 0 &&
        safeData.map((safe, index) => {
          return (
            <Card
              key={index}
              handelClick={handelClick}
              safe={safe}
              index={index}
              onDelete={onDelete}
              />
          );
        })}
    </>
  );
}

export default CreateNewSafe;
