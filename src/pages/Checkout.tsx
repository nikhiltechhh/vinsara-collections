import { useState } from "react";
import { useCart } from "@/pages/CartContext";
import { ChevronDown, Info } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();
  const [emailOffers, setEmailOffers] = useState(false);
  const [saveInfo, setSaveInfo] = useState(false);
  const [billingAddress, setBillingAddress] = useState("same");
  const [discountCode, setDiscountCode] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    state: "Telangana",
    pinCode: "",
    phone: "",
    country: "India"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log("Order submitted:", formData);
    // Handle payment processing here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          
          {/* Left Side - Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200"
          >
            <div className="space-y-8">
              
              {/* Contact Section */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Contact</h2>
                 <Link to="/user">
  <button
    type="button"
    className="text-sm text-blue-600 hover:underline"
  >
    Sign in
  </button>
</Link>
                </div>
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                
                {/* <label className="flex items-center mt-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={emailOffers}
                    onChange={(e) => setEmailOffers(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Email me with news and offers</span>
                </label> */}
              </div>

              {/* Delivery Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Delivery</h2>
                
                <div className="space-y-4">
                  <div className="relative">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer"
                      style={{ WebkitAppearance: 'menulist', MozAppearance: 'menulist' }}
                    >
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Italy">Italy</option>
                      <option value="Spain">Spain</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Austria">Austria</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Norway">Norway</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Finland">Finland</option>
                      <option value="Poland">Poland</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Greece">Greece</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Japan">Japan</option>
                      <option value="South Korea">South Korea</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Israel">Israel</option>
                      <option value="Turkey">Turkey</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Chile">Chile</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Peru">Peru</option>
                      <option value="Egypt">Egypt</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Nepal">Nepal</option>
                      <option value="China">China</option>
                      <option value="Russia">Russia</option>
                    </select>
                    <label className="absolute -top-2 left-3 px-1 bg-white text-xs text-gray-600">
                      Country/Region
                    </label>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* <input
                    type="text"
                    name="company"
                    placeholder="Company (optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  /> */}

                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />

                  <input
                    type="text"
                    name="apartment"
                    placeholder="Apartment, suite, etc. (optional)"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />

                  <div className="grid md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <div className="relative">
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer"
                        style={{ WebkitAppearance: 'menulist', MozAppearance: 'menulist' }}
                      >
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Ladakh">Ladakh</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      name="pinCode"
                      placeholder="PIN code"
                      value={formData.pinCode}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <Info className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>

                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={saveInfo}
                      onChange={(e) => setSaveInfo(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Save this information for next time</span>
                  </label>
                </div>
              </div>

              {/* Shipping Method */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Shipping method</h2>
                <div className="bg-gray-50 border border-gray-300 rounded-md p-4 text-sm text-gray-600 text-center">
                  Enter your shipping address to view available shipping methods.
                </div>
              </div>

              {/* Payment Section */}
              <div>
                <h2 className="text-xl font-semibold mb-2">Payment</h2>
                <p className="text-sm text-gray-600 mb-4">All transactions are secure and encrypted.</p>
                
                <div className="border border-gray-300 rounded-md">
                  <div className="p-4 bg-blue-50 border-b border-gray-300">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <span className="text-sm font-medium">Razorpay Secure (UPI, Cards, Wallets)</span>
                      <div className="flex gap-2 items-center flex-wrap">
                        {/* UPI Icon */}
                        <div className="h-7 w-12 bg-white rounded border border-gray-200 flex items-center justify-center">
                          <svg className="h-5 w-10" viewBox="0 0 40 16" fill="none">
                            <circle cx="8" cy="8" r="7" fill="#097939" opacity="0.8"/>
                            <circle cx="20" cy="8" r="7" fill="#F37F20" opacity="0.8"/>
                            <circle cx="32" cy="8" r="7" fill="#5F259F" opacity="0.8"/>
                          </svg>
                        </div>
                        
                        {/* Visa Icon */}
                        <div className="h-7 w-12 bg-white rounded border border-gray-200 flex items-center justify-center">
                          <svg className="h-4 w-10" viewBox="0 0 40 13" fill="none">
                            <path d="M16.5 1L13 12h3l3.5-11h-3z" fill="#1434CB"/>
                            <path d="M8.5 1L5 12h3l3.5-11h-3z" fill="#1434CB"/>
                            <path d="M26 1l-2 6.5L22 1h-3l4 11h3l4-11h-4z" fill="#1434CB"/>
                            <path d="M36 1h-3l-2.5 11h3L36 1z" fill="#1434CB"/>
                          </svg>
                        </div>
                        
                        {/* Mastercard Icon */}
                        <div className="h-7 w-12 bg-white rounded border border-gray-200 flex items-center justify-center">
                          <svg className="h-5 w-9" viewBox="0 0 36 22" fill="none">
                            <circle cx="13" cy="11" r="10" fill="#EB001B"/>
                            <circle cx="23" cy="11" r="10" fill="#F79E1B"/>
                          </svg>
                        </div>
                        
                        {/* Rupay Icon */}
                        <div className="h-7 w-12 bg-white rounded border border-gray-200 flex items-center justify-center">
                          <svg className="h-4 w-10" viewBox="0 0 40 16" fill="none">
                            <rect width="40" height="16" rx="2" fill="#097939"/>
                            <path d="M8 4h3l2 8h-3L8 4zm7 0h3l2 8h-3l-2-8zm7 0h3v8h-3V4z" fill="white"/>
                          </svg>
                        </div>
                        
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded font-medium text-gray-700">+15</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 text-center bg-white">
                    <div className="mb-4">
                      <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect x="3" y="8" width="18" height="12" rx="2" strokeWidth="2"/>
                        <path d="M3 10h18M7 15h6" strokeWidth="2"/>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">
                      After clicking "Pay now", you will be redirected to<br />
                      Razorpay Secure (UPI, Cards, Int'l Cards, Wallets) to<br />
                      complete your purchase securely.
                    </p>
                  </div>
                </div>
              </div>

             

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gray-900 text-white py-4 rounded-md font-medium hover:bg-gray-800 transition-colors text-lg"
              >
                Pay now
              </button>
            </div>
          </motion.div>

          {/* Right Side - Order Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 space-y-6">
              
              {/* Cart Items */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-md border border-gray-200"
                      />
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-600 text-white text-xs rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.size}</p>
                    </div>
                    <p className="text-sm font-semibold">₹{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              {/* Discount Code */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Discount code or gift card"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button 
                  type="button"
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 font-medium transition-colors"
                >
                  Apply
                </button>
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm items-center">
                  <div className="flex items-center gap-1">
                    <span>Shipping</span>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-gray-500 text-xs">Enter shipping address</span>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-lg font-semibold">Total</span>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 mr-2">INR</span>
                    <span className="text-2xl font-bold">₹{cartTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;