
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TeamSection = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      description: "Former Microsoft AI researcher with 10+ years in computer vision",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      description: "Hardware engineer specializing in wearable assistive technology",
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of Accessibility",
      description: "Orientation & mobility specialist with 15 years experience",
    },
    {
      name: "James Kim",
      role: "Lead AI Engineer",
      description: "Computer vision expert, former Apple accessibility team",
    },
  ];

  return (
    <section id="team" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12 text-black">Our Team</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center border-2 border-gray-200 hover:border-black transition-colors">
              <CardHeader>
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <CardTitle className="text-xl font-bold text-black">{member.name}</CardTitle>
                <p className="text-lg font-medium text-gray-600">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
