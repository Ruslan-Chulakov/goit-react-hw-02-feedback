import React, { Component } from "react";
import clsx from "clsx";
import css from "./Notification.module.css"

class Notification extends Component {
    render() {
        const { message } = this.props;
        
        return (
            <p className={clsx(css.notification)}>{message}</p>
        )
    }
};

export default Notification;