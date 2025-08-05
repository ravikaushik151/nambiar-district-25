import FooterForm from './FooterForm';

export default function PriceBreakupModal() {
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
