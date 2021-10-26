import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function CakeDetail({handleDelete}){   
    const [cake, setCake] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const id = useParams().id

    useEffect(()=> {
        console.log('hi')
        console.log(id)
        fetch(`http://localhost:4000/cakes/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCake(data)
            setIsLoaded(true)
        });
    },[]);
   
    if(!isLoaded) return <h1>Loading</h1>
    const {image, flavor, size, price, description} = cake
    return(
            <>
                <img src={image} />
                <h1>Flavor: {flavor}</h1>
                <p>Size:{size}</p>
                <p>Price: {price}</p>
                <p>{description}</p>
                <button onClick={() => handleDelete(cake)}>Delete</button>
            </>
        )
    }
    export default CakeDetail
    
    