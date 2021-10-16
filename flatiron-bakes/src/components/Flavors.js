function Flavors({flavorsData, handleFilter}){
    return(
        <div style={{display:"flex"}}>
        {flavorsData.map(flavor => <div onClick={() => handleFilter(flavor)} key={flavor}>{flavor}</div>)}
        </div>
    )
}
export default Flavors