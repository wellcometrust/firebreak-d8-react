import Layout from '../components/Layout';
const ClientOAuth2 = require('client-oauth2');

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: ''};
    this.state = {password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const username = this.state.email;
    const password = this.state.password;
    const trustnetAuth = new ClientOAuth2({
      clientId: 'dfc116d0-da25-4708-afbf-8dc2f09a43bf',
      clientSecret: 'pass123',
      accessTokenUri: 'http://cbc139ec.ngrok.io/oauth/token',
      authorizationUri: 'http://cbc139ec.ngrok.io/oauth/authorize',
      redirectUri: 'http://localhost:3000/auth/tn/callback',
    });

    trustnetAuth.owner.getToken(username, password)
      .then(function (user) {
        // Can also just pass the raw `data` object in place of an argument.
        var token = trustnetAuth.createToken(user.accessToken, user.refreshToken, user.tokenType);

        // Set the token TTL.
        token.expiresIn(300); // Seconds.
        document.cookie='access_token=' + user.accessToken;
        document.cookie='refresh_token=' + user.refreshToken;
        // document.cookie='expires_token=' + Date.now + 300000;

      });

    event.preventDefault();
  }

  render() {
    return (
      <Layout>
        <h1>Sign in</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                name="email"
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-text-centered">
              <button type="submit" className="button is-success">
                Sign In
              </button>
            </p>
          </div>
        </form>
        <style jsx>{`
        h1 {
         grid-area: main;
        }
    `}</style>
      </Layout>
    );
  }
}


export default Signin;