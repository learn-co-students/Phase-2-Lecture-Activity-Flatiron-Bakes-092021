import {useState} from 'react'
//Components
import CakeContainer from "./CakeContainer";
import Header from "./Header";
import Search from "./Search";
import CakeDetail from "./CakeDetail"
import Flavors from './Flavors';

//data
import {cakes, flavorsData} from "../data/cakesData"


function App() {
  const [cakeList, setCakeList] = useState(cakes)
  const [selectedCake, setSelectedCake] = useState(null)
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setCakeList(cakes.filter(cake => cake.flavor.includes(e.target.value)))
  }

  const handleCakeClick = (cake) => {
    setSelectedCake(cake)
  }

  const handleFilter = (flavor) => {
    setCakeList(cakes.filter(cake => cake.flavor === flavor))
  }
  
  return (
  
    <div className="App">
      <Header bakeryName="FlatironBakes" slogan="live love code bake repeat"/>
      {selectedCake?<CakeDetail selectedCake={selectedCake} />:null}
      <Search search={search} handleSearch={handleSearch}/>
      <Flavors handleFilter={handleFilter} flavorsData={flavorsData}/>
      <CakeContainer cakeList={cakeList} handleCakeClick={handleCakeClick}/>
    </div>
  );
};

export default App;
