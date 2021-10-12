import React, { Component } from 'react'
import defaultBcg  from '../images/room-12.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext

    componentDidMount(){

    }
    render() {
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)
        if(!room) {
            return <div className="error">
                <h3>No Such room could be found</h3>
                <Link to="/rooms" className="btn-primary">
                    Back To Rooms
                </Link>
            </div>
        } 

        const {name,description,capacity,price,extras,breakfast,pets, images} = room
        return (
            <>
             <StyledHero img={images[0] || this.state.defaultBcg}>
                <Banner title={`${name} rooom`}>
                    <Link to='/rooms' className="btn-primary">
                    Back To Rooms
                    </Link>
                </Banner>
            </StyledHero>
            </>
           
        )
    }
}
