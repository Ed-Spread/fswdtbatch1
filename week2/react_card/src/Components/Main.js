import Logo1 from "./shirts.jpg";
import Logo2 from "./watch.jpg";
import Logo3 from "./camera.jpg";
import Logo4 from "./saree.jpg";
import Card from "./Card";
import "./Main.css";
export default function Main() {
  return (
    <div class="container">
      <div class="container1">
      <Card
        im={Logo1}
        para="There are many websites are available on the best shirts. So you should properly search and confirm the price of the product along with the extra charges and remember to view the exact image of the product for the best buy of your shirt."
      />
      &nbsp;&nbsp;&nbsp;
      <Card
        im={Logo2}
        para="A watch is something personal. Everyone has their own taste in design and style. Therefore, the signs of a quality watch are in general. And how these signs are easily identifiable. A little side note is that we are looking at an affordable watch."
      />
      </div>
      &nbsp;&nbsp;&nbsp;
      <div class="2">
      <Card
        im={Logo3}
        para="A camera is a delicate piece of equipment, so always store it in a camera bag, a protective case or an airtight container with foam or packaging peanuts for padding."
      />
      &nbsp;&nbsp;&nbsp;
      <Card
        im={Logo4}
        para="Everything we do is driven by a need from our new customers and long term clients who have ultimately helped build and shape who we are today. The Saree Shop also provides occasions, wedding and resources for general guidance. "
      />
      </div>
    </div>

    
  );
}