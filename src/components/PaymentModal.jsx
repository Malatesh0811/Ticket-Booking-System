import React, { useState } from "react";

const PaymentModal = ({ amount, onSuccess, onClose }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();

    if (cardNumber.length !== 16 || cvv.length !== 3 || expiry === "") {
      alert("Invalid payment details. Please check and try again.");
      return;
    }

    // Simulated payment success
    setTimeout(() => {
      alert("Payment successful!");
      onSuccess();
    }, 1000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content p-4 bg-white shadow-lg">
        <h4 className="mb-3">Complete Payment</h4>
        <p>Total Amount: ${amount}</p>
        <form onSubmit={handlePayment}>
          <input
            type="text"
            placeholder="Card Number"
            className="form-control mb-2"
            maxLength="16"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            className="form-control mb-2"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="CVV"
            className="form-control mb-2"
            maxLength="3"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-success w-100">
            Pay Now
          </button>
        </form>
        <button className="btn btn-danger mt-2 w-100" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
