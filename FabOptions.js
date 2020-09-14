import React from 'react'
import { Icon, Fab, Button } from 'native-base'
import { Alert, BackHandler } from 'react-native'
import Contacts from 'react-native-contacts'

class FabOptions extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
        this.addContact = this.addContact.bind(this)
        this.considerExiting = this.considerExiting.bind(this)
    }

    addContact() {
        const parts = this.props.name.split(" ")
        let newPerson = {
            familyName: parts[0],
            givenName: parts[1]
        }
        console.log(newPerson)
        Contacts.openContactForm(newPerson, (err) => {
            if (err) throw err
        })
    }

    considerExiting() {
        Alert.alert(
            "Do you wish to exit this game?",
            null,
            [
                {
                    text: "Yes",
                    onPress: () => BackHandler.exitApp()
                },
                {
                    text: "No",
                    onPress: () => console.log('Alert Cancelled.'),
                    style: 'cancel'
                }
            ],
            {
                cancelable: false
            }
        )
    }

    render() {
        return (
            <Fab
                active={this.state.active}
                direction='up'
                style={{backgroundColor: '#5067FF'}}
                position='bottomRight'
                onPress={() => this.setState({active: !this.state.active})}
            >
                <Icon name='options'/>
                <Button
                    style={{ backgroundColor: '#DD5144' }}
                    onPress={this.considerExiting}
                >
                    <Icon name='ios-exit'/>
                </Button>
                <Button 
                    style={{ backgroundColor: '#34A34F' }}
                    onPress={this.addContact}
                >
                    <Icon name='contacts'/>
                </Button>
            </Fab>
        )
    }
}

export { FabOptions }