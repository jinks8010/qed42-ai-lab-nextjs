"use client"

import ProjectCard from "@/components/project-card"


export default function Demos(){

    return(
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
    )
}