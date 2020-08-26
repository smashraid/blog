import React from 'react';

import slide1 from '../images/site13.jpg';
import slide2 from '../images/site14.jpg';
import slide3 from '../images/site15.jpg';

type SliderProps = {

}

export const Slider: React.FunctionComponent<SliderProps> = (props: SliderProps) => {
    return <div id="carouselService" className="slider carousel slide mx-auto" data-ride="carousel">
        <ol className="slider__indicators carousel-indicators">
            <li data-target="#carouselService" data-slide-to="0" className="active"></li>
            <li data-target="#carouselService" data-slide-to="1"></li>
            <li data-target="#carouselService" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="slider__card card" >
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <img src={slide1} className="slider__img card-img" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">Card title 1</h5>
                                <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Itaque a sapientia praecipitur se ipsam, si usus sit, sapiens ut relinquat
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="slider__card card" >
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <img src={slide2} className="slider__img card-img" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">Card title 2</h5>
                                <p className="card-text">
                                Eam stabilem appellas. Ergo hoc quidem apparet, nos ad agendum esse natos
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="slider__card card" >
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <img src={slide3} className="slider__img card-img" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">Card title 3</h5>
                                <p className="card-text">
                                Praeclare hoc quidem. Neque solum ea communia, verum etiam paria esse dixerunt
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselService" role="button" data-slide="prev">
            <span className="slider__control-prev-icon carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselService" role="button" data-slide="next">
            <span className="slider__control-next-icon carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
}