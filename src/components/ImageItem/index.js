import './index.css'

const ImageItem = props => {
  const {imageDetails, updateImage} = props
  const {id, imageUrl, category} = imageDetails

  const onClickImg = () => {
    updateImage(id)
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
