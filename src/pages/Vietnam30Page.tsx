import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VietnamHero from "@/components/vietnam/VietnamHero";
import VietnamFilters from "@/components/vietnam/VietnamFilters";
import CityCard from "@/components/vietnam/CityCard";
import { vietnamCities, allTags } from "@/data/vietnamCities";

const Vietnam30Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredCities = useMemo(() => {
    return vietnamCities.filter((city) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        city.city.toLowerCase().includes(searchLower) ||
        city.headline.toLowerCase().includes(searchLower) ||
        city.excerpt.toLowerCase().includes(searchLower) ||
        city.tags.some(tag => tag.toLowerCase().includes(searchLower));

      const matchesRegion = selectedRegion === "All" || city.region === selectedRegion;

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some(tag => city.tags.includes(tag));

      return matchesSearch && matchesRegion && matchesTags;
    });
  }, [searchQuery, selectedRegion, selectedTags]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <VietnamHero />

      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Filters */}
        <div className="mb-8 md:mb-10">
          <VietnamFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            allTags={allTags}
            resultCount={filteredCities.length}
          />
        </div>

        {/* Cities Grid */}
        <AnimatePresence mode="wait">
          {filteredCities.length > 0 ? (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4"
            >
              {filteredCities.map((city, index) => (
                <CityCard key={city.day} city={city} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 md:py-24"
            >
              <p className="text-muted-foreground text-sm">
                No entries match your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedRegion("All");
                  setSelectedTags([]);
                }}
                className="mt-4 text-sm text-foreground underline underline-offset-4 hover:no-underline"
              >
                Reset filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Minimal Region Legend */}
        {filteredCities.length > 0 && selectedRegion === "All" && selectedTags.length === 0 && !searchQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 md:mt-16 pt-6 border-t border-border"
          >
            <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <span>N — North</span>
              <span>C — Central</span>
              <span>S — South</span>
            </div>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Vietnam30Page;