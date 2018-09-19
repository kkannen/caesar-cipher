import React from "react"
import PropTypes from "prop-types";

export default class PlainText extends React.Component {
    onChange = (e) => {
        this.props.convertText(e.target.value, "plain")
    }

    convertPlainText = () => {
        if(this.props.textType === "cipher") {
            const [alpha, len, text] = [
                "abcdefghijklmnopqrstuvwxyz".split(""), 
                this.props.currentText.length,
                this.props.currentText];
            let result = "";
            for(let x=0; x<len; x++){
                if(text[x] === " ") {
                    result += " "
                } else {
                    const newIndex = (alpha.indexOf(text[x]) - this.props.shift)%26
                    const cipherLetter = alpha[newIndex]
                    result += cipherLetter
                }
            } 
            return result;
        }
    }



    render () {
        return (
            <div>
                Plain text: <br/>
                <input 
                    onChange={this.onChange} 
                    value={this.convertPlainText()}/>
            </div>
        )
    }
}

PlainText.propTypes = {
    shift: PropTypes.number,
    textType: PropTypes.string,
    currentText: PropTypes.string,
    convertText: PropTypes.func
};