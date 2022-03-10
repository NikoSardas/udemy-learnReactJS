const UserCard = (props) => {
  const { children } = props

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">Alex</div>
        <div className="description">{children}</div>
      </div>
      <div className="ui bottom button">
        <i className="add icon"></i>
        Add Friend
      </div>
    </div>
  )
}

export default UserCard
