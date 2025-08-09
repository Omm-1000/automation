// Farmer Registration JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeFarmerRegistration();
});

function initializeFarmerRegistration() {
    const form = document.getElementById('farmer-registration-form');
    const phoneInput = document.getElementById('phone');
    const whatsappInput = document.getElementById('whatsapp');
    
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
    
    // Auto-fill WhatsApp with phone number
    if (phoneInput && whatsappInput) {
        phoneInput.addEventListener('input', function() {
            if (!whatsappInput.value) {
                whatsappInput.value = this.value;
            }
        });
    }
    
    // Real-time validation
    addRealTimeValidation();
    
    // Form progress tracking
    trackFormProgress();
}

function handleFormSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Validate form
    if (!validateRegistrationForm(form)) {
        showNotification('Please fill in all required fields correctly.', 'error');
        return;
    }
    
    // Show loading state
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<span class="loading"></span> Registering...';
    submitButton.disabled = true;
    
    // Collect form data
    const formData = collectFormData(form);
    
    // Simulate API call (replace with actual API endpoint)
    setTimeout(() => {
        submitFarmerRegistration(formData)
            .then(response => {
                showNotification('Registration successful! Welcome to KrishiSathi!', 'success');
                
                // Redirect to dashboard or success page
                setTimeout(() => {
                    window.location.href = 'farmer-dashboard.html';
                }, 2000);
            })
            .catch(error => {
                console.error('Registration error:', error);
                showNotification('Registration failed. Please try again.', 'error');
                
                // Restore button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            });
    }, 1500);
}

function validateRegistrationForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('input[required], select[required]');
    
    // Clear previous error states
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    
    // Validate required fields
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            markFieldAsError(field);
            isValid = false;
        }
    });
    
    // Validate at least one crop is selected
    const cropCheckboxes = form.querySelectorAll('input[name="crops"]:checked');
    if (cropCheckboxes.length === 0) {
        const cropSection = form.querySelector('.checkbox-group');
        markFieldAsError(cropSection);
        isValid = false;
    }
    
    // Validate phone number
    const phone = form.querySelector('#phone').value;
    if (phone && !isValidPhoneNumber(phone)) {
        markFieldAsError(form.querySelector('#phone'));
        isValid = false;
    }
    
    // Validate email if provided
    const email = form.querySelector('#email').value;
    if (email && !isValidEmail(email)) {
        markFieldAsError(form.querySelector('#email'));
        isValid = false;
    }
    
    // Validate terms agreement
    const agreeTerms = form.querySelector('#agreeTerms');
    if (!agreeTerms.checked) {
        markFieldAsError(agreeTerms.parentElement);
        isValid = false;
    }
    
    return isValid;
}

function markFieldAsError(field) {
    field.classList.add('error');
    field.style.borderColor = '#f44336';
    
    // Remove error styling on focus/change
    const removeError = () => {
        field.classList.remove('error');
        field.style.borderColor = '#E0E0E0';
    };
    
    field.addEventListener('focus', removeError, { once: true });
    field.addEventListener('change', removeError, { once: true });
}

function isValidPhoneNumber(phone) {
    // Indian phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function collectFormData(form) {
    const formData = new FormData(form);
    const data = {
        timestamp: new Date().toISOString(),
        personal: {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            whatsapp: formData.get('whatsapp')
        },
        farm: {
            name: formData.get('farmName'),
            size: parseFloat(formData.get('farmSize')),
            state: formData.get('state'),
            district: formData.get('district'),
            village: formData.get('village')
        },
        crops: {
            primary: formData.getAll('crops'),
            organicCertified: formData.get('organicCertified'),
            experience: formData.get('farmingExperience')
        },
        additional: {
            description: formData.get('description'),
            agreeTerms: formData.get('agreeTerms') === 'on'
        }
    };
    
    return data;
}

async function submitFarmerRegistration(data) {
    // In a real application, this would be an API call
    // For demo purposes, we'll store in localStorage
    
    try {
        // Generate farmer ID
        const farmerId = 'farmer_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        
        // Add farmer ID to data
        data.farmerId = farmerId;
        data.status = 'pending_verification';
        data.registrationDate = new Date().toISOString();
        
        // Store in localStorage (in real app, this would be sent to backend)
        const existingFarmers = JSON.parse(localStorage.getItem('krishisathi_farmers') || '[]');
        existingFarmers.push(data);
        localStorage.setItem('krishisathi_farmers', JSON.stringify(existingFarmers));
        
        // Store current farmer session
        localStorage.setItem('krishisathi_current_farmer', JSON.stringify(data));
        
        return { success: true, farmerId: farmerId };
    } catch (error) {
        throw new Error('Failed to register farmer: ' + error.message);
    }
}

