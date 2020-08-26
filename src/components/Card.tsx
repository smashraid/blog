import React from 'react';

type CardProps = {
    title: string,
    description: string,
    image: string,
    cta?: {
        url: string,
        text: string
    }
}

export const Card: React.FunctionComponent<CardProps> = (props: CardProps) => {
    return <div className="card shadow-sm p-3 bg-white rounded" >
        <img src={props.image} className="card__avatar card-img-top mx-auto" alt={props.title} />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <a href={props.cta?.url} className="btn btn-info">{props.cta?.text}</a>
        </div>
    </div>
}