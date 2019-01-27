import React from 'react'
import ReactDOM from 'react-dom'

import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className={"ui container comments"}>
            <CommentDetail author={"Sam"} timeAgo={"Today at 5:00pm"} content={"Nice blog post"}/>
            <CommentDetail author={"Alex"} timeAgo={"Yesterday at 3:11am"} content={"Great to read"}/>
            <CommentDetail author={"Jane"} content={"Nothing to say"}/>
       </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#root"))
export default App