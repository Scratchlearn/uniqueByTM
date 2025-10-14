import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const whatsappNumber = "918303747172"; // Your WhatsApp number (no +)
  const whatsappMessage = "Hello! I want to know more about your services.";

  return (
    <>
      {/* Hero Section */}
      <div
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
          height: "80vh",
          flexDirection: "column",
        }}
      >
        <h1 className="display-4 fw-bold">
          Empower Your Digital Presence with{" "}
          <span className="text-warning">UniqueByTM</span>
        </h1>
        <p className="lead mt-3 mb-4">
          We provide SEO, Website Development, App Development, Marketing, and IT Solutions that grow your business.
        </p>
        <Link to="/contact" className="btn btn-warning btn-lg px-4">
          Get in Touch
        </Link>
      </div>

      {/* Services Overview */}
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold text-primary">Our Core Services</h2>
        <div className="row g-4">
          {[
            {
              title: "SEO Optimization",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
            },
            {
              title: "Website Development",
              img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
            },
            {
              title: "App Development",
              img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
            },
            {
              title: "Social Media Marketing",
              img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
            },
            {
              title: "IT Consulting",
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
            },
          ].map((s) => (
            <div className="col-md-6 col-lg-3" key={s.title}>
              <div className="card h-100 shadow border-0">
                <img
                  src={s.img + "?auto=format&fit=crop&w=800&q=80"}
                  className="card-img-top img-fluid"
                  alt={s.title}
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold">{s.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width="60"
          height="60"
        />
      </a>

      {/* Floating Button CSS */}
      <style>
        {`
          .whatsapp-float {
            position: fixed;
            width: 60px;
            height: 60px;
            bottom: 25px;
            right: 25px;
            background-color: #25d366;
            border-radius: 50%;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            transition: transform 0.3s ease;
          }
          .whatsapp-float:hover {
            transform: scale(1.1);
          }
          .whatsapp-float img {
            width: 38px;
            height: 38px;
          }
        `}
      </style>
    </>
  );
};

export default Home;
