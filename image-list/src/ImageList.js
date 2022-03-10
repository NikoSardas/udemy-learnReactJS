const ImageList = (props) => {
  const images = props.images.map((image) => (
    <div class="four wide column">
      <img
        className="ui spaced image"
        key={image.id}
        src={image.webformatURL}
        alt="query result"
      />
    </div>
  ))
  return <div className="ui grid">{images}</div>
}

export default ImageList
