import React, { Component } from 'react'
import CycleStation from './resources/CycleStation.png'

class Header extends Component {

    render() {
        const classes = {
            container: {
                borderColor: 'grey',
                borderStyle: 'solid',
                borderWidth: '5px',
                borderRadius: '5px',
                padding: '20px'

            },
            image: {
                width: '80vw',
            }
        }
        return (
            <div style={classes.container}>
                <img src={CycleStation} style={classes.image} alt={'CycleStation logo'}></img>
            </div>
        )
    }
}

export default Header