import React, { Component } from 'react'
import Chat from '../chatComponent/index'
import { sendData, paginationData } from '../../redux/actions/index'
import { connect } from 'react-redux'

class Page extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let i = this.props.navigation.state.params
    return (
      <Chat room={`room${i}`} sendData={sendData} dispatch={this.props.dispatch} skip={this.props.skip[`room${i}`] ? this.props.skip[`room${i}`] : 20} paginationData={paginationData} user={this.props.user} messages={this.props.messages[`room${i}`]} />
    )
  }
}
const mapStateToProps = store => ({ messages: store.messages, user: store.user, skip: store.skip })
export default connect(mapStateToProps)(Page);

