import React from 'react';

import fb from '../fb.svg';
import twitter from '../twitter.svg';
import warning from '../warning.svg'
import youtube from '../youtube.svg';

type NotFoundProps = {

}

export const NotFound: React.FunctionComponent<NotFoundProps> = (props: NotFoundProps) => (
    <div className="container not-found">
        <div className="row">
            <div className="col-xs-12 mx-auto">
                <div>
                    <img src={warning}
                        width="170"
                        height="170"
                        className="d-inline-block align-top" alt="" loading="lazy" />
                    <h1 className="not-found__title">404</h1>
                </div>
                <h2>Oops Page Not found</h2>
                
                <form className="form-inline justify-content-center py-3">
                    <input type="text" className="form-control" placeholder="Search" />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

                <p>
                    If you think you have arrived here by our mistake,
                    please <a href="mailto:test@mail.com">contact us</a>
                </p>
                <div>
                    Follow Us:
                    <p className="mt-3">
                        <a href="#" className="pr-2">
                            <img src={fb}
                                width="30"
                                height="30"
                                alt="" loading="lazy" />
                        </a>
                        <a href="#" className="pr-2">
                            <img src={twitter}
                                width="30"
                                height="30"
                                alt="" loading="lazy" />
                        </a>
                        <a href="#" className="pr-2">
                            <img src={youtube}
                                width="30"
                                height="30"
                                alt="" loading="lazy" />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div >
)