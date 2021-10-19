import {useState} from 'react'

function Form({handleChange, handleForm, formData}){
  

    return(
        <>
            <form onSubmit={handleForm} style={{display:"flex", flexDirection:"column"}}>
                <label>Flavor</label>
                <input
                    type="text"
                    name="flavor"
                    aria-label="title"
                    value={formData.flavor}
                    onChange={handleChange}
                >
                </input>
                <label>Image</label>
                <input
                    type="text"
                    name="image"
                    aria-label="image"
                    value={formData.image}
                    onChange={handleChange}
                >
                </input>
                <label>Size</label>
                <input
                    type="text"
                    name="size"
                    aria-label="size"
                    value={formData.size}
                    onChange={handleChange}
                >
                </input>
                <label>Price</label>
                <input
                    type="number"
                    name="price"
                    aria-label="price"
                    value={formData.price}
                    onChange={handleChange}
                >
                </input>
                <input type="submit"></input>
            </form>
        </>
    )
}

export default Form