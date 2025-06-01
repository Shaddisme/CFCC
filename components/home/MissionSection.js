import Link from 'next/link';

export const MissionSection = () => {
  return (
    <section className="bg-white section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 mb-6">Our Story</h2>
            <p className="body-text mb-6">
              Caring Faith Children Centre (CFCC) was established to provide support and hope to less privileged children. 
              The organization's founding was inspired by a poignant story that deeply moved its founders, motivating them 
              to take action and help children facing similar circumstances.
            </p>
            <p className="body-text mb-6">
              With the support of family and friends, CFCC was formed to create a healthy environment that addresses 
              the holistic needs of these children. The organization is also committed to sharing its model and lessons 
              learned with others who wish to establish similar centers.
            </p>
            <Link href="/about" className="text-accent hover:text-accent/80 transition-colors font-lato">
              Learn more about our story →
            </Link>
          </div>
          <div className="space-y-8">
            <div className="bg-primary p-8 rounded-lg">
              <h3 className="heading-3 mb-4">Our Vision</h3>
              <p className="body-text">
                To establish a self-sufficient facility that acts as a ray of hope, giving kids the chance to flourish 
                and make a difference in their communities and beyond.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="heading-3 mb-4">Our Impact</h3>
              <p className="body-text">
                CFCC operates with a governance structure that includes a Board and an Executive Director to manage 
                its affairs and achieve its objectives, ensuring sustainable impact in our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 