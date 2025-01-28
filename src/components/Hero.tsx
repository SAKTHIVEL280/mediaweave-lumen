import { ArrowRight, Video, AudioLines, FileText } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent animate-[fadeIn_1s_ease-in]">
          Weave Your Media into Any Form
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-[fadeIn_1s_ease-in_0.2s]">
          Transform your content seamlessly between text, video, and audio using advanced AI technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-[fadeIn_1s_ease-in_0.4s]">
          {[
            { icon: FileText, title: "Text to Video & Audio", delay: "0.6s" },
            { icon: AudioLines, title: "Audio to Text & Video", delay: "0.8s" },
            { icon: Video, title: "Video to Text & Audio", delay: "1s" },
          ].map((feature, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer"
              style={{ animationDelay: feature.delay }}
            >
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <Button variant="ghost" className="group">
                Try Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4 animate-[fadeIn_1s_ease-in_1.2s]">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Try It Now
          </Button>
          <Button size="lg" variant="outline">
            Sign Up Free
          </Button>
        </div>
      </div>
    </section>
  );
}