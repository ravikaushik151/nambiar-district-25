'use client';

import Image from 'next/image';
import Link from 'next/link';
import FooterForm from './FooterForm';

export default function Footer() {
    return (
        <footer className="footer" id='contact'>
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

                {/* Developer Info */}
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
                <div className="footer-column  d-none">
                    <div className="footer-association mt-0">
                        <Image
                            src="/img/logo.png"
                            alt="logo"
                            width={100}
                            height={80}
                            className="brown-logo mb-4" />
                        <p>In Association With</p>
                        <div className="footer-social">
                            <Link href="https://www.facebook.com/people/Binary-Realty/61565957242898/#"><i className="fab fa-facebook-f"></i></Link>
                            <Link href="https://www.instagram.com/binaryrealtytempletree/"><i className="fab fa-instagram"></i></Link>
                            <Link href="https://www.linkedin.com/company/binary-realty1/?viewAsMember=true"><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                </div>
                {/* Get In Touch Form */}
                <div className="footer-column text-center w-75">
                    <h4 className="footer-heading">GET IN TOUCH</h4>
                    <FooterForm onClose={() => { }} />
                </div>
            </div>
            {/* Copyright */}
            <div className="footer-bottom">
                <p>Disclaimer : Please be advised that this website is not an official site and serves solely as an informational portal managed by a RERA authorized real estate agent. It does not constitute an offer or guarantee of any services. The prices displayed on this website are subject to change without prior notice, and the availability of properties cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website. </p>
            </div>
        </footer>
    );
}
