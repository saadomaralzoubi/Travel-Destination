import "./TourDetails.css";
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function TourDetails(props) {
  const [seemorestate, setinfo] = useState(false);
  function clickhandle() {
    setinfo(!seemorestate);
  }

  let { id } = useParams();
  let dataId = props.data.filter((element) => element.id == id);
  console.log(dataId);

  return (
    <>
      <Header />
      <div>
        <p id="name"> {dataId[0].name} </p>
        <p id="info">
          {seemorestate
            ? dataId[0].info
            : `${dataId[0].info.substring(0, 200)}`}
          {seemorestate ? (
            <button onClick={clickhandle}>see less</button>
          ) : (
            <button onClick={clickhandle}>see more</button>
          )}
        </p>

        <p class="p"> {dataId[0].price} &euro;</p>
        <img src={dataId[0].image} />
      </div>

      <Footer />
    </>
  );
}
