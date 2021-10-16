import CakeCard from "./CakeCard";

function CakeContainer({cakeList, handleCakeClick}){
    return(
        <>
        {cakeList.map(cake => <CakeCard key={cake.flavor} handleCakeClick={handleCakeClick} cakeObj={cake}/>)}
        </>
    )
}

export default CakeContainer

