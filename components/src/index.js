import React from 'react'
import ReactDOM from 'react-dom'

import CommentDetail from './CommentDetail'
import ApproveCard from './ApprovalCard'
const App = () => {
    return (
        <div className={"ui container comments"}>
            <ApproveCard>
                <h4>Are you sure?</h4>
                This cannot be undone.
            </ApproveCard>
            <ApproveCard>
                <CommentDetail author={"Sam"} timeAgo={"Today at 5:00pm"} content={"Nice blog post"}/>
            </ApproveCard>
            <ApproveCard>
                <CommentDetail author={"Jane"} timeAgo={"Yesterday at 5:00pm"} content={"Nice blog post"}/>
            </ApproveCard>
            <ApproveCard>
                <CommentDetail author={"Kim"} timeAgo={"Someday at 5:00pm"} content={"Nice blog post"}/>
            </ApproveCard>
       </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#root"))
export default App