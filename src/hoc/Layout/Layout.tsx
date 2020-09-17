import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const Layout: React.FC = props => {

    return (
        <React.Fragment>
            <Toolbar />
            {props.children}
        </React.Fragment>
    )

}

export default Layout;