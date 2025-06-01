import Layout from '../components/Layout';
import { VolunteerSection } from '../components/get-involved/VolunteerSection';
import { SupportSection } from '../components/get-involved/SupportSection';
import { ImpactStories } from '../components/get-involved/ImpactStories';

export default function GetInvolved() {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-primary">
        <div className="container">
          <h1 className="heading-1 text-center">Get Involved</h1>
          <p className="body-text text-lg text-center max-w-3xl mx-auto mt-6">
            Join us in making a difference. There are many ways you can support our mission and help create positive change.
          </p>
        </div>
      </div>
      <VolunteerSection />
      <SupportSection />
      <ImpactStories />
    </Layout>
  );
} 