import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  Container,
  VideoPlayCard,
  VideoPlayerTitle,
  VideoPlayerDesc,
  VideoPlayerDescription,
  Button,
  OnFailureCard,
  OnFailureHeading,
  OnFailureImage,
  OnFailureDesc,
  OnFailureButton,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const apiStatusContext = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoPlayer extends Component {
  state = {video: [], like: false, dislike: false, save: false}

  componentDidMount() {
    this.getVideo()
  }

  getVideo = async () => {
    this.setState({apiStatus: apiStatusContext.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const url = `https://apis.ccbp.in/videos/${id}`

    const response = await fetch(url, option)
    const data = await response.json()
    const videoDetails = data.video_details

    if (response.ok === true) {
      const updateVideo = {
        id: videoDetails.id,
        title: videoDetails.title,
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        videoUrl: videoDetails.video_url,
        description: videoDetails.description,
        channelName: videoDetails.channel.name,
        channelProfileImgUrl: videoDetails.channel.profile_image_url,
        channelSubscribeCount: videoDetails.channel.subscriber_count,
      }

      this.setState({
        video: updateVideo,
        apiStatus: apiStatusContext.success,
      })
    } else {
      this.setState({apiStatus: apiStatusContext.failure})
    }
  }

  changeSaveButton = saveList => {
    const {video} = this.state
    const filter = saveList.find(each => each.id === video.id)
    if (filter) {
      this.setState({save: false})
    } else {
      this.setState({save: true})
    }
  }

  onLike = () => {
    this.setState({like: true, dislike: false})
  }

  onDislike = () => {
    this.setState({like: false, dislike: true})
  }

  onSuccess = () => {
    const {video, like, dislike, save} = this.state
    const {
      title,
      viewCount,
      publishedAt,
      videoUrl,
      description,
      channelName,
      channelProfileImgUrl,
      channelSubscribeCount,
    } = video

    const ago = formatDistanceToNow(new Date(publishedAt))

    return (
      <ThemeContext.Consumer>
        {value => {
          const {theme, saveVideoList, saveList} = value

          const saveBtn = save ? 'Saved' : 'Save'

          const saveNewItem = () => {
            saveVideoList({...video})
          }

          return (
            <VideoPlayCard className="video-container">
              <ReactPlayer url={videoUrl} controls width="100%" />
              <VideoPlayerTitle heading={theme}>{title}</VideoPlayerTitle>
              <div className="video-details-container">
                <div className="video-count-publish">
                  <VideoPlayerDesc desc={theme}>{viewCount}</VideoPlayerDesc>
                  <VideoPlayerDesc desc={theme}> . {ago}</VideoPlayerDesc>
                </div>
                <div className="video-buttons-list">
                  <Button type="button" btn={like} onClick={this.onLike}>
                    <BiLike />
                    Like
                  </Button>
                  <Button type="button" btn={dislike} onClick={this.onDislike}>
                    <BiDislike />
                    Dislike
                  </Button>
                  <Button
                    type="button"
                    btn={save}
                    onClick={() => {
                      this.changeSaveButton(saveList)
                      saveNewItem()
                    }}
                  >
                    <CgPlayListAdd />
                    {saveBtn}
                  </Button>
                </div>
              </div>
              <hr className="separate" />
              <div className="video-channel-details">
                <img
                  src={channelProfileImgUrl}
                  alt="channel logo"
                  className="video-channel-profile-img"
                />
                <div className="video-channel-profile-desc">
                  <VideoPlayerDescription desc={theme}>
                    {channelName}
                  </VideoPlayerDescription>
                  <VideoPlayerDesc desc={theme}>
                    {channelSubscribeCount} subscribers
                  </VideoPlayerDesc>
                </div>
              </div>
              <VideoPlayerDescription desc={theme}>
                {description}
              </VideoPlayerDescription>
            </VideoPlayCard>
          )
        }}
      </ThemeContext.Consumer>
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
        <OnFailureButton type="button" onClick={() => this.getVideo()}>
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
              <Container bgColor={theme} data-testid="videoItemDetails">
                <SideBar />
                <VideoPlayCard>{this.onGetData()}</VideoPlayCard>
              </Container>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoPlayer
