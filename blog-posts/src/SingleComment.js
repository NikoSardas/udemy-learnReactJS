const SingleComment = (props) => {
  const { name, date, text, picture } = props

  return (
    <div className="ui comment">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={picture} alt="profile" />
        </a>
        <div className="content">
          <a href="/" className="Author">
            {name}
          </a>
          <div className="metadata">
            <span className="date">{date}</span>
          </div>{' '}
          <div className="text">{text}</div>
        </div>
      </div>
    </div>
  )
}

export default SingleComment
