import CakeCard from "./CakeCard";

function CakeContainer(props){
    return(
        <>
        {props.cakeList.map(cake => <CakeCard cakeObj={cake}/>)}
        </>
    )
}

export default CakeContainer

