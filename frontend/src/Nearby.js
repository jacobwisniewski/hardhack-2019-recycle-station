import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Place from '@material-ui/icons/Place';

class Pin extends Component {
    state = {
        show: false
    }

    onClick() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const styles = {
            container: {
                top: '0',
                left: '0',
                textAlign: 'justify',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            },
            description: {
                fontSize: '17px',
                color: 'red'

            }
        }
        if (this.state.show) {
            return (
                <div style={styles.container} onClick={() => this.onClick()}>
                    <Place style={{ color: 'red' }} fontSize='large' />
                    <div style={styles.description}>{this.props.multiplier}</div>
                </div>
            )
        } else {
            return (
                <div style={styles.container} onClick={() => this.onClick()}>
                    <Place style={{ color: 'red' }} fontSize='large' />
                </div>

            )
        }
    }
}

class Nearby extends Component {
    render() {
        const initialData = {
            center: {
                lat: -37.91,
                lng: 145.14
            },
            zoom: 14
        }
        const place_list = [
            {
                lat: -37.91,
                lng: 145.13,
                multiplier: 'Campus Center'
            },
            {
                lat: -37.90,
                lng: 145.12,
                multiplier: 'Bunnings'
            },
            {
                lat: -37.90,
                lng: 145.14,
                multiplier: 'Ferntree Gully Rd'
            },
            {
                lat: -37.909484,
                lng: 145.14188,
                multiplier: 'Telstra GOC'
            },
        ]
        return (
            <div style={{
                height: 'calc(100vh - 56px)', width: '100vw', maxWidth: '500px',
            }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'GOOGLE_MAPS_API_KEY' }}
                    defaultCenter={initialData.center}
                    defaultZoom={initialData.zoom}
                >
                    {place_list.map(place =>
                        <Pin {...place} />
                    )}
                </GoogleMapReact>
            </div>
        )
    }
}

export default Nearby