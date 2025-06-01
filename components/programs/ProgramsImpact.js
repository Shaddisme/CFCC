export const ProgramsImpact = () => {
  const impactStats = [
    {
      number: "100+",
      label: "Children Supported",
      description: "Children receiving regular support through our programs"
    },
    {
      number: "3",
      label: "Core Programs",
      description: "Comprehensive programs addressing different needs"
    },
    {
      number: "24/7",
      label: "Care & Support",
      description: "Round-the-clock dedication to children's well-being"
    },
    {
      number: "50+",
      label: "Volunteers",
      description: "Dedicated volunteers supporting our mission"
    }
  ];

  return (
    <section className="bg-white section">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6">Our Impact</h2>
          <p className="body-text text-lg mb-12">
            Through our dedicated programs and the support of our community, we're making a real difference 
            in the lives of children. Here's a glimpse of our impact:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-primary p-6 rounded-lg">
                <div className="text-4xl font-poppins font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="font-poppins font-semibold text-lg mb-2">
                  {stat.label}
                </div>
                <p className="body-text text-sm">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <p className="body-text mb-8">
              Our programs continue to grow and evolve, adapting to the changing needs of our community 
              while maintaining our core mission of nurturing hope and empowering futures.
            </p>
            <a href="/get-involved" className="btn-primary">
              Support Our Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}; 