import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import {
  ListItem,
  ListItemImg,
  ListContext,
  ProfileItem,
  DescItem,
  PostItem,
  ProfileTitle,
  ProfileDesc,
} from './styledComponent'
import './index.css'

const AllVideos = props => {
  const {videosDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    profileImageUrl,
    name,
  } = videosDetails

  const ago = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeContext.Consumer>
      {value => {
        const {theme} = value

        return (
          <ListItem>
            <Link to={`/videos/${id}`} className="link-item">
              <ListItemImg src={thumbnailUrl} alt="video thumbnail" />
              <ListContext>
                <ProfileItem src={profileImageUrl} alt="channel logo" />
                <DescItem>
                  <ProfileTitle profiletitle={theme}>{title}</ProfileTitle>
                  <ProfileDesc desc={theme}>{name}</ProfileDesc>
                  <PostItem>
                    <ProfileDesc desc={theme}>{viewCount}</ProfileDesc>
                    <ProfileDesc desc={theme}> . {ago}</ProfileDesc>
                  </PostItem>
                </DescItem>
              </ListContext>
            </Link>
          </ListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default AllVideos
