// app/terms-and-conditions/page.tsx

import HomeHeroSlider from "../components/Home/HeroSlider";

export default function TermsAndConditionsPage() {
    return (
        <main className="main-wrapper">
            <HomeHeroSlider />
            <div className="container mx-auto px-4 py-5">
                <h1 className="text-3xl font-bold mb-6">Terms &amp; Conditions</h1>

                <p className="mb-4">
                    Please be advised that accessing or utilizing the landing page implies the user’s consent to abide by the
                    following terms and conditions:
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Intellectual Property</h2>
                <p className="mb-4">
                    All content, images, logos, and other materials on this landing page are the property of the respective
                    project developer or its licensors. These properties are safeguarded by intellectual property laws, and
                    users are expressly prohibited from copying, altering, distributing, or utilizing any content without
                    obtaining prior written permission.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Property Information</h2>
                <p className="mb-4">
                    This landing page’s content, which includes details of the properties, costs, and availability, is subject
                    to change at any time. The Company is not responsible for any inaccuracies or omissions in the information
                    provided.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">User Obligations</h2>
                <p className="mb-4">
                    Users are obligated to furnish accurate and current information when submitting inquiries or requests via
                    the landing page. Additionally, users must commit to refraining from engaging in any unlawful or harmful
                    activities, such as hacking, spamming, or transmitting malicious software.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Privacy and Data Collection</h2>
                <p className="mb-4">
                    The Company may collect, store, and use your personal information in accordance with its privacy policy,
                    which is available at HomeBazaar Services Pvt. Ltd. We may use third-party services or tracking
                    technologies, such as cookies or analytics tools, to collect information about your use of this landing
                    page.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Disclaimer of Liability</h2>
                <p className="mb-4">
                    The Company explicitly disclaims liability for any damages, losses, or injuries arising from the use of the
                    landing page or reliance on the provided information. This disclaimer extends to encompass, but is not
                    limited to, financial losses, property damage, or any other direct or indirect damages.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Links to Third-Party Websites</h2>
                <p className="mb-4">
                    This landing page may contain links to external websites or resources. We do not endorse or assume
                    responsibility for the content, privacy practices, or availability of those third-party sites.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Modifications to the Terms</h2>
                <p className="mb-4">
                    The Company may update or modify these terms and conditions at any time without prior notice. We encourage
                    you to review these terms periodically to stay informed about any changes.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Governing Law and Jurisdiction</h2>
                <p className="mb-4">
                    Any legal disputes arising from your use of this landing page will be governed by the laws of the State of
                    Maharashtra and will be resolved in the courts of Mumbai.
                </p>
            </div>
        </main>
    );
}
