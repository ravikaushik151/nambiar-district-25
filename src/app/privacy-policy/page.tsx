import HomeHeroSlider from "../components/Home/HeroSlider";

// app/privacy-policy/page.tsx
export default function PrivacyPolicyPage() {
    return (
        <main className="main-wrapper">
            <HomeHeroSlider />
            <div className="container mx-auto px-4 py-5">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

                <p><strong>Effective Date:</strong> August 6, 2025</p>
                <p><strong>Last Updated:</strong> August 6, 2025</p>

                <p>
                    <strong>Nambiar District 25</strong> (we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data when you interact with our services, including our website (
                    <a href="https://nambiardistrict25.live/" className="text-primary" target="_blank" rel="noopener noreferrer">
                        https://nambiardistrict25.live/
                    </a>
                    ), lead forms, marketing campaigns, and integrated platforms. By using our services, you agree to the practices described below.
                </p>

                {/* Sections */}
                <ol className="ps-3">
                    <li className="fw-semibold mt-4">Information We Collect</li>
                </ol>
                <p><strong>Personal Information:</strong> Includes name, email address, phone number, and preferences you provide through forms.</p>
                <p><strong>Automatically Collected Data:</strong> IP address, browser type, device information, visited pages, and time spent — collected via cookies, Facebook Pixel, and Google Analytics.</p>

                <ol start="2" className="ps-3">
                    <li className="fw-semibold mt-4">How We Use Your Information</li>
                </ol>
                <p>We use your data to:</p>
                <ul>
                    <li>Respond to inquiries and provide updates about our offerings</li>
                    <li>Customize brochures, messages, and promotional materials via our CRM</li>
                    <li>Schedule callbacks, appointments, or property visits</li>
                    <li>Improve our services through analytics and user behavior insights</li>
                </ul>

                <ol start="3" className="ps-3">
                    <li className="fw-semibold mt-4">Legal Basis for Processing</li>
                </ol>
                <p>Under GDPR and similar regulations, we process your data based on:</p>
                <ul>
                    <li>Consent: Given through web forms or cookie banners</li>
                    <li>Contractual necessity: To fulfill your requests</li>
                    <li>Legitimate interests: For marketing and service enhancement</li>
                </ul>

                <ol start="4" className="ps-3">
                    <li className="fw-semibold mt-4">Cookies & Tracking Technologies</li>
                </ol>
                <p>
                    We use cookies, Facebook Pixel, and Google Analytics to personalize content and measure performance. When visiting our site, you will be prompted to accept or reject tracking cookies. You can change your preferences anytime through your browser settings.
                </p>

                <ol start="5" className="ps-3">
                    <li className="fw-semibold mt-4">Data Sharing & Third Parties</li>
                </ol>
                <p>Your data may be shared with:</p>
                <ul>
                    <li>Internal sales, marketing, and support teams</li>
                    <li>Authorized agents or real estate partners</li>
                    <li>Third-party platforms like Google and Meta for ads</li>
                    <li>CRM and cloud-based marketing service providers</li>
                </ul>
                <p><strong>Note:</strong> We do not sell or rent your personal data to any third parties.</p>

                <ol start="6" className="ps-3">
                    <li className="fw-semibold mt-4">Your Rights & Choices</li>
                </ol>
                <p>Depending on your location, you may have the right to:</p>
                <ul>
                    <li>Access and receive a copy of your data</li>
                    <li>Request corrections or updates to your data</li>
                    <li>Request deletion or restrict how your data is used</li>
                    <li>Withdraw consent at any time without affecting prior processing</li>
                </ul>
                <p>To exercise any of these rights, please contact us at <a href="mailto:propertysevaa@gmail.com" className="text-primary">propertysevaa@gmail.com</a>.</p>

                <ol start="7" className="ps-3">
                    <li className="fw-semibold mt-4">Data Retention</li>
                </ol>
                <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or to comply with legal obligations. Typically, this does not exceed 24 months from your last interaction.</p>

                <ol start="8" className="ps-3">
                    <li className="fw-semibold mt-4">Data Security</li>
                </ol>
                <p>We apply technical and administrative measures to safeguard your data. While we strive to protect your personal information, no internet transmission or storage method is 100% secure. Always use strong passwords and be cautious with shared credentials.</p>

                <ol start="9" className="ps-3">
                    <li className="fw-semibold mt-4">Children&apos;s Privacy</li>
                </ol>
                <p>Our services are not intended for children under the age of 18. We do not knowingly collect personal information from minors. If we become aware of such data, we will delete it promptly.</p>

                <ol start="10" className="ps-3">
                    <li className="fw-semibold mt-4">External Links</li>
                </ol>
                <p>Our website may include links to third-party websites or services. We are not responsible for their privacy policies or practices. We encourage users to read the privacy policies of any external sites they visit.</p>

                <ol start="11" className="ps-3">
                    <li className="fw-semibold mt-4">Policy Updates</li>
                </ol>
                <p>We may update this policy periodically to reflect changes in law or business practices. Any updates will be posted on this page with the new &quot;Effective Date.&quot; Continued use of our services implies your acceptance of these changes.</p>

                <ol start="12" className="ps-3">
                    <li className="fw-semibold mt-4">Contact Us</li>
                </ol>
                <p>If you have questions or requests related to this Privacy Policy or your personal data, please contact us using the details below:</p>
                <address>
                    <strong>Nambiar District 25</strong><br />
                    Address: Off Sarjapur Road, Muthanallur Cross,<br />
                    Bangalore Rural - East,<br />
                    Karnataka, Pin Code: 560099<br />
                    Phone: 1234567890<br />
                    Email: <a href="mailto:propertysevaa@gmail.com" className="text-primary">propertysevaa@gmail.com</a><br />
                    Website: <a href="https://nambiardistrict25.live/" className="text-primary" target="_blank" rel="noopener noreferrer">nambiar-district-25-theta.vercel.app</a>
                </address>
            </div>
        </main >
    );
}
