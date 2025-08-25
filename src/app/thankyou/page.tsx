'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

export default function ThankYouPage() {
    const router = useRouter();

    // Redirect after 10 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 10000);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <>
            <Script id="conversion-script" strategy="afterInteractive">
                {`
                gtag('event', 'conversion', {
                    'send_to': 'AW-16909428071/9ieqCPjgiIIbEOfKhf8-'
                });
                `}
            </Script>

            <main className="fixed inset-0 bg-[#193249] flex items-center justify-center text-center px-4">
                <div className="space-y-6">
                    <div>
                        <Image
                            src="/img/logo.png"
                            alt="logo"
                            width={120}
                            height={66}
                            className="mx-auto"
                        />
                        <h1 className="text-dark text-5xl md:text-6xl font-bold">
                            Thank you for your interest
                        </h1>
                        <p className="text-dark text-2xl md:text-3xl">
                            Our representative will get in touch with you shortly.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
