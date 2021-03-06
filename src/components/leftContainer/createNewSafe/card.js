import React from "react";
import "./card.css";
import Backdrop from "../../backdrop/Backdrop";
import EditModel from "../../modal/EditModel";
import deleteImage from "../../../assets/delete.png";
import editImage from "../../../assets/edit.png";

function Card(props) {
  const { safe, handelClick, onDelete, index,isactive } = props;
  //console.log(safe.index);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openEditModel = () => {
    // dispatch(editItem(safe, index))
    setModalIsOpen(true);
    console.log("edit");
  };
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  console.log(handelClick.index);
  return (
    <div
      className={`card ${isactive}`}
      onClick={() => {
        handelClick(safe, index);
      }}
    >
      <div className="img-cont">
        <img
          src="../../../assets/icon.png"
          alt={"img"}
          className="img-icon"
        ></img>
        <div className='card-det'>
          <span className="card-details">{safe.safename}</span>
          <div className="details">Last updated 1min ago</div>
        </div>
      </div>
      <div className="rightcard">
        <span className="edit-icon">
        <img
          src={editImage}
          onClick={openEditModel}
          className="icon-img"
          alt={"img"}
        ></img></span>
        <span className="edit-icon">
        <img
          src={deleteImage}
          onClick={() => onDelete(index)}
          className="icon-img"
          alt={"img"}
        ></img></span>
      </div>
      {modalIsOpen && (
        <EditModel
          onCancel={closeModalHandler}
          openEditModel={openEditModel}
          index={index}
          safe={safe}
        />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}
export default Card;
