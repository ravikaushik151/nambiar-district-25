'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ThankYouPage() {
    const router = useRouter();

    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push('/');
        }, 10000); // 10 seconds

        return () => clearTimeout(timeout); // Cleanup on unmount
    }, [router]);

    return (
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
    );
}
