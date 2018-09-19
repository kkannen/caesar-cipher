import React from "react"
import PropTypes from "prop-types";

export default class Shift extends React.Component {

    onChange = (e) => {
        this.props.setShift(e.target.value)
    }

    render () {
        return (
            <div>
                Shift: <br/> 
                <input onChange={this.onChange}/>
            </div>
        )
    }
}

Shift.propTypes = {
    setShift: PropTypes.func,
};