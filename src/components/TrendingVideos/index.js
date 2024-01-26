import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import {TrendingList, TrendingTitle, TrendingDesc} from './styledComponent'

const TrendingVideos = props => {
  const {trendingDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
  } = trendingDetails

  const ago = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value

        return (
          <Link to={`/videos/${id}`} className="link-item">
            <TrendingList>
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="trending-img"
              />
              <div className="trending-context">
                <TrendingTitle heading={theme}>{title}</TrendingTitle>
                <TrendingDesc desc={theme}>{name}</TrendingDesc>
                <div className="trending-postview">
                  <TrendingDesc desc={theme}>{viewCount} </TrendingDesc>
                  <TrendingDesc desc={theme}>. {ago}</TrendingDesc>
                </div>
              </div>
            </TrendingList>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default TrendingVideos
