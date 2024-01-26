import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoPlayer from './components/VideoPlayer'
import SavedVideo from './components/SavedVideo'

import './App.css'

// Replace your code here
class App extends Component {
  state = {theme: false, saveList: []}

  changeTheme = () => {
    this.setState(prevState => ({theme: !prevState.theme}))
  }

  saveVideoList = videos => {
    const {saveList} = this.state
    const findVideo = saveList.find(each => each.id === videos.id)

    if (findVideo) {
      const filter = saveList.filter(each => each.id !== videos.id)
      this.setState({saveList: filter})
    } else {
      this.setState(prevState => ({saveList: [...prevState.saveList, videos]}))
    }
  }

  render() {
    const {theme, saveList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          theme,
          saveList,
          changeTheme: this.changeTheme,
          saveVideoList: this.saveVideoList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoPlayer} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideo} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
