import {useParams} from 'react-router-dom'
import useQuery from '../hooks/useQuery';

function CakeDetail({handleDelete}){ 
    const id = useParams().id  
    const [cake, isLoaded] = useQuery(`http://localhost:4000/cakes/${id}`)

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
    
    