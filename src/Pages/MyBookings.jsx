import React, { useState, useEffect } from "react";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [paymentInProgress, setPaymentInProgress] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentCredentials, setPaymentCredentials] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [bookingInProgress, setBookingInProgress] = useState(null);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(storedBookings);
  }, []);

  const handleCancel = (id) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  const handleProceedToPayment = (booking) => {
    setShowPaymentForm(true);
    setBookingInProgress(booking.id); // Set current booking ID
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Check if payment credentials are provided
    if (!paymentCredentials.cardNumber || !paymentCredentials.expiryDate || !paymentCredentials.cvv) {
      alert("Please fill out all the payment fields.");
      return;
    }

    // Simulate a payment process with a delay
    setPaymentInProgress(bookingInProgress); // Start payment process
    setTimeout(() => {
      setPaymentSuccess(true); // Simulate success
      setShowPaymentForm(false); // Hide payment form after success
      alert("Payment successful! Thank you for your purchase.");
      setPaymentInProgress(null); // Reset payment in progress state
    }, 3000); // Simulate a 3-second payment processing delay
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentCredentials({ ...paymentCredentials, [name]: value });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-center">No bookings yet.</p>
      ) : (
        <div className="row">
          {bookings.map((booking) => (
            <div key={booking.id} className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{booking.eventName}</h5>
                  <p className="card-text"><strong>Date:</strong> {booking.date}</p>
                  <p className="card-text"><strong>Tickets:</strong> {booking.tickets}</p>
                  <p className="card-text"><strong>Name:</strong> {booking.name}</p>
                  <p className="card-text"><strong>Email:</strong> {booking.email}</p>

                  {/* Payment Button */}
                  {paymentInProgress !== booking.id && !showPaymentForm && paymentSuccess !== true && (
                    <button
                      className="btn btn-success w-100 mb-2"
                      onClick={() => handleProceedToPayment(booking)}
                    >
                      Proceed to Payment
                    </button>
                  )}

                  {/* Payment Form */}
                  {showPaymentForm && bookingInProgress === booking.id && !paymentSuccess && (
                    <form onSubmit={handlePaymentSubmit}>
                      <div className="mb-3">
                        <label htmlFor="cardNumber" className="form-label">Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          className="form-control"
                          value={paymentCredentials.cardNumber}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          className="form-control"
                          value={paymentCredentials.expiryDate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="cvv" className="form-label">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          className="form-control"
                          value={paymentCredentials.cvv}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <button type="submit" className="btn btn-primary w-100">Submit Payment</button>
                    </form>
                  )}

                  {/* Success Message */}
                  {paymentSuccess && (
                    <div className="alert alert-success mt-2" role="alert">
                      Payment Successful! Your booking is confirmed.
                    </div>
                  )}

                  {/* Cancel Booking Button */}
                  <button
                    className="btn btn-danger w-100"
                    onClick={() => handleCancel(booking.id)}
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
