import React from 'react';
import { View, ImageBackground, Dimensions } from 'react-native'
import { Container, Button, Text, Content, Toast, Badge, Root} from 'native-base'
import { nameToPic } from './Constants'
import { styles } from './Styles'
import { CountdownTimer } from './Countdown'
import { FabOptions } from './FabOptions'

const names = Object.keys(nameToPic)

function shuffle(array) {
    let currentIndex = array.length
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1;
        // And swap it with the current element.
        let temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }
    return array;
}

class GameScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            correct: '',
            correctName: '', 
            correctPicPath: '',
            nameOptions: [],
            timerTotalSeconds: 0,
            resetTimer: true
        }

        this.getNextRound = this.getNextRound.bind(this)
        this.checkAnswer = this.checkAnswer.bind(this)
    }
    
    componentDidMount() {
        this.getNextRound()
    }

    getNextRound() {
        // Fetches the next member name to guess.
        let correct = names[Math.floor(Math.random() * names.length)]
        let correctName = nameToPic[correct][0]
        let correctPicPath = nameToPic[correct][1]
        this.setState((state) => {return {correct: correct}})
        this.setState((state) => {return {correctName: correctName}})
        this.setState((state) => {return {correctPicPath: correctPicPath}})
        // Generates 3 more wrong answers.
        let nameOptions = [correctName]
        while (nameOptions.length < 4) {
            let wrong = names[Math.floor(Math.random() * names.length)]
            let wrongName = nameToPic[wrong][0]
            if (!(nameOptions.includes(wrongName))) {
                nameOptions.push(wrongName)
            }
        }
        // Reshuffles the array.
        this.setState((state) => {return {nameOptions: shuffle(nameOptions)}})
        this.setState((state) => {return {timerTotalSeconds: 5}})
    }

    checkAnswer(currName) {
        if (currName === this.state.correctName) {
            Toast.show({
                text: 'Correct Answer!',
                textStyle: {textAlign: 'center'},
                position: 'top'
            })
            this.setState((state) => {return {score: this.state.score + 1}})
        } else {
            Toast.show({
                text: 'Wrong Answer...',
                textStyle: {textAlign: 'center'},
                position: 'top'
            })
        }
        this.getNextRound()
        this.setState((state) => {return {resetTimer: !this.state.resetTimer}})
    }

    render() {
        const windowHeight = Dimensions.get('window').height;
        return (
            <Container>
                <Content>
                    <Root>
                    <View 
                        style={{
                            width: '100%', 
                            height: 0.6 * windowHeight, 
                            alignItems: 'center', 
                            justifyContent: 'center'
                        }}
                    >
                        <ImageBackground source={this.state.correctPicPath} style={styles.image}>
                            <Badge info style={styles.scoreBadge}>
                                <Text>Current Score: {this.state.score}</Text> 
                            </Badge>
                            <CountdownTimer 
                                state={this.state.resetTimer}
                                totalSeconds={this.state.timerTotalSeconds}
                                getNextRound={this.getNextRound} />
                        </ImageBackground>
                    </View>
                    </Root>
                    {this.state.nameOptions.map(name => {
                        return (
                            <Button full key={name}
                                onPress={() => this.checkAnswer(name)}
                                style={{height: 0.06 * windowHeight, marginBottom: 2}}
                            >
                                <Text>{name}</Text>
                            </Button>
                        )
                    })}
                    <FabOptions name={this.state.correctName} />
                </Content>
            </Container>
        )
    }
}

export { GameScreen }