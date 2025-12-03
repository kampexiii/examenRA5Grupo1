export const validators = {
    isValidName: (name) => {
        const regex = /^[a-zA-Z\s]+$/;
        return regex.test(name);
    },
    areNamesDifferent: (name1, name2) => {
        return name1.trim().toLowerCase() !== name2.trim().toLowerCase();
    },
    isDateValid: (dateString) => {
        if (!dateString) return false;
        const inputDate = new Date(dateString);
        const today = new Date();
        // Reset time part for accurate date comparison
        today.setHours(0, 0, 0, 0);
        return inputDate <= today;
    }
};
