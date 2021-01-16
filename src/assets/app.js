// element-ui
import {Message, Notification} from 'element-ui';

function notification_err(msg) {
    Notification.error({
        title: 'error',
        message: msg
    });
}

function message_err(msg) {
    Message.error(msg)
}


function notification_info(msg) {
    Notification.info({
        title: 'info',
        message: msg
    });
}


//多个方法在此处json中export出去
export {
    notification_err,
    notification_info,
    message_err,

};


