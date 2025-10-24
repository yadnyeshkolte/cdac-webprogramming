// Get form elements
const form = document.getElementById('myForm');
const nameInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');
const categorySelect = form.querySelector('select');
const ratingInputs = form.querySelectorAll('input[name="form-rating"]');
const feedbackTextarea = form.querySelector('textarea');
const submitBtn = form.querySelector('button[type="submit"]');

// Character counter for feedback
const charCountLabel = document.createElement('small');
charCountLabel.className = 'text-muted';
charCountLabel.textContent = '0/30 characters (minimum 30 required)';
feedbackTextarea.parentNode.appendChild(charCountLabel);

// Update character count
feedbackTextarea.addEventListener('input', function() {
    const count = this.value.length;
    charCountLabel.textContent = `${count}/30 characters (minimum 30 required)`;
    charCountLabel.className = count >= 30 ? 'text-success' : 'text-muted';
});

// Function to show error message
function showError(element, message) {
    // Remove existing error
    const existingError = element.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-danger small mt-1';
    errorDiv.textContent = message;
    element.parentNode.appendChild(errorDiv);
    element.classList.add('is-invalid');
}

// Function to clear error
function clearError(element) {
    const errorDiv = element.parentNode.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
}

// Email validation regex
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to get selected rating
function getSelectedRating() {
    for (let radio of ratingInputs) {
        if (radio.checked) {
            return radio.value;
        }
    }
    return null;
}

// Function to save data as XML
function saveAsXML(data) {
    const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<feedback>
    <name>${escapeXML(data.name)}</name>
    <email>${escapeXML(data.email)}</email>
    <category>${escapeXML(data.category)}</category>
    <rating>${escapeXML(data.rating)}</rating>
    <feedback>${escapeXML(data.feedback)}</feedback>
    <timestamp>${new Date().toISOString()}</timestamp>
</feedback>`;

    // Store in memory (you can download or send to server)
    const blob = new Blob([xmlData], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // Create download link
    const a = document.createElement('a');
    a.href = url;
    a.download = `feedback_${Date.now()}.xml`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    return xmlData;
}

// Function to escape XML special characters
function escapeXML(str) {
    return str.replace(/[<>&'"]/g, function(c) {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case "'": return '&apos;';
            case '"': return '&quot;';
        }
    });
}

// Function to show success message
function showSuccessMessage() {
    // Remove existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show m-5 mt-0';
    alertDiv.innerHTML = `
        <strong>Success!</strong> Your feedback has been submitted and saved as XML.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    form.parentNode.insertBefore(alertDiv, form);
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

// Form submission handler
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Validate Name
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
        isValid = false;
    } else {
        clearError(nameInput);
    }
    
    // Validate Email
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError(emailInput);
    }
    
    // Validate Category
    if (categorySelect.value === '' || categorySelect.selectedIndex === 0) {
        showError(categorySelect, 'Please select a product category');
        isValid = false;
    } else {
        clearError(categorySelect);
    }
    
    // Validate Rating
    const selectedRating = getSelectedRating();
    if (!selectedRating) {
        const ratingLabel = form.querySelector('label[for=""]');
        if (!document.querySelector('.rating-error')) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'rating-error text-danger small mt-1';
            errorDiv.textContent = 'Please select a rating';
            ratingLabel.parentNode.insertBefore(errorDiv, ratingLabel.nextSibling.nextSibling);
        }
        isValid = false;
    } else {
        const ratingError = document.querySelector('.rating-error');
        if (ratingError) {
            ratingError.remove();
        }
    }
    
    // Validate Feedback
    if (feedbackTextarea.value.trim() === '') {
        showError(feedbackTextarea, 'Feedback is required');
        isValid = false;
    } else if (feedbackTextarea.value.trim().length < 30) {
        showError(feedbackTextarea, 'Feedback must be at least 30 characters');
        isValid = false;
    } else {
        clearError(feedbackTextarea);
    }
    
    // If all valid, save data and show success
    if (isValid) {
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            category: categorySelect.options[categorySelect.selectedIndex].text,
            rating: selectedRating,
            feedback: feedbackTextarea.value.trim()
        };
        
        // Save as XML
        saveAsXML(formData);
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        form.reset();
        charCountLabel.textContent = '0/30 characters (minimum 30 required)';
        charCountLabel.className = 'text-muted';
        
        // Clear all validation classes
        form.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
            el.classList.remove('is-valid', 'is-invalid');
        });
    }
});

// Real-time validation on blur
nameInput.addEventListener('blur', function() {
    if (this.value.trim() !== '') {
        clearError(this);
    }
});

emailInput.addEventListener('blur', function() {
    if (this.value.trim() !== '' && isValidEmail(this.value.trim())) {
        clearError(this);
    }
});

categorySelect.addEventListener('change', function() {
    if (this.selectedIndex !== 0) {
        clearError(this);
    }
});

feedbackTextarea.addEventListener('blur', function() {
    if (this.value.trim().length >= 30) {
        clearError(this);
    }
});

console.log("Form validation script loaded successfully!");