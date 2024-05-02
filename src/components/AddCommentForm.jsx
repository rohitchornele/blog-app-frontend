import axios from 'axios';
import React, { useState } from 'react'

function AddCommentForm({ articleName, onArticleUpdate }) {

    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const response = await axios.post(`http://localhost:8000/api/article/${articleName}/comments`, {
            postedBy: name,
            commentText : commentText
        });

        const updatedArticle = await response?.data;
        onArticleUpdate(updatedArticle);
        setName('');
        setCommentText('');
    }

  return (
    <div id='addCommentForm' className='bg-red-700 border-black border-solid p-5'>
        <h3 className='font-semibold text-2xl'>Add Comment</h3>
        <label htmlFor="" className='ml-8 py-3 text-center'>
            Name : <br />
            <input className='w-[380px] ml-8 order border-black py-1 px-2 outline-none mb-3 rounded-sm' 
                    value={name}
                   onChange={e => setName(e.target.value)}
                   type='text' />
        </label> <br />
        <label className='py-3 ml-8' htmlFor="">
            Comment : <br />
            <textarea 
                className='ml-8 border border-black outline-none rounded-sm'
                value= {commentText}
                onChange={e => setCommentText(e.target.value)}
                cols="50" rows="4">
                    console.log(e.target.value)
                </textarea>
        </label>
        <br />
        <button className='text-center bg-green-500 ml-8 mt-2 px-3 py-1 rounded-md' onClick={addComment}>Add Comment</button>
    </div>
  )
}

export default AddCommentForm