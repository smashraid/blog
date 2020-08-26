import React, { useState, useEffect } from 'react';

import { Card } from '../components/Card';
import { Carousel } from '../components/Carousel';
import { Featurrete } from '../components/Featurette';
import { Heading } from '../components/Heading';
import { Hero } from '../components/Hero';
import { Jumbotron } from '../components/Jumbotrom';
import { Slider } from '../components/Slider';
import { Spinner } from '../components/Spinner';
import { Topic } from '../store/entities';

import photo from '../images/user.svg';

type HomeProps = {

}

export const Home: React.FunctionComponent<HomeProps> = (props: HomeProps) => {
    const [topics, setTopics] = useState<Array<Topic>>([]);
    const [status, setStatus] = useState(true);

    useEffect(() => {
        fetch("/api/topics")
            .then(response => response.json())
            .then(response => setTopics(response.topics))
            .then(response => setStatus(false));
    }, []);

    return <>
        <Carousel />
        <section className="content-spacer">
            <Spinner status={status} />
            <div className="container">
                <div className="row">
                    {topics.map((topic) =>
                        <Heading key={topic.id} topic={topic} />
                    )}
                </div>
            </div>
        </section>
        <section className="content-spacer">
            <hr className="featurette__divider" />
            <Featurrete />
            <hr className="featurette__divider" />
            <Featurrete orderContent="order-md-2" orderImg="order-md-1" />
        </section>
        <section className="content-spacer">
            <h1 className="text-center mt-2 mb-4">Nuestros Profesionales</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Card title="John Doe"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            image={photo}
                            cta={{ text: "Mas Informacion", url: "#" }} />
                    </div>
                    <div className="col-md-3">
                        <Card title="Jane Doe"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            image={photo}
                            cta={{ text: "Mas Informacion", url: "#" }} />
                    </div>
                    <div className="col-md-3">
                        <Card title="Lou Doe"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            image={photo}
                            cta={{ text: "Mas Informacion", url: "#" }} />
                    </div>
                    <div className="col-md-3">
                        <Card title="Mou Doe"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            image={photo}
                            cta={{ text: "Mas Informacion", url: "#" }} />
                    </div>
                </div>
            </div>
        </section>
        <section className="content-spacer">
            <h1 className="text-center mt-2 mb-4">Nuestros Servicios</h1>
            <Slider />
        </section>
    </>
};