import { Check } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "AI-Powered Conversions",
      description: "State-of-the-art AI models for accurate media transformations",
    },
    {
      title: "Multiple Languages",
      description: "Support for 50+ languages with automatic translation",
    },
    {
      title: "High Quality Output",
      description: "Crystal clear audio and professional video quality",
    },
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
          Why Choose MediaWeave?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl hover:scale-105 transition-transform"
            >
              <Check className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}