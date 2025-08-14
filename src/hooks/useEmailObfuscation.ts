import { useState, useEffect } from 'react';

export const useEmailObfuscation = (encodedEmail: string) => {
  const [decodedEmail, setDecodedEmail] = useState('');

  useEffect(() => {
    try {
      const decoded = atob(encodedEmail);
      setDecodedEmail(decoded);
    } catch {
      console.warn('Failed to decode email');
      setDecodedEmail('contact@marcdyportfolio.com'); // fallback
    }
  }, [encodedEmail]);

  return decodedEmail;
};