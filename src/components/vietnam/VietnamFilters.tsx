import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
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
    <div className="space-y-4 md:space-y-6">
      {/* Search & Region Row */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 pr-8 h-10 text-sm bg-transparent border-border focus-visible:ring-1 focus-visible:ring-foreground"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Region Tabs - Minimal */}
        <div className="flex items-center border border-border divide-x divide-border">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3 md:px-4 py-2 text-xs tracking-wide transition-colors ${
                selectedRegion === region
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {region === "All" ? "ALL" : region.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Tags - Scrollable on mobile */}
      <div className="relative">
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap scrollbar-hide">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`flex-shrink-0 px-3 py-1.5 text-xs border transition-colors ${
                selectedTags.includes(tag)
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
        <span>
          {resultCount} {resultCount === 1 ? 'entry' : 'entries'}
        </span>
        <AnimatePresence>
          {hasActiveFilters && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={clearFilters}
              className="text-foreground hover:underline underline-offset-2"
            >
              Clear all
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default VietnamFilters;