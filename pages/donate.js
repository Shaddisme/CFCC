import Layout from '../components/Layout';
import { DonationOptions } from '../components/donate/DonationOptions';
import { DonationImpact } from '../components/donate/DonationImpact';
import { DonationFAQ } from '../components/donate/DonationFAQ';

export default function Donate() {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-primary">
        <div className="container">
          <h1 className="heading-1 text-center">Support Our Cause</h1>
          <p className="body-text text-lg text-center max-w-3xl mx-auto mt-6">
            Your donation helps us provide essential care, support, and opportunities for children in need. 
            Every contribution makes a difference.
          </p>
        </div>
      </div>
      <DonationOptions />
      <DonationImpact />
      <DonationFAQ />
    </Layout>
  );
} 