import React from 'react';
import { Row } from 'react-bootstrap';

function Footer(/*props*/) {
    return (
        <footer>
            <div className="footer">
                <Row>
                    <div className="col l4 s12 footer-header">
                        <h5>Follow Us</h5>
                    </div>
                </Row>
                <Row>
                    <div className="col l12 s12 footer-content">
                        <a href="https://twitter.com/rabbitholekc?lang=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-1x footer-icons"></i>Twitter</a>
                        <a href="https://www.facebook.com/rabbitholekc/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square fa-1x footer-icons"></i>Facebook</a>
                        <a href="https://www.instagram.com/rabbit_hole_kc/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-1x footer-icons"></i>Instagram</a>
                    </div>
                </Row>
                <Row>
                    <div className="col l12 s12 footer-copyright">
                        <a href="https://www.rabbitholekc.org/" target="_blank" rel="noopener noreferrer"><small><i className="far fa-copyright fa-1x footer-icons"></i>2019 RABBIT HOLE</small></a>
                    </div>
                </Row>
            </div>
        </footer>
    );
}

export default Footer;