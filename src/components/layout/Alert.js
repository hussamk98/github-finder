import React from "react";

const Alert = ({alert}) => {
    return(
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <h5 className='font-weight-lighter'> <i className='fa fa-info-circle'/> {alert.msg}</h5>
            </div>
        )
    )
}
export default Alert
