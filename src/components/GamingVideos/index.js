import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {GamingList, GamingTitle, GamingDesc} from './styledComponent'
import './index.css'

const GamingVideos = props => {
  const {gamingDetails} = props
  const {id, title, thumbnailUrl, viewCount} = gamingDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value

        return (
          <GamingList>
            <Link to={`/videos/${id}`} className="link-item">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="gaming-image"
              />
              <GamingTitle head={theme}>{title}</GamingTitle>
              <div className="gaming-desc-card">
                <GamingDesc desc={theme}>{viewCount}</GamingDesc>
                <GamingDesc desc={theme}>Watching Worldwide</GamingDesc>
              </div>
            </Link>
          </GamingList>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideos
