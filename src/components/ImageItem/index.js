import './index.css'

const ImageItem = props => {
  const {imageDetails, updateImage, updateScore} = props
  const {id, category, thumbnailUrl} = imageDetails

  const onClickImg = () => {
    updateImage(id)
    updateScore(thumbnailUrl)
  }

  return (
    <div>
      <li key={category}>
        <button type="button" onClick={onClickImg}>
          <img src={thumbnailUrl} alt={category} value={id} />
        </button>
      </li>
    </div>
  )
}

export default ImageItem
