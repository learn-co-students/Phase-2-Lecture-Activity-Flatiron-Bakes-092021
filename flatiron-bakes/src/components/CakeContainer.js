import CakeCard from "./CakeCard";

function CakeContainer({populateForm, cakeList}){
    return(
        <>
        {cakeList.map(cake => <CakeCard key={cake.flavor} populateForm={populateForm} cakeObj={cake}/>)}
        </>
    )
}

export default CakeContainer

