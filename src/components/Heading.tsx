import React from 'react';

import { Topic } from '../store/entities';

type HeadingProps = {
  topic: Topic
}

export const Heading: React.FunctionComponent<HeadingProps> = (props: HeadingProps) => {
  return <div className="col-md-4 heading">
    <div className="heading__img">
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-people-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
      </svg>
    </div>
    <div className="heading__content">
      <h2>{props.topic.title}</h2>
      <p className="heading__description">{props.topic.description}</p>
      <p><a className="btn btn-info" href="#" role="button">View details »</a></p>
    </div>
  </div>
}