import Link from 'next/link';

const programs = [
  {
    title: "Feeding Program",
    description: "Providing nutritious meals and promoting healthy eating habits for children in need.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
          d="M3 3h18v18H3V3zm4 10l2-2m4 4l2-2m-6-4l8 8" />
      </svg>
    )
  },
  {
    title: "Social & Psychological Support",
    description: "Comprehensive support services focusing on mental health and social development.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Talent Development",
    description: "Programs focused on discovering and nurturing children's unique talents and abilities.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  }
];

export const ProgramsPreview = () => {
  return (
    <section className="bg-primary section">
      <div className="container">
        <h2 className="heading-2 text-center mb-12">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-accent mb-6">
                {program.icon}
              </div>
              <h3 className="heading-3 mb-4">{program.title}</h3>
              <p className="body-text mb-6">{program.description}</p>
              <Link href="/programs" className="text-accent hover:text-accent/80 transition-colors font-lato">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 