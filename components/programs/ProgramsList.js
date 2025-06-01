export const ProgramsList = () => {
  const programs = [
    {
      title: "Feeding Program",
      description: "Our feeding program ensures that every child receives proper nutrition through regular, balanced meals.",
      features: [
        "Nutritious daily meals",
        "Dietary planning and monitoring",
        "Health and nutrition education",
        "Special dietary accommodations"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M3 3h18v18H3V3zm4 10l2-2m4 4l2-2m-6-4l8 8" />
        </svg>
      )
    },
    {
      title: "Social & Psychological Support",
      description: "We provide comprehensive support services to ensure emotional and social well-being of our children.",
      features: [
        "Individual counseling",
        "Group therapy sessions",
        "Life skills workshops",
        "Family support services"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Talent Development",
      description: "Our talent development program focuses on discovering and nurturing each child's unique abilities.",
      features: [
        "Arts and crafts workshops",
        "Music and dance classes",
        "Sports activities",
        "Skills training programs"
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-primary section">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg p-8 mb-8 last:mb-0">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="text-accent mb-4">
                    {program.icon}
                  </div>
                  <h3 className="heading-3 mb-4">{program.title}</h3>
                  <p className="body-text">{program.description}</p>
                </div>
                <div className="md:w-2/3">
                  <h4 className="font-poppins font-semibold text-lg mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="body-text">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 