function addRealTimeValidation() {
    const form = document.getElementById('farmer-registration-form');
    
    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 10) {
                value = value.slice(0, 10);
            }
            this.value = value;
        });
    }
    
    // WhatsApp number formatting
    const whatsappInput = document.getElementById('whatsapp');
    if (whatsappInput) {
        whatsappInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 10) {
                value = value.slice(0, 10);
            }
            this.value = value;
        });
    }
    
    // Farm size validation
    const farmSizeInput = document.getElementById('farmSize');
    if (farmSizeInput) {
        farmSizeInput.addEventListener('input', function() {
            const value = parseFloat(this.value);
            if (value <= 0) {
                this.setCustomValidity('Farm size must be greater than 0');
            } else {
                this.setCustomValidity('');
            }
        });
    }
    
    // Email validation
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !isValidEmail(this.value)) {
                this.setCustomValidity('Please enter a valid email address');
                markFieldAsError(this);
            } else {
                this.setCustomValidity('');
            }
        });
    }
}

function trackFormProgress() {
    const form = document.getElementById('farmer-registration-form');
    const sections = form.querySelectorAll('.form-section');
    
    // Create progress indicator
    const progressIndicator = createProgressIndicator(sections.length);
    form.insertBefore(progressIndicator, form.firstChild);
    
    // Track section completion
    sections.forEach((section, index) => {
        const inputs = section.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('input', () => updateProgress(sections));
            input.addEventListener('change', () => updateProgress(sections));
        });
    });
}

function createProgressIndicator(sectionCount) {
    const progressContainer = document.createElement('div');
    progressContainer.className = 'form-progress';
    progressContainer.style.cssText = `
        margin-bottom: 2rem;
        padding: 1rem;
        background: var(--cream);
        border-radius: var(--radius-md);
        border: 1px solid #E0E0E0;
    `;
    
    const progressText = document.createElement('div');
    progressText.className = 'progress-text';
    progressText.style.cssText = `
        text-align: center;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: var(--primary-green);
    `;
    progressText.textContent = 'Registration Progress: 0%';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.cssText = `
        width: 100%;
        height: 8px;
        background: #E0E0E0;
        border-radius: 4px;
        overflow: hidden;
    `;
    
    const progressFill = document.createElement('div');
    progressFill.className = 'progress-fill';
    progressFill.style.cssText = `
        width: 0%;
        height: 100%;
        background: var(--gradient);
        transition: width 0.3s ease;
    `;
    
    progressBar.appendChild(progressFill);
    progressContainer.appendChild(progressText);
    progressContainer.appendChild(progressBar);
    
    return progressContainer;
}

function updateProgress(sections) {
    let totalFields = 0;
    let completedFields = 0;
    
    sections.forEach(section => {
        const inputs = section.querySelectorAll('input, select, textarea');
        
        inputs.forEach(input => {
            if (input.type === 'checkbox' && input.name === 'crops') {
                // Count crop checkboxes as a group
                const cropCheckboxes = section.querySelectorAll('input[name="crops"]');
                const checkedCrops = section.querySelectorAll('input[name="crops"]:checked');
                if (input === cropCheckboxes[0]) { // Count only once
                    totalFields++;
                    if (checkedCrops.length > 0) completedFields++;
                }
            } else if (input.type === 'checkbox' && input.name === 'agreeTerms') {
                totalFields++;
                if (input.checked) completedFields++;
            } else if (input.hasAttribute('required')) {
                totalFields++;
                if (input.value.trim()) completedFields++;
            }
        });
    });
    
    const progress = Math.round((completedFields / totalFields) * 100);
    
    const progressText = document.querySelector('.progress-text');
    const progressFill = document.querySelector('.progress-fill');
    
    if (progressText && progressFill) {
        progressText.textContent = `Registration Progress: ${progress}%`;
        progressFill.style.width = `${progress}%`;
    }
}

// Utility function for notifications (if not already available)
if (typeof showNotification === 'undefined') {
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${type === 'success' ? 'var(--secondary-green)' : '#f44336'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: var(--radius-md);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Slide in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }
}