'use client';

import { useEffect } from 'react';
import FooterForm from './FooterForm';

export default function PriceBreakupModal() {
    useEffect(() => {
        const timer = setTimeout(async () => {
            const modalElement = document.getElementById('priceModal');
            if (modalElement) {
                const { default: Modal } = await import('bootstrap/js/dist/modal'); // ✅ dynamic import only on client
                const modal = new Modal(modalElement);
                modal.show();
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="modal fade"
            id="priceModal"
            tabIndex={-1}
            aria-labelledby="priceModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="priceModalLabel">Request Price Breakup</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            id="priceModalCloseBtn"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <FooterForm onClose={() => document.getElementById('priceModalCloseBtn')?.click()} />
                    </div>
                </div>
            </div>
        </div>
    );
}
