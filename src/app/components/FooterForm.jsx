'use client';

import { useState } from 'react';

export default function FooterForm({ onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await res.json();

            if (res.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', phone: '', message: '' });
                if (onClose) onClose();
            } else {
                setStatus(result.error || 'Something went wrong!');
            }
        } catch (err) {
            setStatus('Failed to send message.');
        }
    };

    return (
        <form className="footer-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                className="footer-input form-control mb-2"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="footer-input form-control mb-2"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="tel"
                name="phone"
                placeholder="Contact Number"
                className="footer-input form-control mb-2"
                value={formData.phone}
                onChange={handleChange}
                required
            />
            <textarea
                className="footer-input form-control mb-2"
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            <button type="submit" className="footer-button btn btn-info">SUBMIT</button>

            {status && <p className="mt-2">{status}</p>}
        </form>
    );
}
