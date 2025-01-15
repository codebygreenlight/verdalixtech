import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import logo from '/logo.png';

const App = () => {
  const [formState, handleSubmit] = useForm("xeoovqez");
  const [newsletterState, handleNewsletterSubmit] = useForm("xayrqwgj");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications and responsive websites built with cutting-edge technologies",
      icon: "🌐"
    },
    {
      title: "Software Solutions",
      description: "Scalable enterprise software solutions tailored to your business needs",
      icon: "💻"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that create exceptional digital experiences",
      icon: "🎨"
    }
  ];

  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      description: "We're looking for an experienced Full Stack Developer to join our engineering team and help build scalable web applications.",
      responsibilities: [
        "Design and implement scalable backend services and APIs",
        "Develop responsive and interactive frontend interfaces",
        "Collaborate with cross-functional teams to define and implement new features",
        "Mentor junior developers and conduct code reviews"
      ],
      requirements: [
        "5+ years experience in full stack development",
        "Expertise in React, Node.js, and modern JavaScript",
        "Experience with cloud services (AWS/Azure/GCP)",
        "Strong understanding of database design and optimization"
      ]
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Join our design team to create exceptional user experiences and interfaces for our digital products.",
      responsibilities: [
        "Create user-centered designs by understanding business requirements",
        "Develop UI mockups and prototypes",
        "Conduct user research and testing",
        "Create user flows, wireframes, and visual designs"
      ],
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma, Adobe XD, or similar tools",
        "Strong portfolio demonstrating user-centered design",
        "Experience with design systems and component libraries"
      ]
    },
    {
      title: "Mobile Developer",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      description: "We're seeking a talented Mobile Developer to build innovative mobile applications for iOS and Android platforms.",
      responsibilities: [
        "Develop native and cross-platform mobile applications",
        "Implement responsive user interfaces and smooth animations",
        "Integrate RESTful APIs and third-party services",
        "Optimize application performance and reliability"
      ],
      requirements: [
        "4+ years of mobile development experience",
        "Proficiency in React Native or Flutter",
        "Experience with native iOS/Android development",
        "Strong understanding of mobile UI/UX principles"
      ]
    }
  ];

  const clients = [
    {
      name: "TechCorp Global",
      logo: "🏢", // Replace with actual logo image
      industry: "Technology"
    },
    {
      name: "InnovatePro",
      logo: "🚀", // Replace with actual logo image
      industry: "Innovation"
    },
    {
      name: "SecureNet",
      logo: "🔐", // Replace with actual logo image
      industry: "Cybersecurity"
    },
    {
      name: "DigitalFirst",
      logo: "💻", // Replace with actual logo image
      industry: "Digital Services"
    },
    {
      name: "SmartSolutions",
      logo: "🎯", // Replace with actual logo image
      industry: "Software"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechCorp Global",
      image: "👩‍💼", // Replace with actual image
      review: "Verdalix transformed our digital infrastructure completely. Their expertise in cloud solutions and cybersecurity has given us a competitive edge in the market.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "CEO, InnovatePro",
      image: "👨‍💼", // Replace with actual image
      review: "The mobile app developed by Verdalix exceeded our expectations. Their team's attention to detail and innovative approach helped us achieve our business goals.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager, DigitalFirst",
      image: "👩‍💼", // Replace with actual image
      review: "Working with Verdalix has been exceptional. Their UI/UX team created an intuitive design that our users love. Highly recommended!",
      rating: 5
    }
  ];

  const teamImages = [
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      caption: "Team collaboration meeting"
    },
    {
      url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      caption: "Development team at work"
    },
    {
      url: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      caption: "Design team brainstorming"
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Verdalix Logo" className="logo-image" />
        </div>
        
        <div className="mobile-menu-button" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#careers" onClick={toggleMenu}>Careers</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      </nav>

      <header className="hero">
        <h1>Pioneering the Future<br />of Technology</h1>
        <p>Transforming visionary ideas into groundbreaking digital solutions that define tomorrow's possibilities</p>
        <button className="cta-button">Explore Services</button>
      </header>

      <section id="services" className="services">
        <div className="services-header">
          <h2>Our Services</h2>
          <p className="services-subtitle">Comprehensive technology solutions tailored to your business needs</p>
        </div>
        
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-content">
                <div className="service-icon-wrapper">
                  <div className="service-icon">{service.icon}</div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.title === "Web Development" && (
                    <>
                      <li>✓ Custom Web Applications</li>
                      <li>✓ E-commerce Solutions</li>
                      <li>✓ Progressive Web Apps</li>
                    </>
                  )}
                  {service.title === "Software Solutions" && (
                    <>
                      <li>✓ Enterprise Software</li>
                      <li>✓ Cloud Integration</li>
                      <li>✓ API Development</li>
                    </>
                  )}
                  {service.title === "Mobile Development" && (
                    <>
                      <li>✓ iOS Development</li>
                      <li>✓ Android Development</li>
                      <li>✓ Cross-platform Apps</li>
                    </>
                  )}
                  {service.title === "UI/UX Design" && (
                    <>
                      <li>✓ User Research</li>
                      <li>✓ Interface Design</li>
                      <li>✓ Prototyping</li>
                    </>
                  )}
                </ul>
                <button className="service-cta">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-content">
          <div className="about-text">
            <h2>Who We Are</h2>
            <div className="about-description">
              <p>
                At Verdalix, we're more than just a technology company – we're innovators, 
                problem-solvers, and digital architects shaping the future of technology.
              </p>
              
              <div className="about-features">
                <div className="feature">
                  <div className="feature-icon">🎯</div>
                  <div className="feature-text">
                    <h3>Our Mission</h3>
                    <p>To empower businesses through innovative technology solutions that drive growth and success.</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">🌟</div>
                  <div className="feature-text">
                    <h3>Our Vision</h3>
                    <p>To be the leading force in digital transformation, setting new standards in technological excellence.</p>
                  </div>
                </div>

                <div className="feature">
                  <div className="feature-icon">💡</div>
                  <div className="feature-text">
                    <h3>Our Approach</h3>
                    <p>We combine cutting-edge technology with creative thinking to deliver exceptional results.</p>
                  </div>
                </div>
              </div>

              <div className="about-stats">
                <div className="stat">
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>200+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>50+</h3>
                  <p>Team Members</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-images">
            <div className="image-slider">
              {teamImages.map((image, index) => (
                <div 
                  key={index} 
                  className="slide"
                  style={{
                    backgroundImage: `url(${image.url})`,
                    animation: `slideAnimation ${teamImages.length * 5}s infinite ${index * 5}s`
                  }}
                >
                  <div className="slide-caption">{image.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="clients">
        <h2>Trusted by Industry Leaders</h2>
        <p className="clients-intro">Partnering with forward-thinking companies to drive digital innovation</p>
        
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>
              <div className="client-logo">{client.logo}</div>
              <h3>{client.name}</h3>
              <p>{client.industry}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <h2>Client Success Stories</h2>
        <p className="testimonials-intro">Hear what our clients say about their experience with Verdalix</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-content">
                <div className="quote-icon">❝</div>
                <p className="review">{testimonial.review}</p>
                <div className="rating">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </div>
              </div>
              <div className="testimonial-author">
                <div className="author-image">{testimonial.image}</div>
                <div className="author-info">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="careers" className="careers">
        <h2>Join Our Team</h2>
        <p className="careers-intro">Build the future with us. We're always looking for talented individuals who share our passion for innovation.</p>
        
        <div className="careers-grid">
          {jobOpenings.map((job, index) => (
            <div className="job-card" key={index}>
              <div className="job-header">
                <h3>{job.title}</h3>
                <div className="job-badges">
                  <span className="badge location">
                    <i className="location-icon">📍</i> {job.location}
                  </span>
                  <span className="badge type">
                    <i className="type-icon">⏰</i> {job.type}
                  </span>
                </div>
              </div>

              <div className="job-department">
                <i className="department-icon">🏢</i> {job.department}
              </div>

              <p className="job-description">{job.description}</p>

              <div className="job-details">
                <div className="details-section">
                  <h4>Responsibilities</h4>
                  <ul>
                    {job.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="details-section">
                  <h4>Requirements</h4>
                  <ul>
                    {job.requirements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <a 
                href={`mailto:jobs@verdalix.ng?subject=Application for ${job.title} Position&body=Dear Hiring Team,%0D%0A%0D%0AI am writing to apply for the ${job.title} position.%0D%0A%0D%0A[Please include your introduction and relevant experience here]%0D%0A%0D%0ABest regards,%0D%0A[Your name]`} 
                className="apply-button"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Ready to Revolutionize?</h2>
        <p>Join forces with our tech experts to transform your vision into reality</p>
        
        <div className="contact-container">
          {formState.succeeded ? (
            <div className="contact-success-message">
              <div className="success-icon">✓</div>
              <h3>Thank you for your message!</h3>
              <p>We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={formState.errors}
                    className="formspree-error"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={formState.errors}
                    className="formspree-error"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your Company Ltd."
                  />
                  <ValidationError 
                    prefix="Company" 
                    field="company"
                    errors={formState.errors}
                    className="formspree-error"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    defaultValue="Web Development"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Software Solutions">Software Solutions</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>
                  <ValidationError 
                    prefix="Service" 
                    field="service"
                    errors={formState.errors}
                    className="formspree-error"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project or requirements..."
                  rows="4"
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={formState.errors}
                  className="formspree-error"
                />
              </div>

              <button 
                type="submit" 
                className="cta-button submit-button"
                disabled={formState.submitting}
              >
                {formState.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">Verdalix</div>
              <p>Transforming ideas into powerful digital solutions that shape tomorrow's technology landscape.</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/verdalixtech/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </i>
                </a>
                <a href="https://instagram.com/verdalixtech" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </i>
                </a>
                <a href="https://x.com/verdalixTech" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <i className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </i>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <a href="#services">Services</a>
              <a href="#careers">Careers</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-links">
              <h3>Services</h3>
              <a href="#web-dev">Web Development</a>
              <a href="#software">Software Solutions</a>
              <a href="#mobile">Mobile Development</a>
              <a href="#design">UI/UX Design</a>
            </div>

            <div className="footer-newsletter">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Stay updated with our latest news and updates</p>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={newsletterState.errors}
                  className="formspree-error"
                />
                <button 
                  type="submit" 
                  className="subscribe-button"
                  disabled={newsletterState.submitting}
                >
                  {newsletterState.submitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {newsletterState.succeeded && (
                <p className="newsletter-success">Thanks for subscribing!</p>
              )}
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Verdalix. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
