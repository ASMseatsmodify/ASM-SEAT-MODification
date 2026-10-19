
import "./payment.css";

export default function Payment() {
  return (
    <section className="payment-section" id="payment">
      <div className="payment-container">
        <div className="payment-info">
          <span className="payment-tag">
            SECURE BOOKING PAYMENT
          </span>

          <h2>
            Confirm Your Booking
            <span> with ASM Modification</span>
          </h2>

          <p>
            Pay your booking advance using PhonePe or
            any UPI app. Scan the QR code and complete
            your payment from your phone.
          </p>

          <div className="payment-benefit">
            <span>✓</span>
            Quick and easy UPI payment
          </div>

          <div className="payment-benefit">
            <span>✓</span>
            Share your transaction ID for confirmation
          </div>

          <p className="payment-note">
            Your appointment is confirmed only after
            the payment has been verified by our team.
          </p>
        </div>

        <div className="payment-card">
          <div className="payment-card-header">
            <div>
              <h3>Pay Booking Advance</h3>
              <p>Scan using any UPI app</p>
            </div>
            <span className="upi-badge">UPI</span>
          </div>

          <div className="qr-frame">
            <img
              src="/phonepe-qr.jpeg"
              alt="ASM Modification payment QR code"
            />
          </div>

          <div className="payment-merchant">
            <span className="merchant-dot">✓</span>
            <div>
              <strong>ASM Modification</strong>
              <p>PhonePe QR Payment</p>
            </div>
          </div>

          <div className="payment-divider" />

          <p className="payment-instruction">
            After paying, share your transaction ID
            with us to confirm your booking.
          </p>
        </div>
      </div>
    </section>
  );
}
