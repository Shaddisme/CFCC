import Layout from '../components/Layout';

export default function DonationSuccess() {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Thank You for Your Donation!</h1>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <svg
                className="w-20 h-20 text-green-500 mx-auto mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="body-text text-lg mb-6">
                Your donation has been successfully processed. A confirmation email has been sent to your email address.
              </p>
              <p className="body-text mb-8">
                Your support helps us continue our mission of nurturing hope and empowering futures.
                Thank you for making a difference in children's lives.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/" className="btn-secondary">
                  Return Home
                </a>
                <a href="/get-involved" className="btn-primary">
                  Get More Involved
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 