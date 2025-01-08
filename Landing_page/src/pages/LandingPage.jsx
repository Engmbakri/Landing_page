import React from 'react';
import { ChevronRight, FileText, Star, Users, CheckCircle, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      title: "Professional CV Writing",
      description: "Expert writers craft compelling CVs that highlight your strengths",
      icon: FileText
    },
    {
      title: "ATS Optimization",
      description: "Ensure your CV passes Applicant Tracking Systems",
      icon: CheckCircle
    },
    {
      title: "Career Consulting",
      description: "Get personalized advice from industry experts",
      icon: Users
    }
  ];

  const testimonials = [
    {
      text: "The team helped me land my dream job. Their attention to detail is remarkable.",
      author: "Sarah Kamal",
      role: "Marketing Director"
    },
    {
      text: "Outstanding service! My CV now truly reflects my professional journey.",
      author: "Ahmed Alshamsi",
      role: "Software Engineer"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">Emirates CV Services</div>
            <div className="space-x-8">
              <button className="text-gray-600 hover:text-gray-900">Services</button>
              <button className="text-gray-600 hover:text-gray-900">About</button>
              <button className="text-gray-600 hover:text-gray-900">Contact</button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Your Career Journey
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional CV writing services to help you stand out in today's competitive job market
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 inline-flex items-center">
              Start Your Journey
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Take Your Career to the Next Level?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of successful professionals who've transformed their careers with us
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-gray-100 inline-flex items-center">
            Get Your Professional CV Today
            <ArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Emirates CV Services</h3>
              <p className="text-sm">Professional CV writing services to help you succeed.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>CV Writing</li>
                <li>Resume Review</li>
                <li>Career Consulting</li>
                <li>LinkedIn Optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: mrm507415@gmail.com</li>
                <li>Phone: (971) 543553186</li>
                <li>Address: Abu Dhabi , UAE</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
