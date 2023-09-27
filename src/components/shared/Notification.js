import React, { useState } from 'react';

const Notification = ({ message , type }) => {
    const [alerts, setAlerts] = useState(true);

    const handelNotification = () => {
        setAlerts(false)
    }
    return (
        <div className="row"  >
            {alerts ? (
                <div className={type} role="alert">
                    {message}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handelNotification}></button>
                </div>
            ) : null}
        </div>
    );
}

export default Notification;