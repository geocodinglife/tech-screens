import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import './styles/_app.scss';

import { useComments } from './selectors/comments';
import { addComment } from './reducers/commentReducer'

const App = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState({});
  const comments = useComments();
  console.log(comments);

  const handleChange = event => {
    setComment({
      ...comment,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    event.target.reset();

    dispatch(addComment(comment));
  }

  return (
    <div className="app">
      <div className="level">
        <div>
          <h1 className="title">Dark Mode Challenge</h1>
        </div>

        {/* --The button that should toggle dark mode-- */}
        <button className="app__dark-mode-btn icon level-right">
          <FontAwesomeIcon icon={faMoon} />
        </button>

      </div>

      <div className="columns">
        <div className="column">
          <p>Add a comment</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} >
        <div className="field">
          <div className="control">
            <input onChange={handleChange} name="email" className="input" type="text" placeholder="Email" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input onChange={handleChange} name="comment" className="input" type="text" placeholder="Comment" />
          </div>
        </div>

        <section className="section">
          <div className="buttons level-right">
            <button className="button is-link" type="submit">Submit</button>
          </div>
        </section>
      </form>
    </div>
  );
}

export default App;
