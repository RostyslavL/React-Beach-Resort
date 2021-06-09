import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <Hero>
            <Banner 
                title="luxurious rooms" 
                subtitle="delux room starting at $199">
                <Link to="/rooms" className="btn-primary">Our Rooms</Link>
            </Banner>
        </Hero>
    )
}

export default Home
