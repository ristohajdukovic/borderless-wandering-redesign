import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CityDay } from "@/data/vietnamCities";

interface CityCardProps {
  city: CityDay;
  index: number;
}

const CityCard = ({ city, index }: CityCardProps) => {
  const regionLabel = {
    North: "N",
    Central: "C", 
    South: "S"
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="group relative border-b border-border pb-6 md:border md:border-border md:p-0 md:pb-0"
    >
      {/* Mobile: Horizontal Layout / Desktop: Vertical Card */}
      <div className="flex gap-4 md:block">
        {/* Image */}
        <div className="relative w-24 h-24 md:w-full md:h-48 flex-shrink-0 overflow-hidden md:border-b md:border-border">
          <img
            src={city.image}
            alt={city.city}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          {/* Day Number Overlay */}
          <div className="absolute top-2 left-2 md:top-3 md:left-3">
            <span className="font-mono text-[10px] md:text-xs bg-background/90 backdrop-blur-sm px-1.5 py-0.5 md:px-2 md:py-1 border border-border">
              D{String(city.day).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 md:p-4">
          {/* City & Region */}
          <div className="flex items-start justify-between gap-2 mb-1 md:mb-2">
            <span className="text-[10px] md:text-xs tracking-widest uppercase text-muted-foreground">
              {city.city} — {regionLabel[city.region]}
            </span>
            <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
          </div>

          {/* Headline */}
          <h3 className="font-heading text-sm md:text-base font-semibold text-foreground leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {city.headline}
          </h3>

          {/* Excerpt - Hidden on mobile for cleaner look */}
          <p className="hidden md:block text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
            {city.excerpt}
          </p>

          {/* Tags - Minimal */}
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {city.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] md:text-xs text-muted-foreground border-b border-dotted border-muted-foreground/40"
              >
                {tag}
              </span>
            ))}
            {city.tags.length > 2 && (
              <span className="text-[10px] md:text-xs text-muted-foreground/60">
                +{city.tags.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default CityCard;