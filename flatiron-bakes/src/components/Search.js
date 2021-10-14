function Search({search, handleSearch}){
    return(
        <input onChange={handleSearch} type="text" value={search}></input>
    )
}

export default Search

