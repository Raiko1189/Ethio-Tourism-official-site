import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.section}>
                    <h3 style={styles.title}>Visit AITopia</h3>
                    <p style={styles.text}>Your intelligent companion for exploring Ethiopian heritage.</p>
                </div>

                <div style={styles.section}>
                    <h4 style={styles.heading}>Links</h4>
                    <Link to="/" style={styles.link}>Home</Link>
                    <Link to="/chat" style={styles.link}>AI Explorer</Link>
                </div>

                <div style={styles.section}>
                    <h4 style={styles.heading}>Security</h4>
                    <Link to="/admin-login" style={styles.adminPortal}>
                        <Shield size={14} /> Admin Portal
                    </Link>
                </div>
            </div>

            <div style={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} AITopia Explorations. Developed by Reiko Wakbeka. All rights reserved.</p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        background: 'var(--color-text)',
        color: 'white',
        padding: '4rem 2rem 2rem 2rem',
        marginTop: 'auto',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem',
        marginBottom: '4rem',
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    title: {
        fontSize: '1.5rem',
        fontFamily: 'var(--font-heading)',
        color: 'var(--color-gold)',
    },
    heading: {
        fontSize: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--color-gold)',
        marginBottom: '0.5rem',
    },
    text: {
        fontSize: '0.9rem',
        opacity: 0.7,
        maxWidth: '250px',
    },
    link: {
        fontSize: '0.9rem',
        opacity: 0.8,
        transition: 'var(--transition)',
    },
    adminPortal: {
        fontSize: '0.8rem',
        opacity: 0.5,
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        marginTop: 'auto',
        transition: 'var(--transition)',
    },
    bottom: {
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
        fontSize: '0.8rem',
        opacity: 0.5,
    }
};

export default Footer;
