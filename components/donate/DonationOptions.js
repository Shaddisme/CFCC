import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '../../config/stripe';
import { processPayment } from '../../services/paymentService';

export const DonationOptions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    country: '',
    province: '',
    postalCode: '',
    amount: '',
    isMonthly: false,
    isCorporate: false,
    coverFees: false,
    message: '',
    isAnonymous: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAmountSelect = (amount) => {
    setFormData(prev => ({
      ...prev,
      amount: amount.toString()
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await processPayment({
        stripe: await stripePromise,
        amount: parseFloat(formData.amount),
        currency: 'usd',
        donorInfo: {
          email: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
          address: {
            line1: formData.address1,
            line2: formData.address2,
            city: formData.city,
            country: formData.country,
            postal_code: formData.postalCode,
          },
        },
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      // Handle successful payment
      window.location.href = '/donation-success';
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <section className="bg-white section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Monetary Donations */}
            <div className="mb-16">
              <h2 className="heading-2 mb-8">Monetary Donations</h2>
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-6">
                  <form onSubmit={handleSubmit}>
                    <div className="flex gap-4 mb-8">
                      <button
                        type="button"
                        className={`flex-1 ${!formData.isMonthly ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => setFormData(prev => ({ ...prev, isMonthly: false }))}
                      >
                        DONATE ONCE
                      </button>
                      <button
                        type="button"
                        className={`flex-1 ${formData.isMonthly ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => setFormData(prev => ({ ...prev, isMonthly: true }))}
                      >
                        DONATE MONTHLY
                      </button>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-poppins font-semibold mb-4">DONATION AMOUNT</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        {[50, 100, 250, 500].map((amount) => (
                          <button
                            key={amount}
                            className="p-3 border-2 border-accent rounded-lg hover:bg-primary transition-colors"
                            onClick={() => handleAmountSelect(amount)}
                          >
                            ${amount}
                          </button>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl">$</span>
                        <input
                          type="text"
                          placeholder="Custom amount"
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                          name="amount"
                          value={formData.amount}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox text-accent" name="coverFees" checked={formData.coverFees} onChange={handleChange} />
                        <span className="body-text">Make my gift go further. I'd like to cover the $0 processing fee so 100% of my donation goes to this charity.</span>
                      </label>
                    </div>

                    <div className="mb-8">
                      <textarea
                        placeholder="Write a private message to us (optional)"
                        className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      <p className="text-sm text-gray-500 mt-2">500 characters remaining</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-poppins font-semibold mb-4">DONOR & TAX RECEIPT INFORMATION</h3>
                      <div className="space-y-4">
                        <input
                          type="email"
                          placeholder="Email Address*"
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <label className="flex items-center gap-2">
                          <input type="checkbox" className="form-checkbox text-accent" name="isCorporate" checked={formData.isCorporate} onChange={handleChange} />
                          <span className="body-text">This is a corporate donation</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="First Name*"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                          <input
                            type="text"
                            placeholder="Last Name*"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Address line 1*"
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                          name="address1"
                          value={formData.address1}
                          onChange={handleChange}
                        />
                        <input
                          type="text"
                          placeholder="Address line 2 (optional)"
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                          name="address2"
                          value={formData.address2}
                          onChange={handleChange}
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="City*"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                          />
                          <select
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                          >
                            <option value="">Select Country</option>
                            <option value="KE">Kenya</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <select
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                            name="province"
                            value={formData.province}
                            onChange={handleChange}
                          >
                            <option value="">Select Province</option>
                          </select>
                          <input
                            type="text"
                            placeholder="Postal code"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-poppins font-semibold mb-4">PAYMENT INFORMATION</h3>
                      <div className="mb-4">
                        <div className="flex items-center gap-4 mb-4">
                          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          <span className="font-medium">SECURE PAYMENT OPTIONS</span>
                        </div>
                        <div className="flex gap-4 mb-4">
                          <label className="flex items-center gap-2">
                            <input type="radio" name="payment" value="credit" checked className="form-radio text-accent" />
                            <span>Credit Card</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="payment" value="paypal" className="form-radio text-accent" />
                            <span>PayPal</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="payment" value="google" className="form-radio text-accent" />
                            <span>Google Pay</span>
                          </label>
                          <label className="flex items-center gap-2">
                            <input type="radio" name="payment" value="gift" className="form-radio text-accent" />
                            <span>Gift Card</span>
                          </label>
                        </div>
                        <div className="space-y-4">
                          <input
                            type="text"
                            placeholder="Credit card number*"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                          />
                          <div className="grid grid-cols-2 gap-4">
                            <input
                              type="text"
                              placeholder="Expiry (MM/YY)*"
                              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                            />
                            <input
                              type="text"
                              placeholder="CVV*"
                              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                            />
                          </div>
                          <input
                            type="text"
                            placeholder="Name on card*"
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-poppins font-semibold mb-4">DEDICATION INFORMATION</h3>
                      <div className="flex gap-4 mb-4">
                        <button className="p-3 border-2 border-accent rounded-lg hover:bg-primary transition-colors">
                          In Memory Of
                        </button>
                        <button className="p-3 border-2 border-accent bg-primary rounded-lg">
                          In Honour Of
                        </button>
                        <button className="p-3 border-2 border-accent rounded-lg hover:bg-primary transition-colors">
                          No dedication
                        </button>
                      </div>
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Enter name (In Honour Of)*"
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                        />
                        <select
                          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                        >
                          <option value="">Send an eCard</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-poppins font-semibold mb-4">ANONYMITY</h3>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox text-accent" name="isAnonymous" checked={formData.isAnonymous} onChange={handleChange} />
                        <span className="body-text">Make my donation anonymous.</span>
                      </label>
                    </div>

                    {error && (
                      <div className="text-red-500 mb-4">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn-primary w-full py-4 text-lg"
                      disabled={loading}
                    >
                      {loading ? 'Processing...' : 'Complete Donation Now'}
                    </button>

                    <p className="text-sm text-center text-gray-600 mt-4">
                      By completing this donation you agree to the <a href="#" className="text-accent">Terms of Service</a> and <a href="#" className="text-accent">Privacy Policy</a>.
                    </p>
                  </form>
                </div>
              </div>
            </div>

            {/* Clothing Donations */}
            <div className="mb-16">
              <h2 className="heading-2 mb-8">Clothing Donations</h2>
              <div className="bg-primary p-8 rounded-lg">
                <h3 className="heading-3 mb-4">Accepted Items</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="body-text">Clean, gently used clothing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="body-text">School uniforms</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="body-text">Shoes and socks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="body-text">Warm clothing items</span>
                  </li>
                </ul>
                <p className="body-text mb-6">
                  Please ensure all clothing items are clean, in good condition, and appropriate for children's use.
                  Contact us to arrange for clothing donation drop-offs or pickups.
                </p>
                <button className="btn-primary">
                  Schedule Clothing Donation
                </button>
              </div>
            </div>

            {/* Retail Donations */}
            <div>
              <h2 className="heading-2 mb-8">Retail Donations</h2>
              <div className="bg-primary p-8 rounded-lg">
                <h3 className="heading-3 mb-4">Partner With Us</h3>
                <p className="body-text mb-6">
                  We welcome partnerships with retail stores and businesses for regular or one-time donations 
                  of new clothing, school supplies, and other essential items for children.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="body-text">New clothing and accessories</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="body-text">School supplies and backpacks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="body-text">Personal care items</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="body-text">Educational materials</span>
                  </li>
                </ul>
                <button className="btn-primary">
                  Become a Retail Partner
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Elements>
  );
}; 