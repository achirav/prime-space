import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ContactForm.css';

const ContactForm = () => {

  // Used to read query parameters 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Default agent name if none is passed in the URL
  const agentName = queryParams.get('agent') || 'our team';

  // Stores all inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agent: agentName
  });

  // store validation errors
  const [errors, setErrors] = useState({});

  
  const [isSubmitting, setIsSubmitting] = useState(false);

  //success message after submission
  const [submitSuccess, setSubmitSuccess] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // validation before submitting the form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);

    
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          agent: agentName
        });
      }, 1500);
    }
  };

  // Shows confirmation message instead of the form after success
  if (submitSuccess) {
    return (
      <div className="success-message">
        <h2>Thank You!</h2>
        <p>Your message to {agentName} has been sent successfully.</p>
        <p>We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return(

  );
}
export default ContactForm;