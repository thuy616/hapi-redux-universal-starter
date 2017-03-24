import React from 'react';
import { Grid, Row, Col, Dropdown, MenuItem } from 'react-bootstrap';

class SingleView extends React.Component {

    render() {
        return (
            <div>
                <div>
                    Welcome!
                </div>
                <Row>
                    <Col xs={12} className="text-center">
                        <h2 className="text-thin">Content</h2>
                        <p>
                          This project is an application skeleton. You can use it to quickly bootstrap your universal ReactJS webapp projects and dev environment for these projects.
                        </p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SingleView;
