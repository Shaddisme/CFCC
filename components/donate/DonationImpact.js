export const DonationImpact = () => {
  const impactItems = [
    {
      amount: 25,
      impact: "Provides nutritious meals for a child for one week",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M3 3h18v18H3V3zm4 10l2-2m4 4l2-2m-6-4l8 8" />
        </svg>
      )
    },
    {
      amount: 50,
      impact: "Supplies educational materials and resources for a month",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      amount: 100,
      impact: "Enables participation in talent development programs",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      amount: 200,
      impact: "Provides comprehensive support for a child for one month",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-primary section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6 text-center">Your Impact</h2>
          <p className="body-text text-lg mb-12 text-center">
            See how your donation makes a real difference in the lives of children at CFCC. 
            Every contribution helps us provide essential care and support.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {impactItems.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg">
                <div className="flex items-start gap-6">
                  <div className="text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-poppins font-bold text-accent mb-2">
                      ${item.amount}
                    </div>
                    <p className="body-text">{item.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg">
            <h3 className="heading-3 mb-6 text-center">Annual Impact Report</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-poppins font-bold text-accent mb-2">90%</div>
                <p className="body-text">of donations directly support our programs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-poppins font-bold text-accent mb-2">1000+</div>
                <p className="body-text">children supported annually</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-poppins font-bold text-accent mb-2">100%</div>
                <p className="body-text">transparency in fund allocation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 