import { useState } from 'react';

interface ValidationResult {
  valid: boolean;
  error?: string;
}

export const useFormValidation = () => {
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);

  // Rate limiting for form submissions
  const isRateLimited = () => {
    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmissionTime;
    const minInterval = 30000; // 30 seconds between submissions
    return timeSinceLastSubmission < minInterval;
  };

  const getRemainingCooldown = () => {
    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmissionTime;
    const minInterval = 30000;
    return Math.ceil((minInterval - timeSinceLastSubmission) / 1000);
  };

  // Enhanced form validation
  const validateForm = (formData: FormData): ValidationResult => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    // Basic spam detection
    const spamKeywords = ['viagra', 'casino', 'loan', 'bitcoin', 'crypto', 'investment'];
    const content = `${name} ${message}`.toLowerCase();
    
    if (spamKeywords.some(keyword => content.includes(keyword))) {
      return { valid: false, error: 'Message contains prohibited content.' };
    }
    
    if (name && name.length > 100) {
      return { valid: false, error: 'Name is too long.' };
    }
    
    if (message && message.length > 2000) {
      return { valid: false, error: 'Message is too long (max 2000 characters).' };
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { valid: false, error: 'Please enter a valid email address.' };
    }
    
    return { valid: true };
  };

  const recordSubmission = () => {
    setLastSubmissionTime(Date.now());
  };

  return {
    isRateLimited,
    getRemainingCooldown,
    validateForm,
    recordSubmission
  };
};