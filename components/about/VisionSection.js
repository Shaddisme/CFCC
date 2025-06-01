export const VisionSection = () => {
  return (
    <section className="bg-primary section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="heading-2 mb-6">Our Vision</h2>
              <p className="body-text">
                To establish a self-sufficient facility that acts as a ray of hope, giving kids the chance to flourish 
                and make a difference in their communities and beyond.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h2 className="heading-2 mb-6">Our Mission</h2>
              <p className="body-text">
                To foster a nurturing environment that promotes education, well-being, and self-sufficiency for those in need, 
                creating lasting positive change in our community.
              </p>
            </div>
          </div>
          <div className="mt-12 bg-white p-8 rounded-lg">
            <h2 className="heading-2 mb-6">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Compassion",
                  description: "We lead with empathy and understanding in all our actions."
                },
                {
                  title: "Excellence",
                  description: "We strive for the highest standards in our care and services."
                },
                {
                  title: "Integrity",
                  description: "We maintain transparency and honesty in all our dealings."
                },
                {
                  title: "Empowerment",
                  description: "We believe in enabling children to reach their full potential."
                },
                {
                  title: "Community",
                  description: "We foster strong relationships and collective support."
                },
                {
                  title: "Innovation",
                  description: "We continuously seek better ways to serve our children."
                }
              ].map((value, index) => (
                <div key={index}>
                  <h3 className="heading-3 mb-2">{value.title}</h3>
                  <p className="body-text">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 