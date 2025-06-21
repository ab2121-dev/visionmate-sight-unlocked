
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Volume2, Play, Pause } from "lucide-react";

export const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playDemo = () => {
    setIsPlaying(true);
    
    // Simulate audio playback
    const utterance = new SpeechSynthesisUtterance("Obstacle ahead. Chair detected two feet in front of you.");
    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    utterance.onend = () => {
      setIsPlaying(false);
    };
    
    speechSynthesis.speak(utterance);
  };

  const stopDemo = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-8">Experience VisionMate</h3>
        <Card className="bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center justify-center gap-3">
              <Volume2 className="h-8 w-8" />
              Sample Alert Demo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-300 text-lg">
              Hear how VisionMate alerts you to obstacles in your path
            </p>
            <Button
              onClick={isPlaying ? stopDemo : playDemo}
              size="lg"
              className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-4"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-5 w-5 mr-2" />
                  Stop Demo
                </>
              ) : (
                <>
                  <Play className="h-5 w-5 mr-2" />
                  Hear Sample Alert
                </>
              )}
            </Button>
            <p className="text-sm text-gray-400">
              Make sure your volume is turned up to hear the demo
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
