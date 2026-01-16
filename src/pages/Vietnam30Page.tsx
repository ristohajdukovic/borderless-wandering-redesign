import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VietnamHero from "@/components/vietnam/VietnamHero";
import VietnamFilters from "@/components/vietnam/VietnamFilters";
import CityCard from "@/components/vietnam/CityCard";
import { vietnamCities, allTags } from "@/data/vietnamCities";
import { MapPin } from "lucide-react";

const Vietnam30Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredCities = useMemo(() => {
    return vietnamCities.filter((city) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        city.city.toLowerCase().includes(searchLower) ||
        city.headline.toLowerCase().includes(searchLower) ||
        city.excerpt.toLowerCase().includes(searchLower) ||
        city.tags.some(tag => tag.toLowerCase().includes(searchLower));

      // Region filter
      const matchesRegion = selectedRegion === "All" || city.region === selectedRegion;

      // Tags filter
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some(tag => city.tags.includes(tag));

      return matchesSearch && matchesRegion && matchesTags;
    });
  }, [searchQuery, selectedRegion, selectedTags]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <VietnamHero />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 sm:py-16">
        {/* Filters */}
        <div className="mb-12">
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredCities.map((city, index) => (
                <CityCard key={city.day} city={city} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                No cities found
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Try adjusting your search or filters to discover more Vietnamese cities.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Journey Timeline Indicator */}
        {filteredCities.length > 0 && selectedRegion === "All" && selectedTags.length === 0 && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 bg-card border border-border rounded-2xl px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-cyan-500 rounded-full" />
                <span className="text-sm text-muted-foreground">North</span>
              </div>
              <div className="w-8 h-0.5 bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full" />
                <span className="text-sm text-muted-foreground">Central</span>
              </div>
              <div className="w-8 h-0.5 bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                <span className="text-sm text-muted-foreground">South</span>
              </div>
            </div>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Vietnam30Page;
