export const ImpactStories = () => {
  const stories = [
    {
      quote: "Volunteering at CFCC has been one of the most rewarding experiences of my life. Seeing the direct impact we make in children's lives is incredible.",
      author: "Sarah M.",
      role: "Program Support Volunteer",
      duration: "2 years"
    },
    {
      quote: "Through corporate partnership with CFCC, our team has found a meaningful way to give back to the community. The organization's transparency and impact are remarkable.",
      author: "John D.",
      role: "Corporate Partner",
      duration: "1.5 years"
    },
    {
      quote: "The monthly giving program makes it easy to contribute consistently. Knowing that my support helps provide regular meals and care for children is deeply fulfilling.",
      author: "Michael R.",
      role: "Monthly Donor",
      duration: "3 years"
    }
  ];

  return (
    <section className="bg-white section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-6 text-center">Impact Stories</h2>
          <p className="body-text text-lg mb-12 text-center">
            Hear from our volunteers, donors, and partners about their experiences and the impact 
            they've helped create through CFCC.
          </p>

          <div className="space-y-8">
            {stories.map((story, index) => (
              <div key={index} className="bg-primary p-8 rounded-lg">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-accent text-2xl font-bold">
                        {story.author.split(' ')[0][0]}{story.author.split(' ')[1][0]}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <svg className="w-8 h-8 text-accent mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="body-text text-lg italic mb-6">
                      {story.quote}
                    </blockquote>
                    <div>
                      <p className="font-poppins font-semibold">{story.author}</p>
                      <p className="text-accent">{story.role}</p>
                      <p className="text-sm">Supporting CFCC for {story.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="heading-3 mb-6">Share Your Story</h3>
            <p className="body-text mb-8">
              Are you a volunteer, donor, or partner? We'd love to hear about your experience with CFCC.
            </p>
            <button className="btn-secondary">
              Submit Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 