import React from "react";
import Card from "./Card";

export default function App(props) {
  return (


    <div className="wrapper">

      <Card
        img="https://media.istockphoto.com/photos/portrait-beautiful-young-woman-with-clean-fresh-skin-picture-id1329622588?b=1&k=20&m=1329622588&s=170667a&w=0&h=MrsM7nyIOW4Gt5PM5Vs6xYIMJ1nr1FLT9bvt0Sve-S4="
        title='Loodhkso'
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />

      <Card
        img="https://media.istockphoto.com/photos/studio-portrait-of-a-smiling-young-latin-woman-picture-id1357723739?b=1&k=20&m=1357723739&s=170667a&w=0&h=TocMmpiVPhpoCekB2a4MQNi87Sc6yqR0s8b7MK9vXNA="
        title='Loodhkso'
        description="Take your boring salads up a knotch. This recipe is perfect for lunch
          and only contains 5 ingredients!"
      />

      <Card
        img="https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        title="Simple Risotto"
        description="Fear Risotto no more! This simple recipe is perfect for family dinners."
      />

      <Card
        img="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        title="Baked Cod with Vegetables"
        description="Baked Cod with Vegetables. 30 minute meal!"
      />


    </div>
  );
}


