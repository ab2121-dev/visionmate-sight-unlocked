
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/components/ContactForm";
import { ProductComparison } from "@/components/ProductComparison";
import { TeamSection } from "@/components/TeamSection";
import { FeatureCard } from "@/components/FeatureCard";
import { DemoSection } from "@/components/DemoSection";
import { Eye, Volume2, Wifi, DollarSign, Shield, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="bg-black text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Eye className="h-8 w-8" />
              <h1 className="text-2xl font-bold">VisionMate</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#features" className="text-lg hover:text-gray-300 transition-colors">Features</a>
              <a href="#comparison" className="text-lg hover:text-gray-300 transition-colors">Compare</a>
              <a href="#team" className="text-lg hover:text-gray-300 transition-colors">Team</a>
              <a href="#contact" className="text-lg hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Vision Beyond Sight
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-800 leading-relaxed max-w-3xl mx-auto">
            VisionMate detects nearby obstacles and speaks them out loud — using real-time AI, completely offline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4">
              Pre-Order Now
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white text-lg px-8 py-4">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <DemoSection />

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-black">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Shield className="h-12 w-12" />}
              title="Offline AI"
              description="Works without internet connection for complete privacy and reliability"
            />
            <FeatureCard 
              icon={<Volume2 className="h-12 w-12" />}
              title="Voice Alerts"
              description="Clear, immediate audio feedback about obstacles and navigation"
            />
            <FeatureCard 
              icon={<DollarSign className="h-12 w-12" />}
              title="Affordable"
              description="Accessible pricing for individuals, families, and organizations"
            />
            <FeatureCard 
              icon={<Eye className="h-12 w-12" />}
              title="Wearable"
              description="Lightweight attachment that works with any glasses frame"
            />
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <ProductComparison />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-black">Get In Touch</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold mb-6 text-black">For Organizations</h4>
              <p className="text-lg text-gray-800 mb-6">
                We partner with NGOs, schools, and accessibility advocates to make VisionMate available to those who need it most.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-black" />
                  <span className="text-lg">Bulk pricing available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-black" />
                  <span className="text-lg">Training and support included</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Pre-order Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Coming Soon</h3>
          <p className="text-xl mb-8 text-gray-300">
            Be among the first to experience VisionMate. Multiple models available to fit your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-4">
              Pre-Order Basic - $40
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4">
              View All Models
            </Button>
          </div>
          <div className="text-center space-y-2 mb-6">
            <p className="text-gray-300">
              <span className="font-semibold">Basic $40</span> • <span className="font-semibold">Plus $99</span> • <span className="font-semibold">Pro $149</span>
            </p>
          </div>
          <p className="text-sm text-gray-400">
            Expected delivery: Q2 2024 • 30-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Eye className="h-6 w-6" />
            <span className="text-xl font-bold">VisionMate</span>
          </div>
          <p className="text-gray-400">Empowering independent navigation for the visually impaired</p>
          <div className="mt-6 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
