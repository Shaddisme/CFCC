export const SupportSection = () => {
  const supportWays = [
    {
      title: "Make a Donation",
      description: "Your financial support helps us provide essential services and resources to children in need.",
      options: [
        "One-time donation",
        "Monthly giving program",
        "Sponsor a child",
        "In-kind donations"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Corporate Partnerships",
      description: "Partner with us to create lasting impact through corporate social responsibility initiatives.",
      options: [
        "Program sponsorship",
        "Employee volunteering",
        "Matching gifts",
        "Event sponsorship"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Spread the Word",
      description: "Help us raise awareness about our mission and the importance of supporting children in need.",
      options: [
        "Share on social media",
        "Join our newsletter",
        "Attend our events",
        "Become an ambassador"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-primary section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">Ways to Support</h2>
          <p className="body-text text-lg mb-12">
            Your support enables us to continue our mission of nurturing hope and empowering futures. 
            Discover the various ways you can contribute to our cause.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportWays.map((way, index) => (
              <div key={index} className="bg-white p-8 rounded-lg">
                <div className="text-accent mb-6">
                  {way.icon}
                </div>
                <h3 className="heading-3 mb-4">{way.title}</h3>
                <p className="body-text mb-6">{way.description}</p>
                <ul className="space-y-3">
                  {way.options.map((option, optionIndex) => (
                    <li key={optionIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="body-text">{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/donate" className="btn-primary">
              Support Our Cause
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}; 