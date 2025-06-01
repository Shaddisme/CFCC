import Layout from '../components/Layout';
import { HistorySection } from '../components/about/HistorySection';
import { VisionSection } from '../components/about/VisionSection';
import { TeamSection } from '../components/about/TeamSection';

export default function About() {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-primary">
        <div className="container">
          <h1 className="heading-1 text-center">About CFCC</h1>
          <p className="body-text text-lg text-center max-w-3xl mx-auto mt-6">
            Learn about our journey, vision, and the dedicated team behind Caring Faith Children's Center.
          </p>
        </div>
      </div>
      <HistorySection />
      <VisionSection />
      <TeamSection />
    </Layout>
  );
} 