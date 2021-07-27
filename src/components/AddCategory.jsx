import React, { useState } from 'react';
import PropTypes from 'prop-types'


const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 1) {
            setCategories(categs => [inputValue, ...categs]);
            setInputValue('');
        }
    }
    return (
        <>
         <h2>Buscar más Gifs</h2> 
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={inputValue}
            onChange={handleChange}
            />  
        </form>
        </>
    )
}

export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
