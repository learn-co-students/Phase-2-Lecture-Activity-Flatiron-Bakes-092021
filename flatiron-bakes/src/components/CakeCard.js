function CakeCard({cakeObj:{flavor,size = '6" cake',price}}){
    return(
        <>
            <h1>Flavor: {flavor}</h1>
            <p>Size:{size}</p>
            <p>Price: {price}</p>
        </>
    )
}
export default CakeCard

