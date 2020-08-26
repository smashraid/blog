import React from 'react';

type FooterProps = {
    logo: string
}

export const Footer: React.FunctionComponent<FooterProps> = (props: FooterProps) => (
    <footer className="py-5 site-footer">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md">
                    <img src={props.logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-top" alt="" loading="lazy" />
                    <small className="d-block mb-3 text-light">© 2017-2020</small>
                </div>
                <div className="col-6 col-md">
                    <h5>Features</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-light" href="#">Cool stuff</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>Resources</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-light" href="#">Resource</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h5>About</h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-light" href="#">Team</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
)