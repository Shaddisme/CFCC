import Layout from '../components/Layout';
import Link from 'next/link';
import { HeroSection } from '../components/home/HeroSection';
import { MissionSection } from '../components/home/MissionSection';
import { ProgramsPreview } from '../components/home/ProgramsPreview';
import { GetInvolvedSection } from '../components/home/GetInvolvedSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <ProgramsPreview />
      <GetInvolvedSection />
    </Layout>
  );
} 