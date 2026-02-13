import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    LogOut, User as UserIcon, Shield,
    Twitter, Facebook, Instagram, Youtube,
    Mail, Phone, ChevronDown, Globe, Search
} from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="navbar-wrapper">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="top-bar-container">
                    <div className="top-bar-left">
                        <div className="social-links">
                            <a href="#"><Twitter size={14} /></a>
                            <a href="#"><Facebook size={14} /></a>
                            <a href="#"><Instagram size={14} /></a>
                            <a href="#"><Youtube size={14} /></a>
                        </div>
                        <div className="contact-info">
                            <Mail size={14} />
                            <span>info@mot.gov.et</span>
                        </div>
                    </div>
                    <div className="top-bar-right">
                        <div className="contact-info">
                            <Phone size={14} />
                            <span>+251 (0) 11 668 4572</span>
                        </div>
                        <div className="currency-selector">
                            <span>USD</span>
                            <ChevronDown size={14} />
                        </div>
                        {user ? (
                            <div className="top-auth-link">
                                <UserIcon size={14} />
                                <span>{user.email.split('@')[0]}</span>
                                {user.role === 'admin' && <Shield size={14} color="var(--color-accent)" />}
                                <button onClick={logout} style={{ background: 'none', padding: 0, color: 'inherit' }}>
                                    <LogOut size={14} />
                                </button>
                            </div>
                        ) : (
                            <Link to="/login" className="top-auth-link">
                                <UserIcon size={14} />
                                <span>Sign in or Register</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <nav className="main-nav">
                <div className="main-nav-container">
                    <Link to="/" className="logo-wrapper">
                        <div className="logo-text">Ethiopia</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--color-primary)', fontWeight: 600 }}>LAND OF ORIGINS</div>
                    </Link>

                    <div className="nav-links">
                        <Link to="/" className="nav-item">Home</Link>
                        <div className="nav-item">
                            Destinations <ChevronDown size={14} />
                            <div className="dropdown-menu">
                                <Link to="/destinations" className="dropdown-item">Addis Ababa</Link>
                                <Link to="/destinations" className="dropdown-item">Lalibela</Link>
                                <Link to="/destinations" className="dropdown-item">Simien Mountains</Link>
                                <Link to="/destinations" className="dropdown-item">Omo Valley</Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            Plan Your Trip <ChevronDown size={14} />
                            <div className="dropdown-menu">
                                <Link to="/plan-trip" className="dropdown-item">Visa Information</Link>
                                <Link to="/plan-trip" className="dropdown-item">Hotels & Stay</Link>
                                <Link to="/plan-trip" className="dropdown-item">Tours & Activities</Link>
                            </div>
                        </div>
                        <Link to="/events" className="nav-item">Events</Link>
                        <Link to="/stopover" className="nav-item">Stopover</Link>
                        <div className="nav-item">
                            Things to do <ChevronDown size={14} />
                            <div className="dropdown-menu">
                                <Link to="/things-to-do" className="dropdown-item">Cultural Experience</Link>
                                <Link to="/things-to-do" className="dropdown-item">Nature & Wildlife</Link>
                                <Link to="/things-to-do" className="dropdown-item">Adventure</Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            Invest In Ethiopia <ChevronDown size={14} />
                            <div className="dropdown-menu">
                                <Link to="/invest" className="dropdown-item">Tourism Investment</Link>
                                <Link to="/invest" className="dropdown-item">Trade Opportunities</Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            More <ChevronDown size={14} />
                            <div className="dropdown-menu">
                                <Link to="/about" className="dropdown-item">About Us</Link>
                                <Link to="/contact" className="dropdown-item">Contact</Link>
                                <Link to="/chat" className="dropdown-item">AI Chat Guide</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
