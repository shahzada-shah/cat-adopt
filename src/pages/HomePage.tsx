import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { TeamSection } from '../components/TeamSection';
import { FeedbackSection } from '../components/FeedbackSection';
import { ServicesSection } from '../components/ServicesSection';
import { AppointmentSection } from '../components/AppointmentSection';
import { BlogSection } from '../components/BlogSection';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <TeamSection />
      <FeedbackSection />
      <ServicesSection />
      <AppointmentSection />
      <BlogSection />
    </>
  );
};
