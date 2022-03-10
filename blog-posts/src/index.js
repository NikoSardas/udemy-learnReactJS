import React from 'react'
import ReactDOM from 'react-dom'
import SingleComment from './SingleComment'
import profile1 from './image/pic-1.jpg'
import profile2 from './image/pic-2.jpg'
import profile3 from './image/pic-3.jpg'
import UserCard from './UserCard'

const App = () => {
  return (
    <div className="ui comments">
      <UserCard>
        <div>Hello my name is Sarah and I live in Istanbul</div>
      </UserCard>

      <UserCard>
        <SingleComment
          name="Alex"
          date="Today at 5:00pm"
          text={`it's amazing`}
          picture={profile1}
        />
      </UserCard>

      <UserCard>
        <SingleComment
          name="Jack"
          date="Today at 6:00pm"
          text={`great job`}
          picture={profile2}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Sarah"
          date="Today at 7:00pm"
          text={`THANKS!`}
          picture={profile3}
        />
      </UserCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
