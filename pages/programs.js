import Layout from '../components/Layout';
import { ProgramsOverview } from '../components/programs/ProgramsOverview';
import { ProgramsList } from '../components/programs/ProgramsList';
import { ProgramsImpact } from '../components/programs/ProgramsImpact';

export default function Programs() {
  return (
    <Layout>
      <div className="pt-20 pb-16 bg-primary">
        <div className="container">
          <h1 className="heading-1 text-center">Our Programs</h1>
          <p className="body-text text-lg text-center max-w-3xl mx-auto mt-6">
            Discover how we're making a difference through our comprehensive programs and initiatives.
          </p>
        </div>
      </div>
      <ProgramsOverview />
      <ProgramsList />
      <ProgramsImpact />
    </Layout>
  );
} 