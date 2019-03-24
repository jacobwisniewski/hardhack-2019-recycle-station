import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Money from '@material-ui/icons/Money';
import Map from '@material-ui/icons/Map';
import Star from '@material-ui/icons/Star';
import Person from '@material-ui/icons/Person';



class BottomBar extends Component {
    state = {
        value: '',
    };

    componentDidMount() {
        this.setState({
            value: window.location.href.split("/")[3]
        })
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const styles = {
            root: {
                width: '100vw',
                maxWidth: '500px',
                margin: '0 auto',
                position: 'fixed',
                bottom: '0'
            }
        };
        const { value } = this.state
        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                style={styles.root}
            >
                <BottomNavigationAction component={Link} to='/balance' label="Balance" value='balance' icon={<Money />} />
                <BottomNavigationAction component={Link} to='/nearby' label="Nearby" value='nearby' icon={<Map />} />
                <BottomNavigationAction component={Link} to='/challenges' label="Challenges" value='challenges' icon={<Star />} />
                <BottomNavigationAction component={Link} to='/profile' label="Profile" value='profile' icon={<Person />} />
            </BottomNavigation >
        )
    }
}

export default BottomBar