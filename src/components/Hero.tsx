import React from 'react';

import image from '../images/site12.jpg';

type HeroProps = {

}

export const Hero: React.FunctionComponent<HeroProps> = (props: HeroProps) => {
    return <div className="hero">
        <div className="hero__content">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            <p>Si enim sapiens aliquis miser esse possit, ne ego istam gloriosam memorabilemque</p>
            <button className="btn btn-primary">Ver Informacion</button>
        </div>
        <div>
            <img className="hero__img" src={image} />
        </div>
    </div>
}