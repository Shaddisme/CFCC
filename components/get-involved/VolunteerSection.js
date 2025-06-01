export const VolunteerSection = () => {
  const volunteerOpportunities = [
    {
      title: "Program Support",
      description: "Assist in implementing our core programs, from feeding programs to talent development activities.",
      requirements: [
        "Minimum commitment of 4 hours per week",
        "Background check required",
        "Training provided",
        "Must be 18 or older"
      ]
    },
    {
      title: "Administrative Support",
      description: "Help with office tasks, documentation, and program coordination to keep our operations running smoothly.",
      requirements: [
        "Basic computer skills",
        "Attention to detail",
        "Flexible schedule",
        "Training provided"
      ]
    },
    {
      title: "Event Support",
      description: "Join us in organizing and running special events, fundraisers, and community outreach programs.",
      requirements: [
        "Available on weekends",
        "Good communication skills",
        "Team player",
        "Event experience a plus"
      ]
    }
  ];

  return (
    <section className="bg-white section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6">Volunteer Opportunities</h2>
          <p className="body-text text-lg mb-12">
            Our volunteers are the heart of our organization. Join our team and help make a lasting impact 
            in the lives of children. We offer various volunteer opportunities to match your skills and interests.
          </p>
          
          <div className="space-y-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-primary p-8 rounded-lg">
                <h3 className="heading-3 mb-4">{opportunity.title}</h3>
                <p className="body-text mb-6">{opportunity.description}</p>
                <div>
                  <h4 className="font-poppins font-semibold text-lg mb-4">Requirements:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {opportunity.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="body-text">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="heading-3 mb-6">Ready to Make a Difference?</h3>
            <p className="body-text mb-8">
              Fill out our volunteer application form and join our team of dedicated volunteers.
            </p>
            <button className="btn-primary">
              Apply to Volunteer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 