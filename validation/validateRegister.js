export default function validateRegister(values) {
    let errors = {};

    if(!values.name) {
        errors.name = 'Name field is required';
    }

    // Validate email

    if(!values.email) {
        errors.email = 'Email field is required';
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email';
    }

    // Validate Password
    if(!values.password) {
        errors.password = 'Password field is required';
    }else if( values.password.length < 6 ) {
        errors.password = 'Password fiel must have at least 6 values';
    }
    return errors;
}