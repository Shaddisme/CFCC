export const ProgramsOverview = () => {
  return (
    <section className="bg-white section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-8 text-center">Comprehensive Support Programs</h2>
          <p className="body-text text-lg mb-12 text-center">
            At CFCC, we believe in providing holistic support that addresses every aspect of a child's development 
            and well-being. Our programs are designed to nurture growth, foster learning, and create lasting positive impact.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary p-8 rounded-lg">
              <h3 className="heading-3 mb-4">Our Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="body-text">Holistic development focus</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="body-text">Individual attention and care</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="body-text">Long-term sustainable impact</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="body-text">Community involvement</p>
                </li>
              </ul>
            </div>
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="heading-3 mb-4">Program Goals</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="body-text">Ensure proper nutrition and health</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="body-text">Provide psychological and social support</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="body-text">Develop talents and skills</p>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="body-text">Foster spiritual growth</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 