import { showMessage } from "react-native-flash-message";
export const messageHelper = {
    error: (message) => {
        showMessage({
            message: message,
            type: 'default',
            position: 'bottom',
            backgroundColor: '#d9534f',
            color: 'white',
            duration: 3000,
        });
    },
    success: (message) => {
        showMessage({
            message: message,
            type: 'success',
            position: 'bottom',
            duration: 3000,
        });
    },
    default: (message) => {
        showMessage({
            message: message,
            position: 'bottom',
            type: 'default',
            duration: 3000,
        });
    },
};