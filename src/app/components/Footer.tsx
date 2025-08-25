'use client';

import Image from 'next/image';
import Link from 'next/link';
import FooterForm from './FooterForm';

export default function Footer() {
    return (
        <>
            <footer className="footer" id="contact">
                <div className="footer-container">
                    {/* Project Info */}
                    <div className="footer-column text-center">
                        <h4 className="footer-title fs-2">About Developer</h4>
                        <p style={{ textAlign: 'justify' }}>
                            Founded in 2009, Nambiar Builders is one of Bangalore’s most trusted real estate developers, known for quality, innovation, and integrity. With a portfolio spanning luxury villas, gated communities, and premium townships, every project reflects contemporary design, sustainable planning, and superior craftsmanship.<br />
                            Focused on eco-friendly living, Nambiar homes feature green landscapes, energy-efficient technologies, and thoughtful layouts that enhance wellness and comfort. Their customer-first approach, transparent dealings, and on-time delivery have earned the trust of thousands of homeowners.
                            Nambiar District 25 exemplifies this vision—bringing together luxury, nature, and seamless connectivity to redefine modern urban living in Bangalore.
                        </p>
                    </div>

                    {/* Hidden Columns (Optional) */}
                    <div className="footer-column d-none">
                        <h4 className="footer-title">Binary</h4>
                        <p>
                            S.Y. No. 19,
                            <br /> Sompura Gate, Sarjapura Road,
                            <br />Bengaluru, Karnataka-562125
                        </p>
                        <p className="footer-contact">+91 96112 11255</p>
                        <p>sales@binaryrealty.in</p>
                    </div>
                    <div className="footer-column d-none">
                        <div className="footer-association mt-0">
                            <Image
                                src="/img/logo.png"
                                alt="logo"
                                width={100}
                                height={80}
                                className="brown-logo mb-4"
                            />
                            <p>In Association With</p>
                            <div className="footer-social">
                                <Link href="https://www.facebook.com/people/Binary-Realty/61565957242898/#"><i className="fab fa-facebook-f"></i></Link>
                                <Link href="https://www.instagram.com/binaryrealtytempletree/"><i className="fab fa-instagram"></i></Link>
                                <Link href="https://www.linkedin.com/company/binary-realty1/?viewAsMember=true"><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="footer-column text-center w-75">
                        <h4 className="footer-heading">GET IN TOUCH</h4>
                        <FooterForm onClose={() => { }} />
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>
                        Disclaimer: Please be advised that this website is not an official site and serves solely as an informational portal managed by a RERA authorized real estate agent. It does not constitute an offer or guarantee of any services...
                        <br />
                        Please read our <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>.
                    </p>
                </div>
            </footer>

            {/* ✅ Bootstrap Floating CTA Buttons */}
            <div
                className="right-fix position-fixed top-50 end-0 translate-middle-y d-flex flex-column align-items-end gap-2 me-2"
                style={{ zIndex: 1050 }}
            >
                {/* Call Button */}
                <a
                    href="tel:+918746977814"
                    className="btn btn-primary rounded-circle shadow d-flex align-items-center justify-content-center"
                    style={{ width: '56px', height: '56px' }}
                    title="Call Now"
                >
                    <i className="fas fa-phone"></i>
                </a>

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/918746977814"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success rounded-circle shadow d-flex align-items-center justify-content-center"
                    style={{ width: '56px', height: '56px' }}
                    title="Chat on WhatsApp"
                >
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>

        </>
    );
}
