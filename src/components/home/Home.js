import Header from "../header/Header.js";
import Tour from "../tours/Tours.js";
import Footer from "../footer/Footer.js";
export default function Home(props) {
  return (
    <>
      <Header />
      <Tour key={props.data} dataTour={props.data} />
      <Footer />
    </>
  );
}
