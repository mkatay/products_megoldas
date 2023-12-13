import React, { useState } from "react";
import { Feedback } from "../classes/Feedback.class.js";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new Feedback(email, feedback);
    console.log(formData);
  };
  return (
    <div className="container p-5">
      <section>
        <h2>Provide feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Feedback:</label>
            <textarea
              className="form-control"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary m-1">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};
