import React from 'react';
import PropTypes from 'prop-types';

export class Navbar extends React.Component{
    
    //default properties - will be overriden if a props is passed in
    static defaultProps = {
        title:'New Git Hub Finder'
    }

    //propTypes ..dataType checking in a nutshell
    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Navbar;
