import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import {SavedList, SavedTitle, SavedDesc} from './styledComponent'
import './index.css'

const SavedVideoCard = props => {
  const {savedDetails} = props
  const {
    id,
    title,
    channelName,
    thumbnailUrl,
    viewCount,
    publishedAt,
  } = savedDetails

  const ago = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value

        return (
          <Link to={`/videos/${id}`} className="videos-link">
            <SavedList>
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="saved-img"
              />
              <div className="trending-context">
                <SavedTitle heading={theme}>{title}</SavedTitle>
                <SavedDesc desc={theme}>{channelName}</SavedDesc>
                <div className="trending-postview">
                  <SavedDesc desc={theme}>{viewCount} .</SavedDesc>
                  <SavedDesc desc={theme}> {ago}</SavedDesc>
                </div>
              </div>
            </SavedList>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoCard
