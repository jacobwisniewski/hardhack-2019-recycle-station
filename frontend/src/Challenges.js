import React, { Component } from 'react'
import ListItem from '@material-ui/core/ListItem';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'



class ChallengeDisplay extends Component {
    render() {
        const styles = {
            balanceDisplay: {
                margin: '10px',
                padding: '10px',
                height: '20vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            },
            costText: {
                paddingTop: '10px'
            },
            progressionContainer: {
                position: 'relative',
                marginTop: '10px'

            },
            progressText: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '25px',

            }
        }
        const { progression } = this.props
        return (
            <Paper style={styles.balanceDisplay} elevation={1}>
                <Typography align='center' variant="h4" component="h3">
                    Weekly Challenges
                </Typography>
                <div style={styles.progressionContainer}>
                    <CircularProgress size={80} thickness={4.5} variant='static' value={progression} />
                    <div style={styles.progressText}>{progression.toFixed(0)}%</div>
                </div>
            </Paper>
        )
    }
}


class Challenge extends Component {
    render() {
        const { title, current, final } = this.props
        const progression = (current / final) * 100
        const styles = {
            container: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
            },
            bar: {
                width: '100%'
            },
            cost: {
                position: 'absolute',
                right: 0
            },
            titleContainer: {
                display: 'flex',
                flexDirection: 'row'
            }
        }
        return (
            <ListItem style={styles.container}>
                <div style={styles.titleContainer}>
                    <ListItemText primary={title}></ListItemText>
                    <ListItemText
                        style={styles.cost}
                        primary={`${current}/${final}`}
                    />
                </div>
                <LinearProgress style={styles.bar} variant='determinate' value={progression} />
            </ListItem>
        )
    }
}

class Challenges extends Component {
    render() {
        const styles = {
            root: {
                width: '100vw',
                maxWidth: '500px',
            },
        }
        const challenge_list = [
            {
                title: 'Recycle Once',
                current: 1,
                final: 1
            },
            {
                title: 'Recycle at your nearest cycle station 5 times',
                current: 2,
                final: 5
            },
            {
                title: 'Recycle 3 different types of materials',
                current: 2,
                final: 3
            },
            {
                title: 'Use 3 different cycle stations',
                current: 2,
                final: 3
            },
        ]
        var current_total = 0
        var final_total = 0
        for (const challenge of challenge_list) {
            current_total += challenge.current
            final_total += challenge.final
        }
        var overall_progression = (current_total / final_total) * 100
        return (
            <div>
                <ChallengeDisplay progression={overall_progression} />
                <List style={styles.root}>
                    {challenge_list.map(challenge =>
                        <Challenge key={challenge.title} {...challenge} />)}
                </List>
            </div>
        )
    }
}

export default Challenges