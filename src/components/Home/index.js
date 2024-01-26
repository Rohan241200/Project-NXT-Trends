import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoIosSearch, IoMdClose} from 'react-icons/io'
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import AllVideos from '../AllVideos'
import {
  Container,
  VideosContainer,
  SearchInputCard,
  SearchInput,
  SearchButton,
  UnorderItem,
  NoSearchCard,
  NoSearchImg,
  NoSearchHeading,
  NoSearchDesc,
  OnFailureCard,
  OnFailureHeading,
  OnFailureImage,
  OnFailureDesc,
  OnFailureButton,
  Banner,
} from './styledComponent'

const apiStatusContext = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    userInput: '',
    apiStatus: apiStatusContext.initial,
    allVideos: [],
    banner: true,
  }

  componentDidMount() {
    this.getAllVideos()
  }

  getAllVideos = async () => {
    this.setState({apiStatus: apiStatusContext.inProgress})

    const {userInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const url = `https://apis.ccbp.in/videos/all?search=${userInput}`

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
        allVideos: updateData,
        apiStatus: apiStatusContext.success,
      })
    } else {
      this.setState({apiStatus: apiStatusContext.failure})
    }
  }

  onSuccess = theme => {
    const {allVideos} = this.state
    const isEmpty = allVideos.length > 0

    return isEmpty ? (
      <UnorderItem>
        {allVideos.map(each => (
          <AllVideos videosDetails={each} key={each.id} />
        ))}
      </UnorderItem>
    ) : (
      <NoSearchCard>
        <NoSearchImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoSearchHeading heading={theme}>
          No Search results found
        </NoSearchHeading>
        <NoSearchDesc desc={theme}>
          Try different key words or remove search filter
        </NoSearchDesc>
        <OnFailureButton type="button" onClick={() => this.getAllVideos()}>
          Retry
        </OnFailureButton>
      </NoSearchCard>
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
        <OnFailureButton type="button" onClick={() => this.getAllVideos()}>
          Retry
        </OnFailureButton>
      </OnFailureCard>
    )
  }

  onLoading = theme => (
    <div className="loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color={theme ? '#ffffff' : '#000000'}
        height="50"
        width="50"
      />
    </div>
  )

  onKeyDown = event => {
    if (event.key === 'Enter') {
      this.getAllVideos()
    }
  }

  onUserSearch = event => {
    this.setState({userInput: event.target.value})
  }

  onGetData = theme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusContext.inProgress:
        return this.onLoading(theme)
      case apiStatusContext.failure:
        return this.onFailure(theme)
      case apiStatusContext.success:
        return this.onSuccess(theme)
      default:
        return null
    }
  }

  closeBanner = () => {
    this.setState({banner: false})
  }

  getBanner = () => {
    const {banner} = this.state

    return banner ? (
      <Banner data-testid="banner">
        <div className="banner-img-close">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
            className="banner-image"
          />
          <button
            type="button"
            aria-label="close-banner"
            data-testid="close"
            className="banner-close-btn"
            onClick={this.closeBanner}
          >
            <IoMdClose />
          </button>
        </div>
        <p className="banner-desc">Buy Nxt Watch Premium</p>
        <button type="button" className="banner-get-btn">
          GET IT NOW
        </button>
      </Banner>
    ) : null
  }

  render() {
    const {userInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <>
              <Header />
              <Container bgColor={theme} data-testid="home">
                <SideBar />
                <VideosContainer>
                  {this.getBanner()}
                  <SearchInputCard border={theme}>
                    <SearchInput
                      type="search"
                      onChange={this.onUserSearch}
                      value={userInput}
                      onKeyDown={this.onKeyDown}
                      input={theme}
                      placeholder="Search"
                    />
                    <SearchButton
                      type="button"
                      data-testid="searchButton"
                      aria-label="search button"
                      onClick={() => this.getAllVideos()}
                      search={theme}
                    >
                      <IoIosSearch />
                    </SearchButton>
                  </SearchInputCard>

                  {this.onGetData(theme)}
                </VideosContainer>
              </Container>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
