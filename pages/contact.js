import Layout from '../components/Layout';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';

export default function Contact() {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-primary">
        <div className="container">
          <h1 className="heading-1 text-center">Contact Us</h1>
          <p className="body-text text-lg text-center max-w-3xl mx-auto mt-6">
            Have questions or want to get involved? We'd love to hear from you. 
            Reach out to us using the form below or through our contact information.
          </p>
        </div>
      </div>
      <div className="bg-white section">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 