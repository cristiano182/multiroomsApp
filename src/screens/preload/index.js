import React, { Component } from 'react';
import { connect } from 'react-redux'
import { APP_NAME } from 'react-native-dotenv'
import { Container, Title } from './styles'

class Preload extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
    if (!this.props.token) {
        setTimeout(() => this.props.navigation.navigate('Login'), 2000)
    } else {
        this.props.navigation.navigate('App')
    }
}
    render() {
        return (
            <Container>
                <Title> {APP_NAME} </Title>
            </Container>
        )
    }
}
const mapStateToProps = store => ({ token: store.token })
export default connect(mapStateToProps)(Preload);