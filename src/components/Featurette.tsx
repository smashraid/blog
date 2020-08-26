import React from 'react';

import slide1 from '../images/site1.png';

type FeaturreteProps = {
    orderContent?: string,
    orderImg?: string
}

export const Featurrete: React.FunctionComponent<FeaturreteProps> = (props: FeaturreteProps) => {
    return <div className="container">
        <div className="row featurette">
            <div className={'col-md-7 ' + props.orderContent}>
                <h2 className="featurette__heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className={'col-md-5 ' + props.orderImg}>
                <img src={slide1} alt="slide1" className="featurette__img" />
            </div>
        </div>
    </div>
}

Featurrete.defaultProps = {
    orderContent: '',
    orderImg: ''
}