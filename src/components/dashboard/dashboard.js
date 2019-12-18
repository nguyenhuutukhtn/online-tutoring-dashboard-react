import React from "react";
import { connect } from "react-redux";
import userActions from "../../actions/user.action";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.logout();

    this.state = {
      username: "",
      password: "",
      submitted: false,
      loading: true
    };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <div>hahahahahah</div>
      </>
    );
  }
}

function mapState(state) {
  const { loggingIn } = state.login;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login
  // logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(Dashboard);

export default connectedLoginPage;
