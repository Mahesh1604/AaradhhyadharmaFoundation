import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1); // 1: email, 2: verification, 3: new password
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Inline styles for enhanced visual appeal
  const containerStyle = {
    maxWidth: '450px',
    margin: '2rem auto',
    padding: '0 1rem'
  };

  const titleStyle = {
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#2c3e50',
    fontSize: '2.5rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  };

  const cardStyle = {
    padding: '2rem',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
    borderRadius: '16px',
    border: '1px solid #eef1f4',
    backgroundColor: '#ffffff',
    borderTop: '4px solid #ffc107'
  };

  const formLabelStyle = {
    fontWeight: '500',
    color: '#495057',
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const formControlStyle = {
    border: '2px solid #e9ecef',
    borderRadius: '8px',
    padding: '0.75rem',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease'
  };

  const submitButtonStyle = {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#ffffff',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem'
  };

  const disabledButtonStyle = {
    ...submitButtonStyle,
    backgroundColor: '#6c757d',
    cursor: 'not-allowed'
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: '500'
  };

  const alertStyle = {
    borderRadius: '8px',
    border: 'none',
    padding: '0.75rem 1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem'
  };

  const stepIndicatorStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
    gap: '1rem'
  };

  const stepStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    fontSize: '1.1rem',
    border: '2px solid #e9ecef',
    backgroundColor: '#f8f9fa'
  };

  const activeStepStyle = {
    ...stepStyle,
    backgroundColor: '#007bff',
    color: '#ffffff',
    borderColor: '#007bff'
  };

  const completedStepStyle = {
    ...stepStyle,
    backgroundColor: '#28a745',
    color: '#ffffff',
    borderColor: '#28a745'
  };

  const handleSendVerificationCode = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccess('Verification code sent to your email!');
      setStep(2);
    }, 2000);
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    if (!verificationCode) {
      setError('Please enter the verification code.');
      return;
    }
    
    if (verificationCode.length !== 6) {
      setError('Verification code must be 6 digits.');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccess('Code verified successfully!');
      setStep(3);
    }, 2000);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccess('Password reset successfully! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }, 2000);
  };

  const resendCode = () => {
    setIsLoading(true);
    setError('');
    
    setTimeout(() => {
      setIsLoading(false);
      setSuccess('New verification code sent!');
    }, 2000);
  };

  return (
    <div className="container my-5" style={containerStyle}>
      <h1 style={titleStyle}>
        <i className="bi bi-key text-warning"></i>
        Forgot Password
      </h1>
      
      <div className="card" style={cardStyle}>
        {/* Step Indicator */}
        <div style={stepIndicatorStyle}>
          <div style={step === 1 ? activeStepStyle : step > 1 ? completedStepStyle : stepStyle}>
            {step > 1 ? <i className="bi bi-check"></i> : '1'}
          </div>
          <div style={step === 2 ? activeStepStyle : step > 2 ? completedStepStyle : stepStyle}>
            {step > 2 ? <i className="bi bi-check"></i> : '2'}
          </div>
          <div style={step === 3 ? activeStepStyle : stepStyle}>
            3
          </div>
        </div>

        {error && <div className="alert alert-danger" style={alertStyle}>
          <i className="bi bi-exclamation-triangle-fill"></i>
          {error}
        </div>}

        {success && <div className="alert alert-success" style={alertStyle}>
          <i className="bi bi-check-circle-fill"></i>
          {success}
        </div>}

        {/* Step 1: Email Input */}
        {step === 1 && (
          <form onSubmit={handleSendVerificationCode}>
            <div className="mb-3">
              <label className="form-label" style={formLabelStyle}>
                <i className="bi bi-envelope"></i>
                Email Address
              </label>
              <input 
                type="email" 
                className="form-control" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your registered email"
                required 
                style={formControlStyle}
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={isLoading ? disabledButtonStyle : submitButtonStyle}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="bi bi-hourglass-split"></i>
                  Sending...
                </>
              ) : (
                <>
                  <i className="bi bi-send"></i>
                  Send Verification Code
                </>
              )}
            </button>
          </form>
        )}

        {/* Step 2: Verification Code */}
        {step === 2 && (
          <form onSubmit={handleVerifyCode}>
            <div className="mb-3">
              <label className="form-label" style={formLabelStyle}>
                <i className="bi bi-shield-check"></i>
                Verification Code
              </label>
              <input 
                type="text" 
                className="form-control" 
                value={verificationCode} 
                onChange={(e) => setVerificationCode(e.target.value)} 
                placeholder="Enter 6-digit code"
                maxLength="6"
                required 
                style={formControlStyle}
              />
              <small className="text-muted">
                We've sent a 6-digit verification code to {email}
              </small>
            </div>
            <button 
              type="submit" 
              className="btn btn-primary mb-3" 
              style={isLoading ? disabledButtonStyle : submitButtonStyle}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="bi bi-hourglass-split"></i>
                  Verifying...
                </>
              ) : (
                <>
                  <i className="bi bi-check-circle"></i>
                  Verify Code
                </>
              )}
            </button>
            <div className="text-center">
              <button 
                type="button" 
                className="btn btn-link" 
                onClick={resendCode}
                disabled={isLoading}
                style={linkStyle}
              >
                <i className="bi bi-arrow-clockwise"></i>
                Resend Code
              </button>
            </div>
          </form>
        )}

        {/* Step 3: New Password */}
        {step === 3 && (
          <form onSubmit={handleResetPassword}>
            <div className="mb-3">
              <label className="form-label" style={formLabelStyle}>
                <i className="bi bi-lock"></i>
                New Password
              </label>
              <input 
                type="password" 
                className="form-control" 
                value={newPassword} 
                onChange={(e) => setNewPassword(e.target.value)} 
                placeholder="Enter new password"
                required 
                style={formControlStyle}
              />
              <small className="text-muted">
                Password must be at least 8 characters long
              </small>
            </div>
            <div className="mb-3">
              <label className="form-label" style={formLabelStyle}>
                <i className="bi bi-lock-fill"></i>
                Confirm New Password
              </label>
              <input 
                type="password" 
                className="form-control" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                placeholder="Confirm new password"
                required 
                style={formControlStyle}
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-success" 
              style={isLoading ? disabledButtonStyle : submitButtonStyle}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="bi bi-hourglass-split"></i>
                  Resetting...
                </>
              ) : (
                <>
                  <i className="bi bi-check-circle"></i>
                  Reset Password
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-3 text-center">
          <span style={{color: '#6c757d'}}>
            Remember your password? <a href="/login" style={linkStyle}>Back to Login</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
