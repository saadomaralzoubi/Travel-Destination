import "./Tours.css";
import Tour from "./tour/Tour.js";
import { Link } from "react-router-dom";
export default function Tours(props) {
  return (
    <>
      <div class="all">
        {props.dataTour.map((value) => {
          return (
            <Link to={`/city/${value.id}`}>
              <Tour key={value.id} dataTourOne={value} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
