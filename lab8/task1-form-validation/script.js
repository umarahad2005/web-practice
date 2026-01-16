// ================================
// Live Form Validation - Script
// Lab 8 - JavaScript Validation
// ================================

// DOM Elements
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const age = document.getElementById('age');
const website = document.getElementById('website');
const terms = document.getElementById('terms');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');
const resetBtn = document.getElementById('resetBtn');
const strengthBar = document.getElementById('strengthBar');

// Validation state object
const validationState = {
    fullName: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
    age: false,
    website: true, // Optional field
    terms: false
};

// ================================
// Validation Functions
// ================================

// Validate Full Name (min 3 chars, letters and spaces only)
function validateFullName() {
    const value = fullName.value.trim();
    const nameRegex = /^[a-zA-Z\s]{3,50}$/;
    const errorEl = document.getElementById('fullNameError');
    
    if (value === '') {
        setError(fullName, errorEl, 'Full name is required');
        validationState.fullName = false;
    } else if (value.length < 3) {
        setError(fullName, errorEl, 'Name must be at least 3 characters');
        validationState.fullName = false;
    } else if (!nameRegex.test(value)) {
        setError(fullName, errorEl, 'Name can only contain letters and spaces');
        validationState.fullName = false;
    } else {
        setSuccess(fullName, errorEl);
        validationState.fullName = true;
    }
    checkFormValidity();
}

// Validate Email
function validateEmail() {
    const value = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorEl = document.getElementById('emailError');
    
    if (value === '') {
        setError(email, errorEl, 'Email address is required');
        validationState.email = false;
    } else if (!emailRegex.test(value)) {
        setError(email, errorEl, 'Please enter a valid email address');
        validationState.email = false;
    } else {
        setSuccess(email, errorEl);
        validationState.email = true;
    }
    checkFormValidity();
}

// Validate Phone Number (Pakistani format)
function validatePhone() {
    const value = phone.value.trim();
    const phoneRegex = /^(\+92|0)?[3][0-9]{9}$/;
    const errorEl = document.getElementById('phoneError');
    
    if (value === '') {
        setError(phone, errorEl, 'Phone number is required');
        validationState.phone = false;
    } else if (!phoneRegex.test(value.replace(/\s|-/g, ''))) {
        setError(phone, errorEl, 'Enter valid phone (e.g., 03001234567)');
        validationState.phone = false;
    } else {
        setSuccess(phone, errorEl);
        validationState.phone = true;
    }
    checkFormValidity();
}

// Validate Password with strength indicator
function validatePassword() {
    const value = password.value;
    const errorEl = document.getElementById('passwordError');
    
    // Password requirements
    const requirements = {
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        lowercase: /[a-z]/.test(value),
        number: /[0-9]/.test(value),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(value)
    };
    
    // Update requirement indicators
    document.getElementById('req-length').classList.toggle('met', requirements.length);
    document.getElementById('req-uppercase').classList.toggle('met', requirements.uppercase);
    document.getElementById('req-lowercase').classList.toggle('met', requirements.lowercase);
    document.getElementById('req-number').classList.toggle('met', requirements.number);
    document.getElementById('req-special').classList.toggle('met', requirements.special);
    
    // Calculate strength
    const metCount = Object.values(requirements).filter(Boolean).length;
    updateStrengthBar(metCount);
    
    if (value === '') {
        setError(password, errorEl, 'Password is required');
        validationState.password = false;
        strengthBar.className = 'strength-bar';
    } else if (metCount < 5) {
        setError(password, errorEl, 'Password does not meet all requirements');
        validationState.password = false;
    } else {
        setSuccess(password, errorEl);
        validationState.password = true;
    }
    
    // Re-validate confirm password if it has value
    if (confirmPassword.value) {
        validateConfirmPassword();
    }
    
    checkFormValidity();
}

// Update password strength bar
function updateStrengthBar(strength) {
    strengthBar.className = 'strength-bar';
    if (strength === 0) return;
    
    if (strength <= 2) {
        strengthBar.classList.add('weak');
    } else if (strength === 3) {
        strengthBar.classList.add('fair');
    } else if (strength === 4) {
        strengthBar.classList.add('good');
    } else {
        strengthBar.classList.add('strong');
    }
}

