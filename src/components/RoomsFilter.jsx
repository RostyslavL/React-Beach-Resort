import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

const getAllUniqueValues = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {

    const context = useContext(RoomContext)
    
    const {
        handleChange,
        capacity,
        price,
        minPrice,
        maxPrice,
        type,
        minSize,
        maxSize,
        breackfast,
        pets
    } = context

    // get Unique Types
    let types = getAllUniqueValues(rooms, 'type')
    // get All Types
    types = ['all',...types]
    // map to JSX
    types = types.map((item,index) => {
        return <option vlue={item} key={index}>
            {item}
        </option>
    })
    let people = getAllUniqueValues(rooms, 'capacity')

    people = people.map((item,index) => {
        return <option vlue={item} key={index}>
            {item}
        </option>
    })
    return (
        <section className='filter-container'>
            <Title title='search rooms'/>
                <form className='filter-form'>
                    {/* select type : */}
                    <div className="form-group">
                        <label htmlFor="type">Room Type</label>
                        <select 
                            name="type" 
                            id="type" 
                            value={type} 
                            className='form-control' 
                            onChange={handleChange}>
                                {types}
                        </select>
                    </div>
                    {/* end of select type  */}
                    <div className="form-group">
                        <label htmlFor="capacity">Guests</label>
                        <select 
                            name="capacity" 
                            id="capacity" 
                            value={capacity} 
                            className='form-control' 
                            onChange={handleChange}>
                                {people}
                        </select>
                    </div>
                    {/* end of guests  */}
                    {/* room price  */}
                    <div className="form-group">
                        <label htmlFor="price">Room Price ${price}</label>
                        <input 
                            type="range" 
                            name="price" 
                            min={minPrice} 
                            max={maxPrice} 
                            id="price" 
                            value={price} 
                            onChange={handleChange} 
                            className='form-control' 
                        />
                    </div>
                    {/* end of room price */}

                </form>
        </section>
    )
}
