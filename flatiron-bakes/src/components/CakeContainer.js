import CakeCard from "./CakeCard";

function CakeContainer(props){
    return(
        <>
        {props.cakeList.map(cake => <CakeCard key={cake.flavor} cakeObj={cake}/>)}
        </>
    )
}

export default CakeContainer

