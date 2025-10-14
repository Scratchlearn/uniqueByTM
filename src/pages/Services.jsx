import React from "react";

const Services = () => {
  const services = [
    {
      title: "SEO Optimization",
      desc: "Improve your visibility on search engines and attract organic traffic with advanced SEO strategies.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      title: "Website Development",
      desc: "From sleek landing pages to full-scale business platforms — we build fast, secure, and stunning websites.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Social Media Marketing",
      desc: "Boost your brand awareness and connect with customers across platforms like Instagram, Facebook, and LinkedIn.",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786"
    },
    {
      title: "IT Services",
      desc: "Comprehensive IT support, network setup, and cloud solutions for modern businesses.",
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 fw-bold text-primary">Our Professional Services</h2>
      <div className="row g-4">
        {services.map((s) => (
          <div className="col-md-6 col-lg-3" key={s.title}>
            <div className="card shadow-lg border-0 h-100">
              <img src={s.img + "?auto=format&fit=crop&w=800&q=80"} className="card-img-top img-fluid" alt={s.title}/>
              <div className="card-body">
                <h5 className="fw-bold">{s.title}</h5>
                <p>{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
