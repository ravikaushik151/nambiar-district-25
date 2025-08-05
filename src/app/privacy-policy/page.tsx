import HomeHeroSlider from "../components/Home/HeroSlider";

// app/privacy-policy/page.tsx
export default function PrivacyPolicyPage() {
    return (
        <main className="main-wrapper">
            <HomeHeroSlider />
            <div className="container mx-auto px-4 py-5">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

                <p className="mb-4">
                    This website is not the official one; it is only meant to be used for informative purposes. In our
                    commitment to safeguarding your personal information, we have formulated this comprehensive privacy policy
                    to protect your interests and data on our website.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Update of Privacy Policy</h2>
                <p className="mb-4">
                    This privacy policy is open to revision and review at any time, without notification or consent. Therefore,
                    please re-visit the website and regularly go through the terms and conditions of this privacy policy to
                    stay informed about the modifications that have been made.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">User Information</h2>
                <p className="mb-4">
                    By accessing our website, you accept our terms and give permission for us to collect and use any
                    information you voluntarily submit. While certain visits might not require personal information, others
                    could in order to provide access to particular links or websites. We use the information you have given us
                    to deliver information and updates, confirm receipt of your message, and offer pertinent goods and
                    services. We do not share personal information with outside parties, and you have the option to unsubscribe
                    from our email list.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">Security</h2>
                <p className="mb-4">
                    Sensitive information is encrypted during transmission between the client and server. We restrict employee
                    access to your personal information and hold them to high levels of confidentiality. We may use cookies for
                    security, session continuity, and customization purposes. Rejecting cookies may limit your access to
                    certain services or features. For questions or suggestions regarding this privacy statement or your
                    dealings with this website, please contact us.
                </p>

                <p className="mt-6">
                    This website is not the official one; it is only meant to be used for informative purposes.
                </p>
            </div>
        </main>
    );
}
