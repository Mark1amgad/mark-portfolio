import { useEffect } from "react";

const OpenPromptTest = () => {
  useEffect(() => {
    window.location.replace("https://huggingface.co/spaces/Mark1amgad/prompt-understanding-test");
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting...</p>
    </div>
  );
};

export default OpenPromptTest;