// Validate Confirm Password
function validateConfirmPassword() {
    const value = confirmPassword.value;
    const errorEl = document.getElementById('confirmPasswordError');
    
    if (value === '') {
        setError(confirmPassword, errorEl, 'Please confirm your password');
        validationState.confirmPassword = false;
    } else if (value !== password.value) {
        setError(confirmPassword, errorEl, 'Passwords do not match');
        validationState.confirmPassword = false;
    } else {
        setSuccess(confirmPassword, errorEl);
        validationState.confirmPassword = true;
    }
    checkFormValidity();
}

// Validate Age
function validateAge() {
    const value = age.value;
    const errorEl = document.getElementById('ageError');
    
    if (value === '') {
        setError(age, errorEl, 'Age is required');
        validationState.age = false;
    } else if (parseInt(value) < 1 || parseInt(value) > 120) {
        setError(age, errorEl, 'Please enter a valid age (1-120)');
        validationState.age = false;
    } else if (parseInt(value) < 18) {
        setError(age, errorEl, 'You must be at least 18 years old');
        validationState.age = false;
    } else {
        setSuccess(age, errorEl);
        validationState.age = true;
    }
    checkFormValidity();
}

// Validate Website URL (optional)
function validateWebsite() {
    const value = website.value.trim();
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    const errorEl = document.getElementById('websiteError');
    
    if (value === '') {
        // Optional field - valid when empty
        website.classList.remove('valid', 'invalid');
        errorEl.textContent = '';
        validationState.website = true;
    } else if (!urlRegex.test(value)) {
        setError(website, errorEl, 'Please enter a valid URL');
        validationState.website = false;
    } else {
        setSuccess(website, errorEl);
        validationState.website = true;
    }
    checkFormValidity();
}

// Validate Terms Checkbox
function validateTerms() {
    const errorEl = document.getElementById('termsError');
    
    if (!terms.checked) {
        errorEl.textContent = 'You must accept the terms and conditions';
        validationState.terms = false;
    } else {
        errorEl.textContent = '';
        validationState.terms = true;
    }
    checkFormValidity();
}

// ================================
// Helper Functions
// ================================

function setError(input, errorEl, message) {
    input.classList.remove('valid');
    input.classList.add('invalid');
    errorEl.textContent = message;
}

function setSuccess(input, errorEl) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    errorEl.textContent = '';
}

function checkFormValidity() {
    const isValid = Object.values(validationState).every(value => value === true);
    submitBtn.disabled = !isValid;
}

// ================================
// Event Listeners
// ================================

// Real-time validation on input
fullName.addEventListener('input', validateFullName);
email.addEventListener('input', validateEmail);
phone.addEventListener('input', validatePhone);
password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input', validateConfirmPassword);
age.addEventListener('input', validateAge);
website.addEventListener('input', validateWebsite);
terms.addEventListener('change', validateTerms);

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Run all validations
    validateFullName();
    validateEmail();
    validatePhone();
    validatePassword();
    validateConfirmPassword();
    validateAge();
    validateWebsite();
    validateTerms();
    
    // Check if all valid
    const isValid = Object.values(validationState).every(value => value === true);
    
    if (isValid) {
        form.classList.add('hidden');
        successMessage.classList.add('show');
    }
});

// Reset button
resetBtn.addEventListener('click', function() {
    form.reset();
    form.classList.remove('hidden');
    successMessage.classList.remove('show');
    
    // Reset all validation states
    Object.keys(validationState).forEach(key => {
        validationState[key] = key === 'website' ? true : false;
    });
    
    // Remove validation classes
    document.querySelectorAll('input').forEach(input => {
        input.classList.remove('valid', 'invalid');
    });
    
    // Clear error messages
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
    
    // Reset password requirements
    document.querySelectorAll('.password-requirements li').forEach(li => {
        li.classList.remove('met');
    });
    
    // Reset strength bar
    strengthBar.className = 'strength-bar';
    
    submitBtn.disabled = true;
});

// Initial state
checkFormValidity();
