import "./App.scss";
import Pricing from "./components/Pricing";
import Header from "./components/Header";
import planAnnually from "./planAnnually";
import planMonthly from "./planMonthly";
import { createContext, useState } from "react";

const SwitchContext = createContext();

export default function App() {
  const [data, setData] = useState(planMonthly);
  const [on, setOn] = useState(true);

  function planChange() {
    setOn((prevState) => !prevState);
    on ? setData(planAnnually) : setData(planMonthly);
  }

  const dataItem = data.map((item) => {
    return (
      <Pricing
        key={item.id}
        plan={item.plan}
        price={item.price}
        storage={item.storage}
        users={item.users}
        bandwith={item.bandwith}
        css={item.css}
      />
    );
  });

  return (
    <SwitchContext.Provider value={{ data, on, planChange }}>
      <Header />
      <section className="section">{dataItem}</section>
    </SwitchContext.Provider>
  );
}

export { SwitchContext };
