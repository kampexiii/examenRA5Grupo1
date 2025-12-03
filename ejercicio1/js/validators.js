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
        // Parse manually to ensure local time construction
        const [year, month, day] = dateString.split('-').map(Number);
        const inputDate = new Date(year, month - 1, day);
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        return inputDate <= today;
    }
};
