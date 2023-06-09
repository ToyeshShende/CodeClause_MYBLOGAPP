import React from 'react';
import {formatISO9075} from 'date-fns';
import { Link } from 'react-router-dom';

export default function Post({_id,title,summary,cover,content,createdAt,author}) {
  return (
    <div>
        <div className="post">
          <div className="image">
          <Link to={`/post/${_id}`}>
            <img src={'http://localhost:4000/'+cover} alt='loading'></img>
            </Link>
          
          </div>
        
        <div className="text">
        <Link to={`/post/${_id}`}>
        <h2>{title} </h2>
        </Link>
        <p className="info">
          <p  className="author">{author.username}
          <span className="date"> {formatISO9075(new Date(createdAt))}</span>
          </p>
          
        </p>
        <p className="summary">{summary}</p>

        </div>
        
      </div>
      
    </div>
  )
}
