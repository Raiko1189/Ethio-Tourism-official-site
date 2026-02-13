import React from 'react';

const About = () => {
    return (
        <div className="page-wrapper" style={{ padding: '10rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--text-5xl)',
                marginBottom: '3rem',
                letterSpacing: 'var(--ls-tight)'
            }}>About Our Mission</h1>
            <p style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--lh-relaxed)',
                color: 'var(--color-text-light)',
                fontWeight: 300
            }}>
                We are dedicated to promoting Ethiopia as a premier global tourism destination. Our mission is to showcase the beauty, history, and culture of the Land of Origins through modern technology and verified insights.
            </p>
            <div style={{ marginTop: '6rem' }}>
                <img src="https://images.unsplash.com/photo-1544013583-05f4208bd490?q=80&w=2000" alt="Ethiopian Culture" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
            </div>
        </div>
    );
};

export default About;
