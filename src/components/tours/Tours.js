import "./Tours.css";
export default function Tour(props) {
  return (
    <>
      <div class="all">
        {props.dataTour.map((value, index) => {
          return (
            <div class="card" key={index}>
              <p id="name">{value.name}</p>
              <img src={value.image} />
              <hr></hr>
            </div>
          );
        })}
      </div>
    </>
  );
}
