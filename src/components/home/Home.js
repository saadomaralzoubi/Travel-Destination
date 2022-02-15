import Header from "../header/Header.js";
import Tours from "../tours/Tours.js";
import Footer from "../footer/Footer.js";
export default function Home(props) {
  return (
    <>
      <Header />
      <Tours dataTour={props.data} />
      <Footer />
    </>
  );
}
