import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CityDay } from "@/data/vietnamCities";

interface CityCardProps {
  city: CityDay;
  index: number;
}

const CityCard = ({ city, index }: CityCardProps) => {
  const regionColors = {
    North: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
    Central: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    South: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
    >
      {/* Day Badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-primary text-primary-foreground font-heading font-bold text-sm px-3 py-1.5 rounded-full shadow-lg">
          Day {city.day}
        </div>
      </div>

      {/* Region Badge */}
      <div className="absolute top-4 right-4 z-10">
        <Badge variant="outline" className={`${regionColors[city.region]} backdrop-blur-sm`}>
          {city.region}
        </Badge>
      </div>

      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <motion.img
          src={city.image}
          alt={city.city}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* City Name & Headline */}
        <div className="mb-3">
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
            <MapPin className="w-4 h-4" />
            <span>{city.city}, Vietnam</span>
          </div>
          <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {city.headline}
          </h3>
        </div>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {city.excerpt}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {city.highlights.map((highlight) => (
            <span
              key={highlight}
              className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-md"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {city.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {city.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{city.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Read More Link */}
        <motion.button
          className="flex items-center gap-2 text-primary font-medium text-sm group/btn"
          whileHover={{ x: 4 }}
        >
          <span>Read Day {city.day} Story</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </motion.button>
      </div>
    </motion.article>
  );
};

export default CityCard;
