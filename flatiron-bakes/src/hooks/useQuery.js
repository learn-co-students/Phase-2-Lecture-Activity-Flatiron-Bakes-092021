import {useState, useEffect} from "react"

function useQuery(url){
    const [content, setContent ] = useState([])
    const [isLoaded, setIsLoaded] = useState(null)

    useEffect(()=>{
        setIsLoaded(false)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setContent(data)
            setIsLoaded(true)
        })
    },[])
    
    return [content, isLoaded]
}

export default useQuery