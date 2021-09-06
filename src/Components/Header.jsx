import PropTypes from 'prop-types';
import React from 'react';
import Button from "./Button";
import {useLocation} from 'react-router-dom';

const Header = ({title, onAdd, showAdd}) => {

    const location = useLocation()

    // const onClick = () => {
    //     console.log('click')
    // }

    return (
        <header className={'header'}>
            <h1>{title}</h1>
            { location.pathname === '/' && <Button
                onClick={onAdd}
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'} />}
        </header>
    );
};

Header.defaultProps = {
    title: "Task tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'gray',
// }

export default Header;