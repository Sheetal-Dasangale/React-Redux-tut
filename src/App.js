import HelloReact from "./Component/HelloReact";
import StudentParent from "./Component/Props/StudentParent";
import Counter from "./Component/Counter/Counter";
import StateFunctionality from "./Component/StateWithClassCompo/StateFunctionality";
import Showbutton from "./Component/Toggle/showbutton";
import Bindmethod from "./Component/bindmethod/bindMthod";
import PropswithClassComp from "./Component/Props/PropswithClassComp";
import Demo from "./Component/React in one file/demo";
import Controlled from "./Component/Controlled_Uncontrolled_Comp/controlled";
import Uncontrolled from "./Component/Controlled_Uncontrolled_Comp/uncontrolled";
import ListItem from "./Component/List/list_array";
import ListItemObject from "./Component/List/list_objectarray";
import Routing from "./Component/Routing/Routing";
import InlineStyle from "./Component/Cssstyletypes/inlinestyle";
import CSSModule from "./Component/Cssstyletypes/cssmodule";
import StyledComponentNew from "./Component/Cssstyletypes/styleComponent";

import ReactTableNew from "./Component/ReactTable/ReactTable";
import AppComp from "./Component/HOC/AppComp";
import AppContext from "./Component/ContextApi/AppContext";
import DemoHook from "./Component/Hooks/DemoHook";
import DemoUseEffect from "./Component/Hooks/useEffectHook";

function App() {
  const data = [
    { id: 1, title: "First", content: "Welcome to JavaTpoint!!" },
    { id: 2, title: "Second", content: "It is the best ReactJS Tutorial!!" },
    {
      id: 3,
      title: "Third",
      content: "Here, you can learn all the ReactJS topics!!",
    },
  ];
  return (
    <div className="App">
      {/* <HelloReact name="Sheetal" />
      <hr />
      <StudentParent />
      <hr />
      <Counter />
      <hr />
      <StateFunctionality />
      <hr /> */}
      {/* <PropswithClassComp />
      <hr />
      <Showbutton />
      <hr />
      <Bindmethod />
      <hr />
      <Demo /> */}
      {/* <hr /> */}
      {/* <Controlled /> */}
      {/* <Uncontrolled /> */}
      {/* <ListItem />
      <hr />
      <ListItemObject data={data} /> */}
      {/* <Routing />
       */}

      {/* <InlineStyle /> */}

      {/* <CSSModule /> */}
      {/* <StyledComponentNew /> */}
      {/* <ReactTableNew /> */}

      {/* <AppComp /> */}
      {/* <AppContext /> */}
      {/* <DemoHook /> */}
      {/* <DemoUseEffect /> */}
    </div>
  );
}

export default App;
