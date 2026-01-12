import { Play } from "lucide-react";

const videos = [
  {
    id: "dsGicej-jrY",
    title: "Thailand vs Medellín Comparison",
  },
  {
    id: "aeTLR85Df68",
    title: "Living in Thailand for $1,500/month",
  },
  {
    id: "h7mJQBVlESk",
    title: "Best Cities for Remote Workers",
  },
];

const VideoSection = () => {
  return (
    <section id="videos" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Latest Videos</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-video rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-heading font-semibold text-sm">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://youtube.com/c/PhilipJames360"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-block"
          >
            View All Videos
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
