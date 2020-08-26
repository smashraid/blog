import React from 'react';

type JumbotronProps = {
    title: string,
    message: string
}

export const Jumbotron: React.FunctionComponent<JumbotronProps> = (props: JumbotronProps) => (
    <div className="jumbotron">
        <div className="container">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">
                {props.message}
            </p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>
    </div>
)