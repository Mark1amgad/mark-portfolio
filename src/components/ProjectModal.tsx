import { useState, useCallback, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  skills: string[];
  media: MediaItem[];
  githubUrl?: string;
  externalUrl?: string;
  externalLabel?: string;
}

const ProjectModal = ({
  isOpen,
  onClose,
  title,
  description,
  skills,
  media,
  githubUrl,
  externalUrl,
  externalLabel,
}: ProjectModalProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Reset to first slide when modal opens
  useEffect(() => {
    if (isOpen && emblaApi) {
      emblaApi.scrollTo(0, true);
    }
  }, [isOpen, emblaApi]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        scrollNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, scrollPrev, scrollNext]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 gap-0 bg-background/95 backdrop-blur-xl border-border">
        {/* Media Carousel */}
        {media.length > 0 && (
          <div className="relative bg-muted/50">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {media.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex-[0_0_100%] min-w-0 relative aspect-video"
                  >
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-contain bg-black"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt || `${title} - Image ${idx + 1}`}
                        className="w-full h-full object-contain bg-black"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {media.length > 1 && (
              <>
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollPrev && !emblaApi?.canScrollPrev()}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-background transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous media"
                >
                  <ChevronLeft size={24} className="text-foreground" />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={!canScrollNext && !emblaApi?.canScrollNext()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-background transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next media"
                >
                  <ChevronRight size={24} className="text-foreground" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {media.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollTo(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? "bg-primary w-6"
                          : "bg-foreground/40 hover:bg-foreground/60"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl font-bold text-foreground">
              {title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base leading-relaxed mt-2">
              {description}
            </DialogDescription>
          </DialogHeader>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                <Github size={20} />
                View on GitHub
                <ExternalLink size={16} />
              </a>
            )}
            {externalUrl && (
              <a
                href={externalUrl}
                target={externalUrl.startsWith("/files/") ? "_self" : "_blank"}
                rel={externalUrl.startsWith("/files/") ? undefined : "noopener"}
                download={externalUrl.startsWith("/files/") ? true : undefined}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                <ExternalLink size={20} />
                {externalLabel || "Live App"}
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
