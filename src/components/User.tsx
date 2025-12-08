import React, { useState } from 'react';

export default function User() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Welcome to Vinsaraa! Your account has been created successfully.');
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    alert('Continue with Google authentication');
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-xl">
          
          {/* Back to Home Button */}
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#440504] transition-colors mb-8 group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Back to Home</span>
          </a>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Create new account<span className="text-[#440504]">.</span>
            </h1>
            <p className="text-gray-500 text-base">
              Already A Member? <a href="/login" className="text-[#440504] hover:underline font-medium">Log In</a>
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Full name</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-50 border-0 text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-[#440504] outline-none transition-all"
                  placeholder="Enter your name"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-50 border-0 text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-[#440504] outline-none transition-all"
                  placeholder="your@email.com"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Phone number</label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-50 border-0 text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-[#440504] outline-none transition-all"
                  placeholder="+91 00000 00000"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Address Line 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Address Line 1</label>
              <div className="relative">
                <input
                  type="text"
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-50 border-0 text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-[#440504] outline-none transition-all"
                  placeholder="Street address"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Address Line 2 */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Address Line 2</label>
              <div className="relative">
                <input
                  type="text"
                  name="address2"
                  value={formData.address2}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-50 border-0 text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-[#440504] outline-none transition-all"
                  placeholder="Apartment, suite (optional)"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-50 border-0 text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-[#440504] outline-none transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleSubmit}
                className="flex-1 px-8 py-4 bg-[#440504] hover:bg-[#5a0605] text-white font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Create account
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm text-gray-400">or continue with</span>
              </div>
            </div>

            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              className="w-full px-8 py-4 bg-white border-2 border-gray-200 hover:border-[#440504] text-gray-700 font-semibold transition-all flex items-center justify-center gap-3 group"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="group-hover:text-[#440504] transition-colors">Continue with Google</span>
            </button>
          </div>

        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#440504]/10 to-rose-900/10"></div>
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=1200&fit=crop" 
          alt="Fashion" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#440504]/80 via-[#440504]/20 to-transparent"></div>
        
        {/* Logo Overlay */}
        <div className="absolute bottom-12 left-12 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-1.5 4-4 6-8 6 0 4.5 3.5 8 8 10 4.5-2 8-5.5 8-10-4 0-6.5-2-8-6z"/>
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-light tracking-wider">vinsaraa</h2>
              <p className="text-sm text-white/80 italic">Where tradition meets modernity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}