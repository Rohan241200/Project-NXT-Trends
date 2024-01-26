import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideos from '../TrendingVideos'
import {
  Container,
  TrendingHead,
  TrendnigLogo,
  TrendingMainHeading,
  TrendingCard,
  TrendingItems,
  OnFailureCard,
  OnFailureHeading,
  OnFailureImage,
  OnFailureDesc,
  OnFailureButton,
} from './styledComponent'

const apiStatusContext = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {trending: [], apiStatus: apiStatusContext.initial}

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({apiStatus: apiStatusContext.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const url = `https://apis.ccbp.in/videos/trending`

    const response = await fetch(url, option)
    if (response.ok === true) {
      const data = await response.json()
      const updateData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))
      this.setState({
        trending: updateData,
        apiStatus: apiStatusContext.success,
      })
    } else {
      this.setState({apiStatus: apiStatusContext.failure})
    }
  }

  onSuccess = () => {
    const {trending} = this.state

    return (
      <TrendingItems>
        {trending.map(each => (
          <TrendingVideos trendingDetails={each} key={each.id} />
        ))}
      </TrendingItems>
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
        <OnFailureButton type="button" onClick={() => this.getTrendingData()}>
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
              <Container bgColor={theme} data-testid="trending">
                <SideBar />
                <TrendingCard>
                  <TrendingHead bgHead={theme}>
                    <TrendnigLogo logo={theme}>
                      <FaFire />
                    </TrendnigLogo>
                    <TrendingMainHeading mainHeading={theme}>
                      Trending
                    </TrendingMainHeading>
                  </TrendingHead>

                  {this.onGetData()}
                </TrendingCard>
              </Container>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
