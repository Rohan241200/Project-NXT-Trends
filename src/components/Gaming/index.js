import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import GamingVideos from '../GamingVideos'
import {
  Container,
  GamingCard,
  GamingItems,
  GamingHead,
  GamingMainHeading,
  GamingLogo,
  OnFailureCard,
  OnFailureImage,
  OnFailureHeading,
  OnFailureDesc,
  OnFailureButton,
} from './styledComponent'

const apiStatusContext = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {gaming: [], apiStatus: apiStatusContext.initial}

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({apiStatus: apiStatusContext.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const url = `https://apis.ccbp.in/videos/gaming`

    const response = await fetch(url, option)
    if (response.ok === true) {
      const data = await response.json()
      const updateData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      this.setState({
        gaming: updateData,
        apiStatus: apiStatusContext.success,
      })
    } else {
      this.setState({apiStatus: apiStatusContext.failure})
    }
  }

  onSuccess = () => {
    const {gaming} = this.state

    return (
      <GamingItems>
        {gaming.map(each => (
          <GamingVideos gamingDetails={each} key={each.id} />
        ))}
      </GamingItems>
    )
  }

  onFailure = theme => {
    const failureImg = theme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <OnFailureCard>
        <OnFailureImage src={failureImg} alt="failure view" />
        <OnFailureHeading heading={theme}>
          Oops! Something Went Wrong
        </OnFailureHeading>
        <OnFailureDesc desc={theme}>
          We are having some trouble to complete your request. Please try again.
        </OnFailureDesc>
        <OnFailureButton type="button" onClick={() => this.getGamingData()}>
          Retry
        </OnFailureButton>
      </OnFailureCard>
    )
  }

  onLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onGetData = theme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusContext.inProgress:
        return this.onLoading()
      case apiStatusContext.failure:
        return this.onFailure(theme)
      case apiStatusContext.success:
        return this.onSuccess(theme)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <>
              <Header />
              <Container bgColor={theme} data-testid="gaming">
                <SideBar />
                <GamingCard>
                  <GamingHead bgHead={theme}>
                    <GamingLogo logo={theme}>
                      <SiYoutubegaming />
                    </GamingLogo>
                    <GamingMainHeading mainHeading={theme}>
                      Gaming
                    </GamingMainHeading>
                  </GamingHead>

                  {this.onGetData()}
                </GamingCard>
              </Container>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
