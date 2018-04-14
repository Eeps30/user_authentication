import React, {Component} from 'react'
import { connect } from 'react-redux'
import { handleInputChange } from '../actions/index'

class Field extends Component {
    
    render(){

        const {label, type, placeholder, name, value, handleInputChange} = this.props

        return (
            <div className="form-group">
                <label className="text-white">{label}</label>
                <input onChange={handleInputChange} value={value[name]} type={type} name={name} className="form-control" placeholder={placeholder}/>
            </div>
        )
    }
}

export default connect(null, {handleInputChange})(Field)