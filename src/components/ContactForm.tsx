
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    type: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      organization: "",
      type: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className="border-2 border-gray-200">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-black">Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-lg font-medium text-black">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              required
              className="mt-2 text-lg border-2 border-gray-300 focus:border-black"
            />
          </div>
          
          <div>
            <Label htmlFor="email" className="text-lg font-medium text-black">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
              className="mt-2 text-lg border-2 border-gray-300 focus:border-black"
            />
          </div>
          
          <div>
            <Label htmlFor="organization" className="text-lg font-medium text-black">Organization</Label>
            <Input
              id="organization"
              value={formData.organization}
              onChange={(e) => handleChange("organization", e.target.value)}
              className="mt-2 text-lg border-2 border-gray-300 focus:border-black"
            />
          </div>
          
          <div>
            <Label htmlFor="type" className="text-lg font-medium text-black">I am a *</Label>
            <Select value={formData.type} onValueChange={(value) => handleChange("type", value)}>
              <SelectTrigger className="mt-2 text-lg border-2 border-gray-300 focus:border-black">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">Individual/Family</SelectItem>
                <SelectItem value="ngo">NGO Representative</SelectItem>
                <SelectItem value="school">School/Institution</SelectItem>
                <SelectItem value="advocate">Accessibility Advocate</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="message" className="text-lg font-medium text-black">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
              rows={4}
              className="mt-2 text-lg border-2 border-gray-300 focus:border-black"
              placeholder="Tell us about your interest in VisionMate..."
            />
          </div>
          
          <Button
            type="submit"
            size="lg"
            className="w-full bg-black text-white hover:bg-gray-800 text-lg py-4"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
