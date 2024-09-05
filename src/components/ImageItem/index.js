import './index.css'

const ImageItem = props => {
  const {imageDetails, updateImage, updateScore} = props
  const {id, imageUrl, category} = imageDetails

  const onClickImg = () => {
    updateImage(id)
    updateScore(id)
  }

  return (
    <div>
      <li key={category}>
        <button type="button" onClick={onClickImg}>
          <img src={imageUrl} alt={category} value={id} />
        </button>
      </li>
    </div>
  )
}

export default ImageItem
