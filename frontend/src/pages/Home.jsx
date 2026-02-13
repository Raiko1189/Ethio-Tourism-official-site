import React from 'react';
import {
  HeroSection,
  DestinationsSection,
  PlanTripSection,
  ThingsToDoSection,
  InvestSection,
  StopoverSection
} from '../components/Sections';
import { MapPin, Calendar, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const MOCK_EVENTS = [
  {
    id: 1,
    title: "Timket (Ethiopian Epiphany)",
    location: "Gondar & Addis Ababa",
    image: "https://i.pinimg.com/736x/8d/3e/2c/8d3e2c60851e3f8a436979269559639c.jpg",
    date: "January 19"
  },
  {
    id: 2,
    title: "Genna (Ethiopian Christmas)",
    location: "Lalibela",
    image: "https://i.pinimg.com/736x/29/7e/c4/297ec48e06385311e5108269559639c.jpg",
    date: "January 7"
  },
  {
    id: 3,
    title: "Irreecha Festival",
    location: "Bishoftu & Addis Ababa",
    image: "https://i.pinimg.com/736x/fe/a9/5b/fea95b99c92e5f6a42ed0b6aad372d48.jpg",
    date: "October (Annual)"
  },
  {
    id: 4,
    title: "EU–Ethiopia Business Forum 2026",
    location: "Addis Ababa",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000",
    date: "02/15/2026"
  }
];

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />

      <div style={{ padding: '4rem 2rem', background: 'white' }}>
        <DestinationsSection />
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/destinations" style={styles.viewMoreBtn}>View All Destinations</Link>
        </div>
      </div>

      <div style={{ padding: '4rem 2rem', background: 'var(--color-gray-100)' }}>
        <PlanTripSection />
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/plan-trip" style={styles.viewMoreBtn}>Start Planning Your Journey</Link>
        </div>
      </div>

      <section style={{ padding: '6rem 2rem', background: 'white', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Upcoming Events</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 3rem auto', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>Discover the latest festivals, business forums, and cultural gatherings across Ethiopia.</p>
        <Link to="/events" style={{
          background: 'var(--color-primary)',
          color: 'white',
          padding: '1rem 3rem',
          borderRadius: 'var(--radius-md)',
          fontWeight: 700,
          fontSize: '1.1rem'
        }}>Browse Map & Events</Link>
      </section>

      <StopoverSection />
      <ThingsToDoSection />
      <InvestSection />

      <section id="ai-cta" style={{ padding: '6rem 2rem', textAlign: 'center', background: 'var(--color-primary)', color: 'white' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', color: 'white' }}>Need a Personal Guide?</h2>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2.5rem' }}>Our AI Travel Assistant is ready to help you discover the hidden gems of Ethiopia.</p>
        <Link to="/chat" style={{ padding: '1rem 2.5rem', background: 'white', color: 'var(--color-primary)', borderRadius: 'var(--radius-md)', fontWeight: 700 }}>Chat with our AI Guide</Link>
      </section>
    </div>
  );
};

const styles = {
  viewMoreBtn: {
    display: 'inline-block',
    padding: '0.75rem 2rem',
    border: '2px solid var(--color-primary)',
    color: 'var(--color-primary)',
    borderRadius: 'var(--radius-md)',
    fontWeight: 700,
    transition: 'all 0.3s ease'
  }
};

const EventCard = ({ event }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="event-card"
  >
    <img src={event.image} alt={event.title} className="event-image" />
    <div className="event-info">
      <h3 className="event-title">{event.title}</h3>
      <div className="event-location">
        <MapPin size={16} />
        <span>{event.location}</span>
      </div>
    </div>
  </motion.div>
);

export default Home;
