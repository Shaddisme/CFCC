export const DonationFAQ = () => {
  const faqs = [
    {
      question: "How are my donations used?",
      answer: "Your donations directly support our programs, including feeding programs, educational support, talent development, and psychological care. 90% of donations go directly to program support, with 10% used for administrative costs and sustainable growth."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes, CFCC is a registered non-profit organization, and all donations are tax-deductible. You will receive a donation receipt for your records."
    },
    {
      question: "Can I make a recurring donation?",
      answer: "Yes, you can set up monthly, quarterly, or annual recurring donations through our secure online platform. This helps us plan and sustain our programs effectively."
    },
    {
      question: "How do I sponsor a child?",
      answer: "Child sponsorship starts at $50 per month. You can select this option in our donation form, and we'll match you with a child and provide regular updates on their progress."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, bank transfers, and checks. All online transactions are processed through secure payment gateways."
    },
    {
      question: "How do I make a corporate donation?",
      answer: "For corporate donations or partnerships, please contact our development team at development@cfcc.org. We offer various partnership opportunities and can create customized giving programs."
    }
  ];

  return (
    <section className="bg-white section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6 text-center">Frequently Asked Questions</h2>
          <p className="body-text text-lg mb-12 text-center">
            Find answers to common questions about donating to CFCC. If you have additional questions, 
            please don't hesitate to contact us.
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-primary p-6 rounded-lg">
                <h3 className="heading-3 mb-3">{faq.question}</h3>
                <p className="body-text">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="heading-3 mb-6">Still Have Questions?</h3>
            <p className="body-text mb-8">
              Our team is here to help. Contact us for more information about donations and giving opportunities.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="btn-primary">
                Contact Us
              </button>
              <button className="btn-secondary">
                Download Giving Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 