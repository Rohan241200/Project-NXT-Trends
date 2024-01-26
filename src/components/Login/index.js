import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  BgContainer,
  BgCard,
  FormLabel,
  FormInput,
  LoginButton,
} from './styledComponent'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPass: false,
    errorMsg: '',
    showError: false,
  }

  getLogin = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  getLoginFailure = message => {
    this.setState({errorMsg: message, showError: true})
  }

  getLoginData = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    if (response.ok === true) {
      this.getLogin(data.jwt_token)
    } else {
      this.getLoginFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPass = () => {
    this.setState(prvState => ({showPass: !prvState.showPass}))
  }

  render() {
    const {username, password, showPass, errorMsg, showError} = this.state
    const showPassword = showPass ? 'text' : 'password'

    const jwttoken = Cookies.get('jwt_token')
    if (jwttoken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme, changeTheme} = value

          const themeChange = () => {
            changeTheme()
          }

          const nxtWatchLogo = theme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <BgContainer bgColor={theme}>
              <BgCard bgColor={theme}>
                <img
                  src={nxtWatchLogo}
                  alt="website logo"
                  onClick={themeChange}
                  className="nxt-watch-logo"
                />
                <form onSubmit={this.getLoginData} className="form-container">
                  <div className="user-input-card">
                    <FormLabel htmlFor="username" desc={theme}>
                      USERNAME
                    </FormLabel>
                    <FormInput
                      type="text"
                      value={username}
                      id="username"
                      onChange={this.onChangeUserName}
                      bgInput={theme}
                    />
                  </div>
                  <div className="user-input-card">
                    <FormLabel htmlFor="password" desc={theme}>
                      Password
                    </FormLabel>
                    <FormInput
                      type={showPassword}
                      value={password}
                      id="password"
                      onChange={this.onChangePassword}
                      bgInput={theme}
                    />
                  </div>
                  <div className="checkbox-card">
                    <input
                      type="checkbox"
                      checked={showPass}
                      id="showPass"
                      onChange={this.onChangeShowPass}
                    />
                    <FormLabel htmlFor="showPass" desc={theme}>
                      Show Password
                    </FormLabel>
                  </div>
                  <LoginButton type="submit">Login</LoginButton>
                  {showError ? (
                    <p className="error-message">*{errorMsg}</p>
                  ) : null}
                </form>
              </BgCard>
            </BgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
