import {useState} from 'react'
//Components
import CakeContainer from "./CakeContainer";
import Header from "./Header";
import Search from "./Search";
import CakeDetail from "./CakeDetail"
import Flavors from './Flavors';
import Form from './Form'

//data
import {cakes, flavorsData} from "../data/cakesData"


function App() {
  const [cakeList, setCakeList] = useState(cakes)
  const [selectedCake, setSelectedCake] = useState(null)
  const [search, setSearch] = useState('')
  const [editing, setEditing] = useState(null)
  const [formData, setFormData] = useState({
    flavor:'',
    size:'',
    image:'',
    price:''
})

const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setFormData({...formData, [e.target.name]:e.target.value})
}

  const handleAddCake = (e) => {
    e.preventDefault()
    setCakeList([formData, ...cakeList])
  }

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

  const handleEdit = (e) => {
    e.preventDefault()
    const idx = cakeList.findIndex(cakeListCake => cakeListCake === editing)
    const tempCake = [...cakeList]
    tempCake[idx] = formData
    setCakeList(tempCake)
  }

  const populateForm = (e, cake) => {
    e.stopPropagation()
    //populate the form
    setFormData({
      flavor:cake.flavor,
      size:cake.size,
      image:cake.image,
      price:cake.price
    })
    //change the submit to an edit 
    setEditing(cake)
  }
  
  return (
  
    <div className="App">
      <Header bakeryName="FlatironBakes" slogan="live love code bake repeat"/>
      {selectedCake?<CakeDetail selectedCake={selectedCake} />:null}

      <Form  handleForm={editing ? handleEdit : handleAddCake} formData={formData} handleChange={handleChange}/>

      <Search search={search} handleSearch={handleSearch}/>
      <Flavors handleFilter={handleFilter} flavorsData={flavorsData}/>
      <CakeContainer populateForm={populateForm} cakeList={cakeList} handleCakeClick={handleCakeClick}/>
    </div>
  );
};

export default App;
