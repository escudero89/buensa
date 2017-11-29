const React = require('react');
const firebase = require('firebase');
const firebaseui = require('firebaseui');

const config = require('../../config');

const app = firebase.initializeApp(config);
const authUi = new firebaseui.auth.AuthUI(firebase.auth());

class Firebase extends React.Component {
  componentDidMount() {
    var uiConfig = {
      'callbacks': {
        'signInSuccess': function(user) {
          if (this.props.onSignIn) {
            this.props.onSignIn(user);
          }
          return false;
        }.bind(this)
      },
      'signInOptions': [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    authUi.start('#firebaseui-auth', uiConfig);
  }

  componentWillUnmount() {
    authUi.reset();
  }

  render() {
    return <div id="firebaseui-auth"></div>;
  }
};

module.exports = Firebase;