import React from "react";

const About = () => (
  <div className="container my-5">
    <div className="row align-items-center">
      <div className="col-md-6 mb-4">
        <img src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?auto=format&fit=crop&w=900&q=80" 
             alt="About UniqueByTM" className="img-fluid rounded shadow" />
      </div>
      <div className="col-md-6">
        <h2 className="fw-bold text-primary mb-3">About UniqueByTM</h2>
        <p>
          At <strong>UniqueByTM</strong>, we combine technology and creativity to deliver
          impactful digital solutions. Whether you’re a startup or an enterprise,
          our goal is to help your brand stand out online through strategic marketing,
          smart web development, and data-driven growth techniques.
        </p>
        <p>
          With years of experience and a team of dedicated professionals,
          we ensure every project delivers excellence and value.
        </p>
      </div>
    </div>
  </div>
);
export default About;
