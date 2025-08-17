import { TypeAnimation } from 'react-type-animation'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Mail, Github, Linkedin, ExternalLink, Download, Code, Brain, Database, Cloud, Award, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import './App.css'

function App() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [showSkillImages, setShowSkillImages] = useState(false)

  const certifications = [
    {
      id: 1,
      title: "Introduction to Artificial Intelligence (AI)",
      issuer: "IBM",
      date: "June 2025",
      description: "Comprehensive introduction to AI concepts, machine learning fundamentals, and practical applications in various industries.",
      skills: ["Artificial Intelligence", "Machine Learning", "AI Ethics", "Problem Solving"],
      credentialId: "IBM-AI-2025-001"
    },
    {
      id: 2,
      title: "Go Beyond the Numbers: Translate Data into Insights",
      issuer: "Google",
      date: "Feb 2025",
      description: "Advanced data analysis techniques focusing on extracting meaningful insights from complex datasets and communicating findings effectively.",
      skills: ["Data Analysis", "Data Visualization", "Statistical Analysis", "Business Intelligence"],
      credentialId: "GOOGLE-DATA-2025-002"
    },
    {
      id: 3,
      title: "Python for Data Science",
      issuer: "Google",
      date: "Jan 2025",
      description: "Comprehensive Python programming course focused on data science applications, including pandas, numpy, and machine learning libraries.",
      skills: ["Python", "Pandas", "NumPy", "Data Science", "Machine Learning"],
      credentialId: "GOOGLE-PYTHON-2025-003"
    },
    {
      id: 4,
      title: "Foundations of Data Science",
      issuer: "Google",
      date: "Dec 2024",
      description: "Fundamental concepts of data science including data collection, cleaning, analysis, and interpretation methodologies.",
      skills: ["Data Science", "Statistics", "Data Cleaning", "Research Methods"],
      credentialId: "GOOGLE-FOUNDATIONS-2024-004"
    },
    {
      id: 5,
      title: "Foundations: Data, Data, Everywhere",
      issuer: "Google",
      date: "Sep 2023",
      description: "Introduction to the data analytics field, covering the data analysis process and key analytical thinking concepts.",
      skills: ["Data Analytics", "Analytical Thinking", "Data Lifecycle", "Data Ethics"],      credentialId: "GOOGLE-FOUNDATIONS-2023-005"
    }
  ]

  // Array of skill images to cycle through
  const skillImages = [
    { icon: 
      '/python.png', name: 'Python' },
  ];

  useEffect(() => {
    // Simulate a delay to show the initial animation
    const timer = setTimeout(() => {
      setShowSkillImages(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skillImages.length);
    }, 3000); // Change skill image every 3 seconds

    return () => clearInterval(interval);
  }, [skillImages.length]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["profile", "about", "projects", "contact", "certifications"]
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          if (scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const [activeSection, setActiveSection] = useState("profile")

  const projects = [
    {
      title: "Smart Elevator System with Object Detection",
      description: "Published at the 2024 International Conference on Advances in Data Engineering and Intelligent Computing Systems (ADICS). Designed and implemented an intelligent elevator system utilizing object detection to dynamically prioritize floor selection based on real-time passenger presence.",
      technologies: ["Computer Vision", "Machine Learning", "Object Detection", "Python"],
      gradient: "from-blue-500 to-purple-500",
      link: "#"
    },
    {
      title: "Smart Attendance Management System",
      description: "Developed a web-based attendance tracking system integrating face recognition and geofencing to ensure accurate and location-based attendance logging. Implemented facial recognition using computer vision techniques and integrated GPS-based geofencing for location validation.",
      technologies: ["Face Recognition", "Geofencing", "Computer Vision", "Web Development"],
      gradient: "from-green-500 to-teal-500",
      link: "#"
    }
  ]

  return (
    <div>
      {/* Profile Section */}
      <section id="profile" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-4 animate-slide-up text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              My name is
            </h1>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8">
              Rohith Varma Suraparaju
            </h1>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Award className="w-20 h-20 text-purple-400 mx-auto mb-4" />
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">Certifications</h2>
            <p className="text-gray-300 text-xl">Professional achievements and continuous learning in AI & Data Science</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <Card key={cert.id} className="bg-gray-800/70 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-white mb-2">{cert.title}</CardTitle>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <span className="font-medium text-purple-300">{cert.issuer}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                    <Award className="w-8 h-8 text-purple-400 flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardDescription className="text-gray-300 mb-4">{cert.description}</CardDescription>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Skills Acquired:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs border border-purple-500/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Credential ID: {cert.credentialId}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="relative group inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <Card className="relative bg-gray-800/70 backdrop-blur-sm border border-purple-400/30 rounded-xl p-8 max-w-2xl mx-auto hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-0">
                  <h3 className="text-3xl font-bold text-purple-400 mb-4">Continuous Learning</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I am committed to staying current with the latest developments in AI and Data Science. 
                    These certifications represent my dedication to professional growth and expertise in 
                    cutting-edge technologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-4">
              AI & Data Science
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-8">
              developer
            </h3>
            <p className="text-cyan-400 text-xl mb-8">Hello, Welcome to my Portfolio.</p>
                  Master's student in Data Science and Artificial Intelligence with expertise in Python, C++, and Java. 
                  Skilled in machine learning, deep learning, and NLP using TensorFlow, PyTorch, Keras, NLTK, spaCy, GPT, and sentiment analysis. 
                  Proficient in generative AI tools including OpenAI LLMs, Hugging Face LLMs, LangChain, RAG, GANs, VAEs, and diffusion models. 
                  Passion for building scalable, ethical, and data-driven AI solutions for impactful business decision-making.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <div className="relative w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                  {showSkillImages ? (
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <img 
                        key={currentSkillIndex}
                        src={skillImages[currentSkillIndex].icon}
                        alt={skillImages[currentSkillIndex].name}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                  ) : (
                    <TypeAnimation
                      sequence={[
                        'Python', 1000,
                        'C++', 1000,
                        'Java', 1000,
                        'Data Analysis', 1000,
                        'Deep Learning', 1000,
                        'NLP', 1000,
                        'Generative AI', 1000,
                        'Prompt Engineering', 1000,
                        'Cloud Platforms', 1000
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      className="text-4xl md:text-6xl font-extrabold text-white"
                    />
                  )}
                </div>
              </div>
            </div>

          <div className="text-center mt-12">
            <a href="/Rohith_Varma_Suraparaju_Resume.pdf" download="Rohith_Varma_Suraparaju_Resume.pdf">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                <Download className="mr-2 h-5 w-5" /> Download CV
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-300 text-xl">Showcasing my work and problem-solving abilities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`relative group rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 bg-gradient-to-br ${project.gradient}`}
              >
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-10 transition-opacity"></div>
                <div className="relative p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-200 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-white/20 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-white text-gray-900 hover:bg-gray-200 font-bold py-2 px-5 rounded-full shadow-md">
                      Explore <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300 text-xl mb-12">Let's connect and discuss your next project!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-gray-800/70 backdrop-blur-sm border border-green-400/30 rounded-xl p-8 hover:border-green-400 transition-all duration-300 transform hover:scale-105">
                <Mail className="w-12 h-12 text-green-400 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">suraparajurohithvarma@gmail.com</p>
                <a href="mailto:suraparajurohithvarma@gmail.com">
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-full shadow-md">
                    Send Email
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-gray-800/70 backdrop-blur-sm border border-blue-400/30 rounded-xl p-8 hover:border-blue-400 transition-all duration-300 transform hover:scale-105">
                <Linkedin className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-gray-300 mb-4">linkedin.com/in/rohith-varma-suraparaju-9a73531b7/</p>
                <a href="https://www.linkedin.com/in/rohith-varma-suraparaju-9a73531b7/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full shadow-md">
                    Connect on LinkedIn
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-gray-800/70 backdrop-blur-sm border border-purple-400/30 rounded-xl p-8 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
                <Github className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-white mb-2">GitHub</h3>
                <p className="text-gray-300 mb-4">github.com/RohithVarmaSuraparaju</p>
                <a href="https://github.com/RohithVarmaSuraparaju" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-5 rounded-full shadow-md">
                    View GitHub
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-gray-800/70 backdrop-blur-sm border border-pink-400/30 rounded-xl p-8 hover:border-pink-400 transition-all duration-300 transform hover:scale-105">
                {/* <Phone className="w-12 h-12 text-pink-400 mb-4 mx-auto" /> */}
                <h3 className="text-2xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 913 2602522</p>
                <a href="tel:+19132602522">
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-5 rounded-full shadow-md">
                    Call Me
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm relative z-10">
        <p>&copy; {new Date( ).getFullYear()} Rohith Varma Suraparaju. All rights reserved.</p>
        <p>Made with Manus</p>
      </footer>
    </div>
  )
}

export default App
