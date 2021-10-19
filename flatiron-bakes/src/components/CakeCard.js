import {useState} from 'react'

function CakeCard({populateForm, handleCakeClick,cakeObj, cakeObj:{flavor,size = '6" cake',price}}){
const [liked, setLiked] = useState(false)

const handleLike = () =>{
    setLiked((currentLike) => !currentLike)
    console.log(liked)
}
    
return(
        <div onClick={() => handleCakeClick(cakeObj)}>
            <h1>Flavor: {flavor}</h1>
            <p>Size:{size}</p>
            <p>Price: {price}</p>
            <button onClick={(e) => populateForm(e, cakeObj)}>Edit</button>
            <p onClick={handleLike}>{liked?'♥':'♡'}</p>
        </div>
    )
}
export default CakeCard

