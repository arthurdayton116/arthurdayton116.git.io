import React, {Suspense} from 'react'
import { Link } from "react-router-dom";
import blogContent from '../blogs/BlogMDX'

export const Post = (props) => {
    const post = props.history.location.state.post;
    const Content = blogContent(post.id)

  return (
    <div>
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <h3>{post.title}</h3>
        <Suspense fallback={<div>Loading...</div>}>
            <Content post={post}/>
        </Suspense>
    </div>
  )
}
