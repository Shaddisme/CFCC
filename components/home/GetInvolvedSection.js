import Link from 'next/link';

export const GetInvolvedSection = () => {
  return (
    <section className="bg-white section">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6">Make a Difference Today</h2>
          <p className="body-text text-lg mb-12 max-w-2xl mx-auto">
            Your support helps us continue our mission of nurturing and empowering children. 
            Join us in creating positive change and giving hope to those who need it most.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary p-8 rounded-lg">
              <h3 className="heading-3 mb-4">Donate</h3>
              <p className="body-text mb-6">
                Your financial support enables us to provide essential services, 
                meals, and educational resources to children in need.
              </p>
              <Link href="/donate" className="btn-primary inline-block">
                Support Our Cause
              </Link>
            </div>
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="heading-3 mb-4">Volunteer</h3>
              <p className="body-text mb-6">
                Share your time and skills to help make a lasting impact 
                in the lives of children in our community.
              </p>
              <Link href="/get-involved" className="btn-secondary inline-block">
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 