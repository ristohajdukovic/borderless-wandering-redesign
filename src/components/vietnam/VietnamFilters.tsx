import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { regions } from "@/data/vietnamCities";

interface VietnamFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  allTags: string[];
  resultCount: number;
}

const VietnamFilters = ({
  searchQuery,
  setSearchQuery,
  selectedRegion,
  setSelectedRegion,
  selectedTags,
  setSelectedTags,
  allTags,
  resultCount
}: VietnamFiltersProps) => {
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedRegion("All");
    setSelectedTags([]);
  };

  const hasActiveFilters = searchQuery || selectedRegion !== "All" || selectedTags.length > 0;

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search cities, tags, or keywords..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 pr-4 py-6 text-base bg-card border-border rounded-xl focus:ring-2 focus:ring-primary/20"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Region Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {regions.map((region) => (
          <Button
            key={region}
            variant={selectedRegion === region ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedRegion(region)}
            className={`rounded-full px-5 ${
              selectedRegion === region
                ? "bg-primary text-primary-foreground"
                : "hover:bg-primary/10 hover:text-primary hover:border-primary/30"
            }`}
          >
            {region === "All" ? "All Regions" : `${region} Vietnam`}
          </Button>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
        {allTags.map((tag) => (
          <motion.button
            key={tag}
            onClick={() => toggleTag(tag)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className={`cursor-pointer transition-all ${
                selectedTags.includes(tag)
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10 hover:text-primary hover:border-primary/30"
              }`}
            >
              {tag}
            </Badge>
          </motion.button>
        ))}
      </div>

      {/* Results Count & Clear */}
      <div className="flex items-center justify-center gap-4 text-sm">
        <span className="text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{resultCount}</span> of 30 days
        </span>
        <AnimatePresence>
          {hasActiveFilters && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={clearFilters}
              className="flex items-center gap-1 text-primary hover:underline"
            >
              <X className="w-3 h-3" />
              Clear filters
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VietnamFilters;
