export const ui = {
    showError: (elementId, message) => {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    },
    clearError: (elementId) => {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = '';
        }
    },
    showSuccess: (message) => {
        const successElement = document.getElementById('ok');
        if (successElement) {
            successElement.textContent = message;
            successElement.style.color = 'green'; // Optional: make it look like success
        }
    },
    clearSuccess: () => {
        const successElement = document.getElementById('ok');
        if (successElement) {
            successElement.textContent = '';
        }
    }
};
