// -------------------------
//  REGEX
// ---------------------------
export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,40}$/;




  // -------------------
  import { useState } from 'react';

export function useValidation() {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');

    const isValidEmail = (email) => {
        const isValid = /\S+@\S+\.\S+/.test(email);
        return isValid;
    };

    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const validateField = (name, value, formData) => {
        switch (name) {
            case 'email':
            case 'resetData': // Assuming this is the same validation as 'email'
                setEmailError(value === '' ? 'Email is required' : !isValidEmail(value) ? 'Invalid Email' : '');
                break;
            case 'password':
                setPasswordError(value === '' ? 'Password is required' : !isValidPassword(value) ? 'Password must have at least 8 characters, including 1 lowercase, 1 uppercase, 1 number, and 1 special character.' : '');
                break;
            case 'newPassword':
                setNewPasswordError(value === '' ? 'New password is required' : !isValidPassword(value) ? 'Password must have at least 8 characters, including 1 lowercase, 1 uppercase, 1 number, and 1 special character.' : '');
                break;
            case 'confirmPassword':
                setPasswordMatchError(value === '' ? 'Confirm password is required' : (value !== formData.newPassword && value !== formData.password) ? 'Password confirmation doesn’t match.' : '');
                break;
            default:
                break;
        }
    };

    return { emailError, passwordError, newPasswordError, passwordMatchError, isValidEmail, isValidPassword, validateField };
}
