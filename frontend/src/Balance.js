import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Fastfood from '@material-ui/icons/Fastfood';
import Sync from '@material-ui/icons/Sync';
import LocalParking from '@material-ui/icons/LocalParking';


class BalanceDisplay extends Component {
    render() {
        const styles = {
            balanceDisplay: {
                margin: '10px',
                padding: '10px',
                height: '30vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            },
            costText: {
                paddingTop: '10px'
            }
        }
        return (
            <Paper style={styles.balanceDisplay} elevation={1}>
                <Typography align='center' variant="h3" component="h3">
                    Balance
            </Typography>
                <Typography style={styles.costText} align='center' variant="h4" component="h3">
                    $12.58
            </Typography>
            </Paper>)
    }
}

class Transaction extends Component {
    render() {
        const { icon, title, detail, cost } = this.props
        const styles = {
            transaction: {
                flex: 'display',
                alignItems: 'center',
            },
            inline: {
                display: 'inline',
            },
            cost: {
                position: 'absolute',
                right: 0
            }
        }
        return (
            <ListItem style={styles.transaction} alignItems="flex-start">
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText
                    primary={title}
                    secondary={
                        <React.Fragment>
                            <Typography component="span" className={styles.inline} color="textPrimary">
                                {detail}
                            </Typography>
                        </React.Fragment>
                    }
                />
                <ListItemText
                    style={styles.cost}
                    primary={cost}
                />
            </ListItem>
        )
    }
}

class TransactionList extends Component {
    render() {
        const styles = {
            root: {
                width: '100%',
            },
            inline: {
                display: 'inline',
            },
        }
        const transaction_list = [
            {
                icon: <Fastfood fontSize="large" />,
                title: 'McDonalds, Mount Waverley',
                detail: 'Large Big Mac Meal',
                cost: '-$12.40'
            },
            {
                icon: <Sync fontSize="large" />,
                title: 'Coles, Pinewood',
                detail: '3 cans, 2 bottles, 1 plastic bottle',
                cost: '+$0.60'
            },
            {
                icon: <LocalParking fontSize="large" />,
                title: 'City Parking',
                detail: 'Full day',
                cost: '-$10.50'
            },
            {
                icon: <Sync fontSize="large" />,
                title: 'Woolworths, Mount Waverley',
                detail: '10 cans, 3 bottles, 6 plastic bottle',
                cost: '+$2.45'
            },
            {
                icon: <Sync fontSize="large" />,
                title: 'Monash University',
                detail: '15 cans, 3 bottles, 12 plastic bottle',
                cost: '+$3.55'
            },
        ]
        return (
            
            <List className={styles.root}>
                {transaction_list.map(transaction =>
                    <Transaction key={transaction.detail} {...transaction} />
                )}
            </List>
        )
    }
}

class Balance extends Component {
    render() {

        return (
            <div>
                <BalanceDisplay />
                <TransactionList />
            </div>
        )
    }
}

export default Balance