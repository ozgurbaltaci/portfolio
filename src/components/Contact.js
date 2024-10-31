import React, { useRef, useState } from "react";
import "./Contact.css"; // Import the CSS file
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get("user_name") || "Anonymous"; // Default to 'Anonymous' if not provided
    const userEmail = formData.get("user_email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    const ccEmail = formData.get("ccEmail");

    const mailtoLink = `mailto:wozgurbaltaci@gmail.com?cc=${encodeURIComponent(
      ccEmail
    )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      message
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <div className="mac-container-outer-div">
        <div className="mac-container">
          <div className="mac-header">
            <div className="button close"></div>
            <div className="button minimize"></div>
            <div className="button maximize"></div>
            <h3 style={{ marginLeft: "0px" }}>Get in touch</h3>
          </div>
          <div className="mac-content">
            <form ref={form} onSubmit={handleSubmit}>
              <div
                style={{
                  borderBottom: "1px solid gray",
                  padding: "0 0 0.2rem 0",
                  display: "flex",
                  gap: "8px",
                }}
              >
                <label htmlFor="to">To:</label>
                <p
                  style={{
                    fontSize: "10px",
                    backgroundColor: "#C2D6FC",
                    padding: "0.2rem",
                    borderRadius: "3px",
                  }}
                >
                  wozgurbaltaci@gmail.com
                </p>
              </div>
              <div
                style={{
                  borderBottom: "1px solid gray",
                  padding: "0.2rem 0 0.2rem 0",
                  display: "flex",
                  gap: "8px",
                }}
              >
                <label htmlFor="subject">Cc:</label>
                <input
                  type="email"
                  id="ccEmail"
                  name="ccEmail"
                  placeholder="Cc"
                />
              </div>
              <div
                style={{
                  borderBottom: "1px solid gray",
                  padding: "0.2rem 0 0.2rem 0",
                  display: "flex",
                  gap: "8px",
                }}
              >
                <label htmlFor="subject">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div
                style={{
                  padding: "0.2rem 0 0 0",
                }}
              >
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here..."
                  rows={11}
                  required
                ></textarea>
              </div>
              <button className="contact-button" type="submit">
                <IoIosSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
