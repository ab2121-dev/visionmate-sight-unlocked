
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border-2 border-gray-200 hover:border-black transition-colors">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4 text-black">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-black">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 text-center text-lg leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};
