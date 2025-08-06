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
                    Nambiar District 25 (“we,” “our,” or “us”) operates in Real Estate. This Privacy Policy
                    applies to our website (
                    <strong>
                        <a
                            href="https://nambiardistrict25.live/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            https://nambiardistrict25.live/
                        </a>
                    </strong>
                    ), lead forms, marketing campaigns, and third-party integrations.
                </p>

                <ol className="list-decimal pl-6 mt-4 space-y-4">
                    <li>
                        <strong>Information We Collect</strong>
                        <p><strong>Personal Data:</strong> Name, email, phone, preferences submitted through forms.</p>
                        <p><strong>Automatically Collected Data:</strong> IP address, browser, pages visited, dwell time, via analytics tools (Google, Meta).</p>
                    </li>

                    <li>
                        <strong>How We Use Your Data</strong>
                        <ul className="list-disc pl-6">
                            <li>To respond to inquiries and send project updates</li>
                            <li>To tailor marketing messages and brochures (via internal CRM)</li>
                            <li>To schedule callbacks and site visits</li>
                            <li>To analyze and optimize marketing effectiveness</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Legal Basis for Processing (GDPR)</strong>
                        <ul className="list-disc pl-6">
                            <li>Your consent (via forms or cookie banner)</li>
                            <li>Performance of contractual requests</li>
                            <li>Legitimate interest in marketing offers</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Tracking Technologies & Cookies</strong>
                        <p>
                            We use cookies and tracking tools such as Facebook Pixel and Google Analytics for
                            advertising and measurement. You may accept or reject tracking cookies on first visit
                            via the cookie banner.
                        </p>
                    </li>

                    <li>
                        <strong>Data Sharing & Disclosure</strong>
                        <ul className="list-disc pl-6">
                            <li>Internal sales and CRM teams</li>
                            <li>Authorized agents or partners (as needed)</li>
                            <li>Meta, Google, and advertising platforms</li>
                            <li>Cloud-based CRM and marketing tools</li>
                        </ul>
                        <p>We do not sell or rent your personal data.</p>
                    </li>

                    <li>
                        <strong>Your Rights</strong>
                        <p>
                            If you reside in regions with privacy laws (EU/UK/California), you have the right to
                            access, correct, delete, or restrict the use of your data, and withdraw consent at any
                            time.
                        </p>
                    </li>

                    <li>
                        <strong>Data Retention</strong>
                        <p>
                            We retain your data only as long as needed or for legal compliance, and no longer than
                            24 months of inactivity.
                        </p>
                    </li>

                    <li>
                        <strong>Security Measures</strong>
                        <p>
                            We implement technical and organizational safeguards, but no system is fully secure.
                            Please protect your login details.
                        </p>
                    </li>

                    <li>
                        <strong>Children’s Privacy</strong>
                        <p>
                            Our services are intended for users aged 18+. We do not knowingly collect data from
                            minors.
                        </p>
                    </li>

                    <li>
                        <strong>Third-Party Links</strong>
                        <p>
                            Our website may contain links to third-party services or platforms. We are not
                            responsible for their privacy practices.
                        </p>
                    </li>

                    <li>
                        <strong>Updates to This Policy</strong>
                        <p>
                            We may update this policy. Changes will be posted here with a new “Effective Date.”
                            Continued use implies acceptance.
                        </p>
                    </li>

                    <li>
                        <strong>Contact Information</strong>
                        <p>
                            <strong>Nambiar District 25</strong>
                            <br />
                            Off Sarjapur Road, Muthanallur Cross,
                            <br />
                            Bangalore Rural - East,
                            <br />
                            Karnataka Pin Code: 560099
                            <br />
                            Phone: 1234567890
                            <br />
                            Email: abc@gmail.com
                            <br />
                            Website:{' '}
                            <a
                                href="https://nambiardistrict25.live/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                https://nambiardistrict25.live/
                            </a>
                        </p>
                    </li>
                </ol>
            </div>
        </main>
    );
}
