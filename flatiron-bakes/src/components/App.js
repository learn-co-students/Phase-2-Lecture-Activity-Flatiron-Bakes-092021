import CakeCard from "./CakeCard";
function App() {
  return (
    <div className="App">
      <CakeCard flavor={"Carrot and Walnut"} price={20} />
      <CakeCard flavor={"Chocolate"} price={25} />
      <CakeCard flavor={"Vanilla"} price={28} />
    </div>
  );
}

export default App;
