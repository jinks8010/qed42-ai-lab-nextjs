"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Brain, Code, Cpu, Layers, LogIn, Menu, MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import CapabilityCard from "@/components/capability-card"
import ContactForm from "@/components/contact-form"
import SignInCTA from "@/components/sign-in-cta"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="26" height="47" viewBox="0 0 26 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.8993 0.847656V4.39517H11.3572V0.847656H14.8993ZM21.9097 18.4374V14.8899H18.3676V18.4374H14.8255V21.911H11.2834V18.3635H14.8255V14.816H18.3676V4.39517H14.8255V7.86877H11.2834V11.4163H7.7413V14.9638H4.34679V18.5113H0.804688V25.5324H4.34679V29.0799H21.9097V25.5324H25.4518V18.5113L21.9097 18.4374Z"
                fill="url(#paint0_radial_5570_2896)"
              />
              <path
                d="M4.34766 29.0059V32.4795H7.88976V36.027H11.4319V46.5217H14.9002V36.027H18.4423V32.4795H21.9106V29.0059H4.34766Z"
                fill="url(#paint1_linear_5570_2896)"
              />
              <path d="M21.9106 28.4883H4.34766V29.0056H21.9106V28.4883Z" fill="#ED1C24" />
              <defs>
                <radialGradient
                  id="paint0_radial_5570_2896"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(17.809 12.5569) scale(23.7044 23.7406)"
                >
                  <stop stopColor="#ED1C24" />
                  <stop offset="1" stopColor="#8C003F" />
                </radialGradient>
                <linearGradient
                  id="paint1_linear_5570_2896"
                  x1="4.37562"
                  y1="37.7656"
                  x2="21.9314"
                  y2="37.7656"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6D6E71" />
                  <stop offset="0.09" stopColor="#727376" />
                  <stop offset="0.2" stopColor="#818285" />
                  <stop offset="0.31" stopColor="#9A9B9D" />
                  <stop offset="0.44" stopColor="#BCBEBF" />
                  <stop offset="0.51" stopColor="#D1D3D4" />
                  <stop offset="0.54" stopColor="#C0C2C4" />
                  <stop offset="0.62" stopColor="#A2A4A6" />
                  <stop offset="0.7" stopColor="#8B8C8F" />
                  <stop offset="0.79" stopColor="#7A7B7E" />
                  <stop offset="0.88" stopColor="#707174" />
                  <stop offset="1" stopColor="#6D6E71" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-xl font-bold">QED42 AI Labs</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#demos" className="text-sm font-medium hover:text-qed-red">
              Demos
            </Link>
            <Link href="#capabilities" className="text-sm font-medium hover:text-qed-red">
              Capabilities
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-qed-red">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-qed-red">
              Contact
            </Link>
          </nav>

          {/* Desktop Sign In Button */}
          <Button asChild size="sm" className="hidden md:flex bg-qed-red hover:bg-qed-red/90">
            <Link href="#sign-in">
              <LogIn className="mr-2 h-4 w-4" /> Sign In
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-qed-gray hover:text-qed-red focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-50 animate-in slide-in-from-top duration-300">
            <div className="container py-4 px-4 flex flex-col space-y-4">
              <Link
                href="#demos"
                className="text-sm font-medium py-2 hover:text-qed-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                Demos
              </Link>
              <Link
                href="#capabilities"
                className="text-sm font-medium py-2 hover:text-qed-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                Capabilities
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium py-2 hover:text-qed-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium py-2 hover:text-qed-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild size="sm" className="w-full bg-qed-red hover:bg-qed-red/90 mt-2">
                <Link href="#sign-in" onClick={() => setMobileMenuOpen(false)}>
                  <LogIn className="mr-2 h-4 w-4" /> Sign In
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start text-left space-y-4 max-w-4xl">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Welcome to QED42 AI Labs{" "}
                  <span className="text-qed-gray">— a powerhouse of AI demos & experiments</span>
                </h1>
                <p className="max-w-[700px] text-qed-gray md:text-xl mt-6">
                  On this page you'll find examples of cutting-edge AI applications developed by our team. Sign in to
                  test these applications and experience the future of AI technology.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" className="bg-qed-red hover:bg-qed-red/90">
                  <Link href="#sign-in">
                    Sign In to Test <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-qed-red text-qed-red hover:bg-qed-red/10">
                  <Link href="#demos">Explore Demos</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sign In CTA Section */}
        <section id="sign-in" className="py-12 md:py-16 bg-qed-lightgray">
          <div className="container px-4 md:px-6">
            <SignInCTA />
          </div>
        </section>

        {/* Projects/Demos Section */}
        <section id="demos" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-start space-y-4 text-left">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI Demos & Experiments</h2>
                <p className="max-w-[700px] text-qed-gray md:text-xl">
                  Test our innovative AI applications and see how they can transform your business processes. Sign in to
                  access these demos with your free account.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <ProjectCard
                title="Intelligent Document Analyzer"
                description="Extract, categorize, and summarize information from complex documents with 95% accuracy. Perfect for legal and financial document processing."
                image="/placeholder.svg?height=300&width=400"
                tags={["NLP", "Document Processing", "Demo"]}
                demoUrl="#sign-in"
              />
              <ProjectCard
                title="Predictive Maintenance AI"
                description="Test our real-time equipment monitoring system that predicts failures before they occur, reducing downtime by 37%."
                image="/placeholder.svg?height=300&width=400"
                tags={["Predictive Analytics", "IoT", "Demo"]}
                demoUrl="#sign-in"
              />
              <ProjectCard
                title="Advanced AI Chatbot"
                description="Interact with our advanced chatbot that handles complex inquiries with natural language understanding and contextual awareness."
                image="/placeholder.svg?height=300&width=400"
                tags={["Conversational AI", "NLU", "Demo"]}
                demoUrl="#sign-in"
              />
              <ProjectCard
                title="Visual Quality Inspector"
                description="Try our computer vision system that detects product defects with 99.2% accuracy, improving quality control processes."
                image="/placeholder.svg?height=300&width=400"
                tags={["Computer Vision", "Quality Assurance", "Demo"]}
                demoUrl="#sign-in"
              />
              <ProjectCard
                title="AI Recommendation Engine"
                description="Experience our recommendation system that increases user engagement by 42% through personalized content delivery."
                image="/placeholder.svg?height=300&width=400"
                tags={["Recommendation Systems", "Personalization", "Demo"]}
                demoUrl="#sign-in"
              />
              <ProjectCard
                title="Fraud Detection System"
                description="Test our real-time transaction monitoring with advanced pattern recognition to identify fraudulent activities with high precision."
                image="/placeholder.svg?height=300&width=400"
                tags={["Anomaly Detection", "Security", "Demo"]}
                demoUrl="#sign-in"
              />
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-16 md:py-24 bg-qed-lightgray">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-start space-y-4 text-left">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our AI Capabilities</h2>
                <p className="max-w-[700px] text-qed-gray md:text-xl">
                  QED42 AI Labs is constantly experimenting with cutting-edge AI technologies to develop practical
                  applications.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <CapabilityCard
                title="Natural Language Processing"
                description="Advanced text analysis, sentiment analysis, and language understanding capabilities powering our document and conversation demos."
                icon={<MessageSquare className="h-10 w-10 text-qed-red" />}
              />
              <CapabilityCard
                title="Computer Vision"
                description="Image recognition, object detection, and visual data analysis systems that drive our visual inspection applications."
                icon={<Cpu className="h-10 w-10 text-qed-red" />}
              />
              <CapabilityCard
                title="Machine Learning"
                description="Custom ML models for prediction, classification, and pattern recognition used in our predictive maintenance demos."
                icon={<Brain className="h-10 w-10 text-qed-red" />}
              />
              <CapabilityCard
                title="Deep Learning"
                description="Neural network architectures for complex problem-solving and data analysis that power our most advanced AI experiments."
                icon={<Layers className="h-10 w-10 text-qed-red" />}
              />
              <CapabilityCard
                title="AI Integration"
                description="Seamless integration of AI capabilities into existing systems and workflows, demonstrated in our practical business applications."
                icon={<Code className="h-10 w-10 text-qed-red" />}
              />
              <CapabilityCard
                title="Custom AI Solutions"
                description="Tailored AI applications designed to address specific business challenges, available for testing in our demo portal."
                icon={<Cpu className="h-10 w-10 text-qed-red" />}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="QED42 AI Labs team working on AI solutions"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About QED42 AI Labs</h2>
                <p className="text-qed-gray">
                  QED42 AI Labs is our dedicated research and development division focused on exploring the frontiers of
                  artificial intelligence and creating practical applications.
                </p>
                <p className="text-qed-gray">
                  Our team of AI researchers, engineers, and industry experts is committed to developing cutting-edge
                  solutions that solve real-world problems across various sectors.
                </p>
                <p className="text-qed-gray">
                  This demo portal allows you to experience our latest AI experiments firsthand. Create a free account
                  to test our applications with a limit of 50 requests per day.
                </p>
                <div className="pt-4">
                  <Button asChild className="bg-qed-red hover:bg-qed-red/90">
                    <Link href="#contact">
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 md:py-24 bg-gradient-to-br from-qed-dark to-black text-white relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-qed-red blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-qed-red blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-qed-red/20 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First column with text */}
              <div className="flex flex-col justify-center">
                <div className="inline-block mb-4">
                  <span className="bg-qed-red px-4 py-1 text-sm font-medium rounded-full text-white">CONTACT US</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                  Let's Discuss Your <span className="text-qed-red">AI Project</span>
                </h2>
                <p className="max-w-[500px] text-white/80 md:text-xl mb-8">
                  Want to increase your request limit or discuss how our AI solutions can help your organization? Our
                  team is ready to assist you.
                </p>

                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 mt-2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-qed-red/20 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-qed-red"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Call us at</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-qed-red/20 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-qed-red"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Email us at</p>
                      <a href="mailto:ai-labs@qed42.com" className="font-medium hover:text-qed-red">
                        ai-labs@qed42.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second column with the form */}
              <div className="bg-white text-qed-dark rounded-lg shadow-xl p-6 md:p-8 transform md:translate-y-4 relative">
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-qed-red rounded-lg transform -rotate-6"></div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-qed-red rounded-lg transform rotate-6"></div>
                <div className="relative z-10">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8 bg-white">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M60 0C26.9 0 0 26.9 0 60C0 93.1 26.9 120 60 120C93.1 120 120 93.1 120 60C120 26.9 93.1 0 60 0Z"
                fill="#e41e26"
              />
              <path d="M85 35H35V85H85V35Z" fill="white" />
              <path
                d="M60 50C54.5 50 50 54.5 50 60C50 65.5 54.5 70 60 70C65.5 70 70 65.5 70 60C70 54.5 65.5 50 60 50Z"
                fill="#e41e26"
              />
            </svg>
            <span className="text-lg font-semibold">QED42 AI Labs</span>
          </div>
          <p className="text-sm text-qed-gray">© {new Date().getFullYear()} QED42. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-qed-gray hover:text-qed-red">
              Privacy
            </Link>
            <Link href="#" className="text-qed-gray hover:text-qed-red">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

