import { useState } from "react";
import { Globe, MapPin, Play, Stamp } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  {
    value: "2017",
    label: "Fieldwork start.",
    icon: MapPin,
  },
  {
    value: "20M+",
    label: "Lifetime views on videos.",
    icon: Globe,
  },
  {
    value: "40+",
    label: "Countries researched.",
    icon: Stamp,
  },
  {
    value: "100,000+",
    label: "Subscribers across various platforms.",
    icon: Play,
  },
];

const lockedIndex = 3;

const MetricStrip = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="py-8 md:py-10 bg-background">
      <div className="container mx-auto px-4">
        <div
          className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-10"
          onMouseLeave={() => setHoverIndex(null)}
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isLocked = index === lockedIndex;
            const isHovered = hoverIndex === index;
            const isActive = isLocked || isHovered;
            const flexClass = isLocked
              ? "lg:flex-[3]"
              : isHovered
                ? "lg:flex-[2]"
                : "lg:flex-[1]";

            return (
              <motion.div
                key={metric.label}
                className={`relative flex-1 overflow-hidden rounded-[12px] border border-border/50 shadow-sm transition-[flex,background-color,color] duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
                  isActive ? "bg-primary" : "bg-primary/5"
                } ${flexClass}`}
                onMouseEnter={() => setHoverIndex(index)}
                onFocus={() => setHoverIndex(index)}
                onBlur={() => setHoverIndex(null)}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
              >
                <div
                  className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary-foreground))/0.08_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary-foreground))/0.08_1px,transparent_1px)] bg-[size:32px_32px] opacity-60"
                  aria-hidden="true"
                />
                <div className="relative flex h-full min-h-[170px] sm:min-h-[200px] md:min-h-[230px] flex-col justify-between p-4 sm:p-5 md:p-7 text-left">
                  <div className="pb-4 sm:pb-6">
                    <Icon
                      className={`h-8 w-8 ${
                        isActive ? "text-primary-light/80" : "text-primary"
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <div
                      className={`break-words font-heading font-bold leading-none tracking-tight ${
                        isActive
                          ? "text-primary-light/90 text-[2.1rem] sm:text-[2.4rem] md:text-[3.1rem]"
                          : "text-primary text-[1.7rem] sm:text-[2rem] md:text-[2.4rem]"
                      }`}
                    >
                      {metric.value}
                    </div>
                    <div
                      className={`text-xs sm:text-sm md:text-base ${
                        isActive ? "text-primary-light/75" : "text-primary/75"
                      }`}
                    >
                      {metric.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetricStrip;
