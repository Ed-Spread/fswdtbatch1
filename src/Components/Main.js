import Logo1 from "./Haryanvi Culture.jpg";
import Logo2 from "./Punjab Culture.jpg";
import Logo3 from "./Rajasthan Culture.jpg";
import Logo4 from "./Kerala Culture.jpg";
import Card from "./Card";
import "./Main.css";
export default function Main() {
  return (
    <div class="container">
      <Card
        im={Logo1}
        para="The rich Haryanvi culture is characterised by the hookahs and the
          charpoys, the vivid fairs and the swaying paddy fields; Haryana is one
          of the wealthiest states in India and is one of the most economically
          developed regions in South Asia. "
      />
      &nbsp;&nbsp;&nbsp;
      <Card
        im={Logo2}
        para="Punjabi culture is so strong now that it has spread like a religion. This culture was very limited and its creed and community etc were ignored but the situation has become opposite today."
      />
      &nbsp;&nbsp;&nbsp;
      <Card
        im={Logo3}
        para="Rajasthan's Culture dates back to the years of Kings where it was previously called Rajputana. Over the years it has been ruled by various kings including the Rajput, Marathas and even Muslim rulers.."
      />
      &nbsp;&nbsp;&nbsp;
      <Card
        im={Logo4}
        para="Kerala is indeed an ideal vacation spot and has also been called as one of the paradises of the world. Kerala is well known for its scenic locations, the Kerala architecture which is used to design its majestic temples."
      />
    </div>
  );
}
