import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const VideoToMedia = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith("video/")) {
      setFile(selectedFile);
    } else {
      toast.error("Please select a valid video file");
    }
  };

  const handleConvert = (type: "audio" | "text") => {
    setIsLoading(true);
    // Simulate conversion
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Video converted to ${type} successfully!`);
    }, 2000);
  };

  return (
    <div className="container py-8">
      <Card>
        <CardHeader>
          <CardTitle>Video to Text & Audio</CardTitle>
          <CardDescription>Convert your video into text or audio format</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="cursor-pointer"
          />
          {file && (
            <div className="flex gap-4">
              <Button 
                onClick={() => handleConvert("audio")} 
                disabled={isLoading}
                className="flex-1"
              >
                Convert to Audio
              </Button>
              <Button 
                onClick={() => handleConvert("text")} 
                disabled={isLoading}
                className="flex-1"
              >
                Convert to Text
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoToMedia;