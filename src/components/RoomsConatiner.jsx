import React from 'react'
import RoomsFilter from './RoomsFilter.jsx'
import RoomsList from './RoomsList.jsx'
import {withRoomConsumer} from '../context'
import Loading from './Loading'

function RoomContainer ({context}){
    const {loading, sortedRooms, rooms} = context 
    if(loading){
        return <Loading/>
    }
    return( 
        <div>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </div>
    )
    
}

export default withRoomConsumer(RoomContainer)


// import React from 'react'
// import RoomsFilter from './RoomsFilter.jsx'
// import RoomsList from './RoomsList.jsx'
// import {RoomConsumer} from '../context'
// import Loading from './Loading'

// export default function RoomsConatiner() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading, sortedRooms, rooms} = value
//                 if(loading){
//                     return <Loading/>
//                 }
//                     return( 
//                     <div>
//                         <RoomsFilter rooms={rooms}/>
//                         <RoomsList rooms={sortedRooms}/>
//                     </div>)
//                 }
//             }
//         </RoomConsumer>
        
//     )
// }
