import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Headshot1 from './resources/Headshot1.jpg'
import Headshot2 from './resources/Headshot2.jpg'
import Headshot3 from './resources/Headshot3.jpg'

class User extends Component {
    render() {
        const { name, level, recyclables, image } = this.props
        const classes = {
            root: {
                width: '100%',
                maxWidth: 360,
            },
            avatar: {
                width: 60,
                height: 60
            },
            inline: {
                display: 'inline',
            },
        }
        return (
            <div>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar style={classes.avatar} alt="Headshot" src={image} />
                    </ListItemAvatar>   
                    <ListItemText
                        primary={name}
                        secondary={
                            <React.Fragment>
                                <Typography component="span" className={classes.inline} color="textPrimary">
                                    {`Lvl ${level}`}
                                </Typography>
                                {`${recyclables} recyclables`}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </div>
        )
    }
}

class Leaderboard extends Component {
    render() {
        const classes = {
            root: {
                width: '100%',
                maxWidth: 360,
            },
            inline: {
                display: 'inline',
            },
        }
        const users = [
            {
                name: 'Jord Gui',
                level: '100',
                recyclables: '12102',
                image: Headshot1
            },
            {
                name: 'Timothy Ng',
                level: '94',
                recyclables: '11023',
                image: Headshot2
            },
            {
                name: 'Clarissa Abraham',
                level: '90',
                recyclables: '9210',
                image: Headshot3
            },
        ]
        return (
            <List className={classes.root}>
                {users.map(user =>
                    <User {...user} />
                )}
            </List>
        )
    }
}

export default Leaderboard