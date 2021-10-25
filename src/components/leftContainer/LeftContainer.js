import "./LeftContainer.css";
import "./LeftContainerHeader.css";
import Button from "../button/Button";
import Group from "../../assets/Group_safe.png";
//import Loader from "../../assets/loading.gif";
import "../search/Search.css";
import { useDispatch } from "react-redux";
import CreateNewSafe from "./createNewSafe/CreateNewSafe";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import api from "../../api/api";
import { reLoadsafe } from "../../redux/createSafe/createSafe.action";

function LeftContainer({
  setAddButtonDisable,
  setSelectedSafe,
  setcurrentIndex,
  setSafeListName,
}) {
  //const safeList = useSelector((state) => state.createSafe.safes);
  const [safeList, setSafeList] = useState([]);
  const [loading, setloading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef("");
  const [safeData, setSafeData] = useState([]);
  const [safeListLength, setsafeListLength] = useState({});
  setSafeListName(safeListLength);


  const isReloaded = useSelector((state) => state.createSafe.isReloaded);
  const dispatch = useDispatch();
  useEffect(() => {
    //console.log("use effect working", isReloaded);
    setloading(true);
    api
      .get("/")
      .then((result) => {
        //console.log("success", result);
        dispatch(reLoadsafe(true));
        setloading(false);
        setSafeList(result.data);
      })
      .catch((error) => {
        console.log(error.responce);
      });
  }, [isReloaded]);

  

  // const [safeLength, setsafeLength] = useState({});
  // setSafeListName(safeLength);
  // //console.log(safeLength);
  useEffect(() => {
    setSafeData([...safeList]);
  }, [safeList]);

  const filterSafe = () => {
    const searchText = inputRef?.current.value;
    //console.log(searchText);
    setSearchTerm(searchText);
    if (searchText !== "") {
      const newAllSafes = safeData.filter((item) => {
        return item.safename.toLowerCase().includes(searchText.toLowerCase());
      });
      setSafeData(newAllSafes);
      //console.log(newAllSafes)
    } else {
      setSafeData([...safeList]);
    }
  };

  console.log(safeListLength);

if(loading){
  return(
    <div className="left-img-content">
      <header className="left-container-header">
        <span className="allsafe">All Safes ({safeListLength.length})</span>
        <input
          ref={inputRef}
          type="text"
          placeholder="&nbsp;Search.."
          className="search"
          value={searchTerm}
          onChange={filterSafe}
        />
      </header>
      <div className="left-container"><div className="container-loading"><div className="loading"></div></div></div></div>
  )
}

  return (
    <div className="left-img-content">
      <header className="left-container-header">
        <span className="allsafe">All Safes ({safeListLength.length})</span>
        <input
          ref={inputRef}
          type="text"
          placeholder="&nbsp;Search.."
          className="search"
          value={searchTerm}
          onChange={filterSafe}
        />
      </header>
      <div className="left-container">
        <div className="safeScroll">
        <div className="safelist">
          {loading && <div className="container-loading"><div className="loading"></div></div>}
          {!loading && (
            <CreateNewSafe
              setAddButtonDisable={setAddButtonDisable}
              setSelectedSafe={setSelectedSafe}
              setcurrentIndex={setcurrentIndex}
              setsafeListLength={setsafeListLength}
              safeData={safeData}
            />
          )}
          {safeData.length === 0 && (
          <div className="safe-img">
            {/* <img src={Group} className="Group" alt="groupimg" /> */}
            <Button safeData={safeData} />
          </div>
        )}
        </div>
        </div>
        {safeData.length !== 0 && (
          <>
            <Button />
          </>
        )}
      </div>
    </div>
  );
}

export default LeftContainer;
