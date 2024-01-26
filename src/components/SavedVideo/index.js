import {CgPlayListAdd} from 'react-icons/cg'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideBar from '../SideBar'
import SavedVideoCard from '../SavedVideoCard'

import './index.css'

import {
  Container,
  SaveContainer,
  SaveHead,
  SaveLogo,
  SaveMainHeading,
  NoSavedHeading,
  NoSavedDesc,
} from './styledComponent'

const SaveVideo = () => (
  <ThemeContext.Consumer>
    {value => {
      const {theme, saveList} = value

      const isEmpty = saveList.length === 0

      return (
        <>
          <Header />
          <Container bgColor={theme} data-testid="savedVideos">
            <SideBar />
            <SaveContainer>
              {isEmpty ? (
                <div className="no-saved-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                    className="no-save-image"
                  />
                  <NoSavedHeading heading={theme}>
                    No saved videos found
                  </NoSavedHeading>
                  <NoSavedDesc desc={theme}>
                    You can save your videos while watching them
                  </NoSavedDesc>
                </div>
              ) : (
                <>
                  <SaveHead bgHead={theme}>
                    <SaveLogo logo={theme}>
                      <CgPlayListAdd />
                    </SaveLogo>
                    <SaveMainHeading mainHeading={theme}>
                      Saved Videos
                    </SaveMainHeading>
                  </SaveHead>

                  <ul className="saved-video-items">
                    {saveList.map(each => (
                      <SavedVideoCard savedDetails={each} key={each.id} />
                    ))}
                  </ul>
                </>
              )}
            </SaveContainer>
          </Container>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SaveVideo
