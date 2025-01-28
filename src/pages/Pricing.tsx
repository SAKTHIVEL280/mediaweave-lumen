import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out MediaWeave",
      features: [
        "5 text-to-media conversions/month",
        "3 audio-to-media conversions/month",
        "2 video-to-media conversions/month",
        "Basic quality outputs",
      ],
    },
    {
      name: "Pro",
      price: "$19/month",
      description: "For content creators and professionals",
      features: [
        "50 text-to-media conversions/month",
        "30 audio-to-media conversions/month",
        "20 video-to-media conversions/month",
        "HD quality outputs",
        "Priority processing",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations",
      features: [
        "Unlimited conversions",
        "4K quality outputs",
        "API access",
        "Custom integrations",
        "Dedicated support",
      ],
    },
  ];

  return (
    <div className="container py-8">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Button>
      <h1 className="text-4xl font-bold text-center mb-4">Pricing Plans</h1>
      <p className="text-muted-foreground text-center mb-8">Choose the perfect plan for your needs</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-3xl font-bold mb-6">{plan.price}</div>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => navigate("/auth")}>
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;