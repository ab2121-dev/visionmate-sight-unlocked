
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

export const ProductComparison = () => {
  const features = [
    { name: "Offline AI Processing", visionmate: true, envision: false, orcam: false },
    { name: "Voice Alerts", visionmate: true, envision: true, orcam: true },
    { name: "Price Under $500", visionmate: true, envision: false, orcam: false },
    { name: "Wearable Design", visionmate: true, envision: false, orcam: true },
    { name: "Privacy Protection", visionmate: true, envision: false, orcam: true },
    { name: "No Subscription", visionmate: true, envision: false, orcam: true },
  ];

  const FeatureIcon = ({ supported }: { supported: boolean }) => (
    supported ? (
      <Check className="h-5 w-5 text-green-600" />
    ) : (
      <X className="h-5 w-5 text-red-500" />
    )
  );

  return (
    <section id="comparison" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12 text-black">How VisionMate Compares</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left p-6 text-xl font-bold text-black">Feature</th>
                <th className="text-center p-6">
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-black">VisionMate</span>
                    <Badge className="mt-2 bg-green-600 text-white">Our Product</Badge>
                  </div>
                </th>
                <th className="text-center p-6 text-xl font-bold text-black">Envision</th>
                <th className="text-center p-6 text-xl font-bold text-black">OrCam</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-6 text-lg font-medium text-black">{feature.name}</td>
                  <td className="p-6 text-center">
                    <FeatureIcon supported={feature.visionmate} />
                  </td>
                  <td className="p-6 text-center">
                    <FeatureIcon supported={feature.envision} />
                  </td>
                  <td className="p-6 text-center">
                    <FeatureIcon supported={feature.orcam} />
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-100 font-bold">
                <td className="p-6 text-lg text-black">Starting Price</td>
                <td className="p-6 text-center text-green-600 text-lg">$299</td>
                <td className="p-6 text-center text-black text-lg">$3,500</td>
                <td className="p-6 text-center text-black text-lg">$4,500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
