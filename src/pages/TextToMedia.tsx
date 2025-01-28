import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";

const TextToMedia = () => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleConvert = (type: "video" | "audio") => {
    setIsLoading(true);
    // Simulate conversion
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Text converted to ${type} successfully!`);
    }, 2000);
  };

  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle>Text to Video & Audio</CardTitle>
          <CardDescription>Convert your text into video or audio format</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Enter your text here..."
            className="min-h-[200px]"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="flex gap-4">
            <Button 
              onClick={() => handleConvert("video")} 
              disabled={isLoading || !text}
              className="flex-1"
            >
              Convert to Video
            </Button>
            <Button 
              onClick={() => handleConvert("audio")} 
              disabled={isLoading || !text}
              className="flex-1"
            >
              Convert to Audio
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TextToMedia;