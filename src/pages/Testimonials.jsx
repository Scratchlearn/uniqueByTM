import React from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "Ayesha Khan", text: "UniqueByTM completely transformed our website and SEO ranking!", img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Priya Sharma", text: "They are professional, responsive, and deliver quality beyond expectations.", img: "https://randomuser.me/api/portraits/women/65.jpg" },
    { name: "Rohit Verma", text: "The team understood our needs and built a clean, fast, and scalable website.", img: "https://randomuser.me/api/portraits/men/75.jpg" },
  ];

  return (
    <div className="container my-5 text-center">
      <h2 className="fw-bold text-primary mb-4">What Our Clients Say</h2>
      <div className="row g-4">
        {testimonials.map((t) => (
          <div className="col-md-4" key={t.name}>
            <div className="card shadow border-0 h-100 p-3">
              <img src={t.img} className="rounded-circle mx-auto" width="100" alt={t.name}/>
              <div className="card-body">
                <p className="fst-italic">“{t.text}”</p>
                <h6 className="fw-bold mt-2">{t.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testimonials;
