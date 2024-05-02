import React from 'react'

function CommentList({comments}) {
  return (
    <div>
    <h3>Comments:</h3>

    { comments?.map((comment, i) => (
            <div className="comment p-1 m-1 border border-gray-100" key={i}>
                <h4 className='font-semibold'>{comment.postedBy}</h4>
                <p className='text-sm'>{comment.commentText}</p>
            </div>
        ))
    }
    </div>
  )
}

export default CommentList