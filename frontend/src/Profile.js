import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper'
import Headshot from './resources/MichelleHuang.jpg'
import CircularProgress from '@material-ui/core/CircularProgress'
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Whatshot from '@material-ui/icons/Whatshot'
import Timeline from '@material-ui/icons/Timeline'
import DirectionsWalk from '@material-ui/icons/DirectionsWalk'
import LooksOne from '@material-ui/icons/LooksOne'
import Loop from '@material-ui/icons/Loop'
import Mail from '@material-ui/icons/Mail'
import VideogameAsset from '@material-ui/icons/VideogameAsset'
import Description from '@material-ui/icons/Description'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Line } from 'react-chartjs-2'
import { MDBContainer } from 'mdbreact'


class ProfileDisplay extends Component {
    render() {
        const styles = {
            balanceDisplay: {
                margin: '10px',
                padding: '10px',
                height: '45vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            },
            avatar: {
                width: '200px',
                height: '200px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            },
            progressionContainer: {
                position: 'relative',
                marginBottom: '10px'

            },
        }

        return (
            <Paper style={styles.balanceDisplay} elevation={1}>
                <div style={styles.progressionContainer}>
                    <Avatar style={styles.avatar} alt='Headshot' src={Headshot} />
                    <CircularProgress size={225} thickness={3} variant='static' value={70} />
                </div>
                <Typography align='center' variant="h4" component="h3">
                    Michelle Huang
                </Typography>
                <Typography align='center' variant="h5" component="h3">
                    Lvl. 65
                </Typography>
            </Paper>
        )
    }
}

class Achievement extends Component {
    state = {
        open: false
    }

    onClick() {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        const { title, description, icon } = this.props
        return (
            <div>
                <ListItem button onClick={this.onClick.bind(this)}>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText inset primary={title} />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button >
                            <ListItemIcon>
                                <Description style={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText inset secondary={description} />
                        </ListItem>
                    </List>
                </Collapse>
            </div>
        )
    }
}

class AchievementDisplay extends Component {
    render() {
        const styles = {
            balanceDisplay: {
                margin: '10px',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            achievementTitle: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            },
            list: {
                width: '100%',
            }
        }
        const achievement_list = [
            {
                title: 'First Step',
                description: 'Recycle your first item at one of our stations',
                icon: <LooksOne />
            },
            {
                title: 'Baby Steps',
                description: 'Reach level 5',
                icon: <DirectionsWalk />
            },
            {
                title: 'Consistent cycle',
                description: 'Complete weekly challenges once.',
                icon: <Loop />
            },
            {
                title: 'Verified',
                description: 'Verify your email',
                icon: <Mail />
            },
            {
                title: 'Getting There',
                description: 'Reach level 10',
                icon: <VideogameAsset />
            }
        ]
        return (
            <Paper style={styles.balanceDisplay} elevation={1}>
                <div style={styles.achievementTitle}>
                    <Whatshot />
                    <Typography align='center' variant="h5" component="h3">
                        Achievements
                    </Typography>
                </div>
                <List style={styles.list}>

                    {achievement_list.map(achievement =>
                        <Achievement key={achievement.title} {...achievement} />)}
                </List>

            </Paper>
        )
    }
}

class LineChart extends Component {
    render() {
        const dataLine = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Number of recyclables",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "#3f51b5",
                    borderColor: "#3f51b5",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "#3f51b5",
                    pointBackgroundColor: "#3f51b5",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#3f51b5",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 50]
                }
            ]
        }
        return (
            <MDBContainer>
                <Line height={200} data={dataLine} options={{ responsive: true }} />
            </MDBContainer>
        )
    }
}

class StatisticDisplay extends Component {
    render() {
        const styles = {
            balanceDisplay: {
                margin: '10px',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'
            },
            achievementTitle: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            },
            statisticContainer: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
            },
            graph: {
                margin: '10px',
            },
            graphContainer: {
                position: 'relative'
            },
            value: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '25px',
            }
        }

        return (
            <Paper style={styles.balanceDisplay} elevation={1}>
                <div style={styles.achievementTitle}>
                    <Timeline />
                    <Typography align='center' variant="h5" component="h3">
                        Statistics
                    </Typography>
                </div>
                <div style={styles.statisticContainer}>
                    <div style={styles.graph}>
                        <div style={styles.graphContainer}>
                            <CircularProgress size={100} thickness={7} variant='static' value={25} />
                            <div style={styles.value}>25%</div>
                        </div>
                        <Typography align='center' variant="h6" component="h3">
                            Glass
                    </Typography>
                    </div>
                    <div style={styles.graph}>
                        <div style={styles.graphContainer}>
                            <CircularProgress size={100} thickness={7} variant='static' value={45} />
                            <div style={styles.value}>45%</div>
                        </div>
                        <Typography align='center' variant="h6" component="h3">
                            Metal
                    </Typography>

                    </div>
                    <div style={styles.graph}>
                        <div style={styles.graphContainer}>
                            <CircularProgress size={100} thickness={7} variant='static' value={30} />
                            <div style={styles.value}>30%</div>
                        </div>
                        <Typography align='center' variant="h6" component="h3">
                            Plastic
                    </Typography>
                    </div>
                    <LineChart />
                </div>

            </Paper>
        )
    }
}

class Profile extends Component {
    render() {
        return (
            <div style={{
                overflow: 'auto',
                height: '100%',
                weight: '100vw',
            }}>
                <ProfileDisplay />
                <AchievementDisplay />
                <StatisticDisplay />
            </div>
        )
    }
}

export default Profile