import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = (Wrapper) => (props) => {
    return (
        <RestoServiceContext.Consumer>
            {
                (RestoService) => {
                    return <Wrapper {...props} RestoService={RestoService}/>
                }
            }
        </RestoServiceContext.Consumer>
    )
}

export default WithRestoService;