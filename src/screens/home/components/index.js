import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, View, Button, Right, Left } from './styles'
import { connect } from 'react-redux'

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    _onPress() {
        this.props.rota.navigation.navigate(this.props.page, this.props.room)
    }
    render() {
        return (
            <Container>
                <Button underlayColor='green' onPress={() => this._onPress()}>
                    <View>
                        <Left>
                            <Text style={{ color: 'white' }}>  Room {this.props.room}</Text>
                        </Left>
                        <Right>
                            <Text style={{ color: 'white', fontSize: 13 }}>
                                {this.props.numberMessages[`room${this.props.room}`] ? this.props.numberMessages[`room${this.props.room}`] : 0} Mensagem(s)
                            </Text>
                        </Right>
                    </View>
                </Button>
            </Container>
        )
    }
}

const mapStateToProps = state => ({ numberMessages: state.numberMessages })
export default connect(mapStateToProps)(Room);