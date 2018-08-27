import React from 'react';
import Container from './Container';

function AppHeader(props) {
    return (
        <div className="header light-blue accent-3 white-text">
            <Container>
                <div className="row">
                    <div className="col s12">
                        <h1>{props.title}</h1>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default AppHeader;