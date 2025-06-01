export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Board of Directors",
      members: [
        {
          name: "[Board Chair Name]",
          role: "Board Chair",
          description: "Leading CFCC's strategic direction and governance."
        },
        {
          name: "[Vice Chair Name]",
          role: "Vice Chair",
          description: "Supporting governance and strategic initiatives."
        },
        {
          name: "[Secretary Name]",
          role: "Secretary",
          description: "Managing board communications and documentation."
        }
      ]
    },
    {
      name: "Executive Team",
      members: [
        {
          name: "[Executive Director Name]",
          role: "Executive Director",
          description: "Overseeing daily operations and program implementation."
        },
        {
          name: "[Programs Director Name]",
          role: "Programs Director",
          description: "Managing educational and support programs."
        },
        {
          name: "[Operations Manager Name]",
          role: "Operations Manager",
          description: "Coordinating facility and resource management."
        }
      ]
    }
  ];

  return (
    <section className="bg-white section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 text-center mb-12">Our Leadership Team</h2>
          <div className="space-y-16">
            {teamMembers.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="heading-3 mb-8 text-center">{group.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {group.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="bg-primary p-6 rounded-lg text-center">
                      <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-accent text-2xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h4 className="font-poppins font-semibold text-lg mb-2">{member.name}</h4>
                      <p className="text-accent font-lato font-medium mb-3">{member.role}</p>
                      <p className="body-text text-sm">{member.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="body-text">
              Our team is dedicated to creating positive change in children's lives. 
              Together, we work towards fulfilling CFCC's mission and vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 