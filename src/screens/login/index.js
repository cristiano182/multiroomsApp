import React, { Component } from 'react';
import { setUser } from '../../redux/actions/index'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios'
import { SERVER_URL, APP_NAME } from 'react-native-dotenv'
import { Text1, Button1, Button2, Container, ViewNickname, ViewPassword, View1, View2, View3 } from './styles'
import { TextInput, Text } from 'react-native'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            showLoading: false,
            error: '',
        }
    }
    componentWillUnmount() {
        this.setState({})
    }
    _onPress = async () => {
        this.setState({ showLoading: true })
        const { name, password } = this.state
        this.setState({ error: '' })
        const user = { name, password }

        if (name && password) {
            const res = await axios.post(`${SERVER_URL}/login`, user)
            if (res.status === 201) {
                await this.props.dispatch(setUser(res.data))
                this.props.navigation.navigate('App')
            }
            else {
                this.setState({ error: res.data })
                this.setState({ showLoading: false })
            }
        }
        else {
            this.setState({ error: 'Preencha todos os campos' })
            this.setState({ showLoading: false })
        }
    }
    render() {
        return (
            <Container>
                <View1><Text1>{APP_NAME}</Text1></View1>

                <View2>
                    <Spinner visible={this.state.showLoading} textContent={'Loading...'} textStyle={{ color: 'white' }} />
                    <Text style={{color: 'white'}}> {this.state.error && this.state.error} </Text>

                    <ViewNickname>

                        <Text style={{ color: '#ddd', marginBottom: 5 }} >Nickname</Text>
                        <TextInput

                            onChangeText={text => this.setState({ name: text })}
                            editable={!this.state.showLoading}
                            placeholderTextColor='white'
                            value={this.state.name}
                            selectionColor='white'
                            style={{ height: 40, width: '100%', borderColor: 'white'  ,borderWidth: 0.3,borderRadius: 20, textAlign: 'center' }}
                            placeholder="  ..."
                        />
                    </ViewNickname>

                    <ViewPassword>
                        <Text style={{ color: '#ddd', marginBottom: 5 }} >Password</Text>
                        <TextInput
                            secureTextEntry
                            onChangeText={text => this.setState({ password: text })}
                            value={this.state.password}
                            editable={!this.state.showLoading}
                            placeholderTextColor='white'
                            style={{ height: 40,  width: '100%',  borderColor: 'white'  ,borderWidth: 0.3,borderRadius: 20, textAlign: 'center' }}
                            placeholder="  ..."
                        />
                    </ViewPassword>


                    <View3>

                        <Button1 disabled={this.state.showLoading} onPress={() => this._onPress()}  ><Text style={{ color: 'white' }} >Entrar</Text></Button1>
                        <Button2 disabled={this.state.showLoading} onPress={() => this.props.navigation.navigate('Registrar')} ><Text style={{ color: 'white' }} >Registar-se</Text></Button2>
                    </View3>
                </View2>

            </Container>
        )
    }
}
const mapStateToProps = store => ({})
export default connect(mapStateToProps)(Login);