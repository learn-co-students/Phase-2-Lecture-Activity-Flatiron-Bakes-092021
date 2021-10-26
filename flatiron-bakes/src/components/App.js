import {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
//Components
import CakeContainer from "./CakeContainer";
import Header from "./Header";
import Search from "./Search";
import CakeDetail from "./CakeDetail"
import Flavors from './Flavors';
import Form from './Form'

//data


function App() {
  const [cakes, setCakes] = useState([])
  const [flavorsData, setFlavorsData] = useState([])
  const [cakeList, setCakeList] = useState([])
  const [search, setSearch] = useState('')
  const [editing, setEditing] = useState(null)
  const [formData, setFormData] = useState({
    flavor:'',
    size:'',
    image:'',
    price:''
})


useEffect(() => {
  fetch("http://localhost:4000/cakes")
  .then(res => res.json())
  .then(data => {
    setCakes(data)
    setCakeList(data)
  })
  fetch("http://localhost:4000/flavorsData")
  .then(res => res.json())
  .then(data => setFlavorsData(data))
},[])

useEffect(() => {
  console.log(formData)
},[formData])

const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setFormData({...formData, [e.target.name]:e.target.value})
}

  const handleAddCake = (e) => {
    e.preventDefault()
    fetch('http://localhost:4000/cakes',{
      method:'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      setCakeList([data, ...cakeList])
      setFormData({   flavor:'',
      size:'',
      image:'',
      price:''})
    })
  }

  const handleDelete = (deletedCake) => {
    fetch(`http://localhost:4000/cakes/${deletedCake.id}`,{
      method:'DELETE'
    })
    .then(() => {
      const filteredCakes = cakes.filter(cake => cake.id !== deletedCake.id)
      setCakes(filteredCakes)
      setCakeList(filteredCakes)
    
    })
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setCakeList(cakes.filter(cake => cake.flavor.includes(e.target.value)))
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
    <Switch>
      <Route path="/cakes/new">
        <Form  handleForm={editing ? handleEdit : handleAddCake} formData={formData} handleChange={handleChange}/>
      </Route>
      <Route path="/cakes/:id">
        <CakeDetail handleDelete={handleDelete}/>
      </Route>
      <Route path="/cakes">
          <Search search={search} handleSearch={handleSearch}/>
          <Flavors handleFilter={handleFilter} flavorsData={flavorsData}/>
          <CakeContainer populateForm={populateForm} cakeList={cakeList} />
      </Route>
    </Switch>
    </div>
  );
};

export default App;
