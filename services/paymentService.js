import axios from 'axios';

export const createPaymentIntent = async (amount, currency = 'usd') => {
  try {
    const response = await axios.post('/api/create-payment-intent', {
      amount,
      currency,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
};

export const processPayment = async ({
  stripe,
  elements,
  paymentMethod,
  amount,
  currency,
  donorInfo,
}) => {
  try {
    // Create PaymentIntent
    const { clientSecret } = await createPaymentIntent(amount, currency);

    // Confirm the payment
    const result = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        payment_method: paymentMethod,
        return_url: `${window.location.origin}/donation-success`,
        receipt_email: donorInfo.email,
      },
    });

    if (result.error) {
      throw new Error(result.error.message);
    }

    return result;
  } catch (error) {
    console.error('Payment failed:', error);
    throw error;
  }
}; 