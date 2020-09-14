import React from 'react';
import { Text, Badge, Toast } from 'native-base'
import { styles } from './Styles'


class CountdownTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            remainingSeconds: this.props.totalSeconds
        }
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState((state) => ({ remainingSeconds: this.state.remainingSeconds - 1})), 
            1000
        )
    }

    componentDidUpdate(prevProps) {
        if (this.props.state !== prevProps.state || this.state.remainingSeconds === 0) {
            if (this.state.remainingSeconds === 0) {
                Toast.show({
                    text: 'Time\'s up!',
                    textStyle: {textAlign: 'center'},
                    position: 'top'
                })
            }
            clearInterval(this.interval)
            this.setState((state) => ({ remainingSeconds: this.props.totalSeconds}))
            this.props.getNextRound()
            this.componentDidMount()
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <Badge style={styles.timer}>
                <Text>Remaining Time: {this.state.remainingSeconds}</Text>
            </Badge>
        )
    }
}

export { CountdownTimer }