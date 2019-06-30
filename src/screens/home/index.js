import React, { Component } from 'react';
import { Text,FlatList } from 'react-native';
import Room from './components/index'
import { connect } from 'react-redux'
import { getData, resetSkip, getCurrentPosition, listeningUsersConnected, listeningNumberMessages } from '../../redux/actions/index'
import { NUMBER_OF_ROOMS } from 'react-native-dotenv'
import { Container, Button1, ButtonMap } from './styles'

console.ignoredYellowBox = ["Remote debugger"]
import { YellowBox } from "react-native"
YellowBox.ignoreWarnings([
  "Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?"
])

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    }
    this.props.dispatch(resetSkip())
  }
  componentWillMount = () => {
    this.props.dispatch(getData())
    this.props.dispatch(getCurrentPosition())
    this.props.dispatch(listeningUsersConnected())
    this.props.dispatch(listeningNumberMessages())
    this.props.navigation.setParams({ usersOnline: this.props.markers.length })
    this.getRooms()
  }
  getRooms = () => {
    let aux = []
    for (i = 1; i < parseInt(NUMBER_OF_ROOMS) + 1; i++) {
      aux.push(<Room key={i} rota={this.props} page='Page' room={i} />)
    }
    this.setState({ rooms: aux })
  }

  render() {
    return (
      <Container>
        <FlatList
          style={{ marginVertical: 20 }}
          data={this.state.rooms}
          renderItem={({ item }) => item}
        />
        <ButtonMap>
          <Button1 onPress={() => this.props.navigation.navigate('Mapa')}>
            <Text style={{ color: 'white' }}>Amigos Proximos</Text>
          </Button1>
        </ButtonMap>
      </Container>
    )
  }
}
const mapStateToProps = state => ({ markers: state.markers })
export default connect(mapStateToProps)(Home);
