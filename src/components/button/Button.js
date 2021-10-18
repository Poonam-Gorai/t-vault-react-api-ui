import { useState } from "react";
import Backdrop from "../backdrop/Backdrop";
import Modal from "../modal/Modal";
import "./Button.css";
import { useSelector } from "react-redux";

function Button() {
  const safeList = useSelector((state) => state.createSafe.safes);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //console.log(safeListLength);
console.log(safeList);
  //const [safeLength, setsafeLength] = useState({});
  
  function ModalHandler() {
    setModalIsOpen(true);

    //console.log('Clicked');
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <>
      {safeList.length === 0 && ( 
        <div className="btn-size">
          <button className="btn" onClick={ModalHandler}>
            <span className="plus">+</span>
          </button>
          {modalIsOpen && <Modal onCancel={closeModalHandler} />}
          {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
        </div>
      )}
       {safeList.length !== 0 && ( 
        <div className="btn-size-2">
          <button className="btn" onClick={ModalHandler}>
            <span className="plus">+</span>
          </button>
          {modalIsOpen && <Modal onCancel={closeModalHandler} />}
          {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
        </div>
       )}
    </>
  );
}

export default Button;
