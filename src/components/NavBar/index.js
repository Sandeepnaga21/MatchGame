import './index.css'
import ImageItem from '../ImageItem'
import TabItem from '../TabItem'

const NavBar = props => {
  const {
    updateActiveImageId,
    updateActiveTabId,
    updateImageId,
    thumbnailImage,
    filteredImages,
    tabsList,
  } = props

  return (
    <>
      <div className='display-container'>
        <img src={thumbnailImage} alt='thumbnail' />
      </div>
      <div className='tabs-container'>
        <ul>
          {tabsList.map(eachTab => (
            <TabItem
              tabDetails={eachTab}
              updateActiveTab={updateActiveTabId}
              key={eachTab.tabId}
            />
          ))}
        </ul>
      </div>
      <div className='thumbnail-img-container'>
        <ul>
          {filteredImages.map(each => (
            <ImageItem
              imageDetails={each}
              updateImage={updateActiveImageId}
              updateScore={updateImageId}
              key={each.id}
              value='match'
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default NavBar
