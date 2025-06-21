
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TeamSection = () => {
  const team = [
    {
      name: "Aarush Pancholi",
      role: "CEO & Co-Founder",
      description: "Vision and strategy leader driving accessible technology innovation",
    },
    {
      name: "Abhinav Balamurugan",
      role: "CTO & Co-Founder",
      description: "Technical architect specializing in AI and computer vision systems",
    },
    {
      name: "Arnav Mehta",
      role: "Head of Product",
      description: "Product development expert focused on user experience and accessibility",
    },
    {
      name: "Saket Rage",
      role: "Lead AI Engineer",
      description: "Machine learning specialist developing offline AI processing capabilities",
    },
    {
      name: "Mohnish Sai",
      role: "Hardware Engineer",
      description: "Wearable technology engineer designing lightweight, durable solutions",
    },
  ];

  return (
    <section id="team" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12 text-black">Our Team</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
