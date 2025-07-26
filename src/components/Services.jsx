import { useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Shield,
  Headphones
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      icon: <Globe className="w-8 h-8" />,
      description: "Complete web applications from frontend to backend with modern technologies",
      technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL"],
      features: [
        "Responsive design across all devices",
        "Modern UI/UX with latest design trends",
        "RESTful API development",
        "Database design and optimization",
        "Authentication and authorization",
        "Performance optimization"
      ],
      deliverables: [
        "Fully functional web application",
        "Clean, maintainable code",
        "Documentation and deployment",
        "Post-launch support"
      ],
      timeline: "2-8 weeks",
      startingPrice: "₹20,000"
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Cross-platform mobile applications with native performance",
      technologies: ["React Native", "JavaScript", "TypeScript"],
      features: [
        "Cross-platform compatibility (iOS & Android)",
        "Native performance and user experience",
        "Push notifications and real-time features",
        "Offline functionality",
        "App store deployment assistance",
        "Backend integration"
      ],
      deliverables: [
        "Fully functional mobile app",
        "App store ready builds",
        "Source code and documentation",
        "Deployment guidance"
      ],
      timeline: "4-12 weeks",
      startingPrice: "₹25,000"
    },
    {
      id: 3,
      title: "Custom Software Solutions",
      icon: <Code2 className="w-8 h-8" />,
      description: "Tailored software solutions for specific business needs",
      technologies: ["React", "Node.js", "TypeScript", "Various APIs"],
      features: [
        "Business process automation",
        "Custom CRM/ERP systems",
        "API development and integration",
        "Legacy system modernization",
        "Third-party service integration",
        "Scalable architecture design"
      ],
      deliverables: [
        "Custom software solution",
        "Technical documentation",
        "Training and handover",
        "Maintenance and support plan"
      ],
      timeline: "4-16 weeks",
      startingPrice: "₹22,000"
    },
    {
      id: 4,
      title: "Database Design & Optimization",
      icon: <Database className="w-8 h-8" />,
      description: "Efficient database architecture and performance optimization",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
      features: [
        "Database schema design",
        "Query optimization",
        "Data migration services",
        "Backup and recovery setup",
        "Performance monitoring",
        "Security implementation"
      ],
      deliverables: [
        "Optimized database structure",
        "Migration scripts",
        "Performance reports",
        "Documentation and best practices"
      ],
      timeline: "1-4 weeks",
      startingPrice: "₹8,000"
    },
    {
      id: 5,
      title: "Performance Optimization",
      icon: <Zap className="w-8 h-8" />,
      description: "Speed up existing applications and improve user experience",
      technologies: ["React", "Next.js", "Webpack", "CDN", "Caching"],
      features: [
        "Code splitting and lazy loading",
        "Image and asset optimization",
        "Caching strategies implementation",
        "Bundle size reduction",
        "Core Web Vitals improvement",
        "SEO optimization"
      ],
      deliverables: [
        "Performance audit report",
        "Optimized application",
        "Monitoring setup",
        "Recommendations document"
      ],
      timeline: "1-3 weeks",
      startingPrice: "₹6,000"
    }
  ];

  const whyChooseMe = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous testing and code review process"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-Time Delivery",
      description: "Committed to meeting deadlines and milestones"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Solutions",
      description: "Security-first approach in all implementations"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Post-launch support and maintenance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming ideas into powerful digital solutions. From concept to deployment, 
            I deliver high-quality software that drives business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              onClick={() => setActiveService(index)}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-500/20 rounded-full text-sm">
                      +{service.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Starting from</p>
                  <p className="text-2xl font-bold text-green-400">{service.startingPrice}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Timeline</p>
                  <p className="font-semibold">{service.timeline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service View */}
        {activeService !== null && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-6">
                {services[activeService].icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">{services[activeService].title}</h2>
                <p className="text-gray-300">{services[activeService].description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {services[activeService].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">What You Get</h3>
                <ul className="space-y-3">
                  {services[activeService].deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-center">
                      <ArrowRight className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-300">Investment</p>
                      <p className="text-2xl font-bold text-green-400">{services[activeService].startingPrice}+</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">Timeline</p>
                      <p className="text-lg font-semibold">{services[activeService].timeline}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Why Choose Me Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Me?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseMe.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg inline-block mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your requirements and create something amazing together. 
            Get a free consultation and project estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918928210967" 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-transform text-center block"
            >
              📞 Call for Free Consultation
              <span className="block text-sm mt-1 opacity-90">+91 9760780866</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
