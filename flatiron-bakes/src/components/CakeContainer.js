import CakeCard from "./CakeCard";

function CakeContainer({populateForm, cakeList, handleCakeClick}){
    return(
        <>
        {cakeList.map(cake => <CakeCard key={cake.flavor} populateForm={populateForm} handleCakeClick={handleCakeClick} cakeObj={cake}/>)}
        </>
    )
}

export default CakeContainer

