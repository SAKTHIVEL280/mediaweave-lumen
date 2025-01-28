import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AudioToMedia = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith("audio/")) {
      setFile(selectedFile);
    } else {
      toast.error("Please select a valid audio file");
    }
  };

  const handleConvert = (type: "video" | "text") => {
    setIsLoading(true);
    // Simulate conversion
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Audio converted to ${type} successfully!`);
    }, 2000);
  };

  return (
    <div className="container py-8">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Audio to Text & Video</CardTitle>
          <CardDescription>Convert your audio into text or video format</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            className="cursor-pointer"
          />
          {file && (
            <div className="flex gap-4">
              <Button 
                onClick={() => handleConvert("video")} 
                disabled={isLoading}
                className="flex-1"
              >
                Convert to Video
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

export default AudioToMedia;