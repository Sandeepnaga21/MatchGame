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
        <img src={imageUrl} alt={category} onClick={onClickImg} />
      </li>
    </div>
  )
}

export default ImageItem
