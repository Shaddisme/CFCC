import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="relative bg-primary py-20 sm:py-32">
      <div className="container">
        <div className="text-center">
          <h1 className="heading-1 mb-6">
            Nurturing Hope,<br />Empowering Futures
          </h1>
          <p className="body-text text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Our mission is to foster a nurturing environment that promotes education, well-being, and self-sufficiency for those in need.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/donate" className="btn-primary">
              Donate Now
            </Link>
            <Link href="/get-involved" className="btn-secondary">
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}; 