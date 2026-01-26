import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
}

const ProjectImageCarousel = ({ images, title }: ProjectImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
        <span className="text-4xl font-bold text-muted-foreground/30">{title.charAt(0)}</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group/carousel">
      <img
        src={images[currentIndex]}
        alt={`${title} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500"
      />
      
      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-background"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} className="text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-background"
            aria-label="Next image"
          >
            <ChevronRight size={18} className="text-foreground" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? "bg-primary w-4" 
                    : "bg-foreground/50 hover:bg-foreground/70"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectImageCarousel;
