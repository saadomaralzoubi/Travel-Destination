import "./Tour.css";

export default function Tour(props) {
  return (
    <div>
      <p id="name">{props.dataTourOne.name}</p>
      <img src={props.dataTourOne.image} />
      <hr></hr>
    </div>
  );
}
