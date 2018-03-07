import React from 'react';
import './style.css';

const ErrorReport = (props) => {
    return <dialog id='error-report' open>
        <h1>{props.error.message}</h1>
        <div id='error-report-stack'>
            {props.errorStack}
        </div>
    </dialog>;
};

export default ErrorReport;
