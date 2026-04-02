import { useParams, Link } from "react-router";
import { projects } from "@/data/project";
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, User, Layout } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Contact from "@/components/Contact";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Section className="w-full py-32 flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Proyek tidak ditemukan</h1>
        <Button asChild>
          <Link to="/projects">Kembali</Link>
        </Button>
      </Section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} – Portofolio Kodeintekno</title>
        <meta name="description" content={project.fullDescription} />
      </Helmet>

      {/* Navigation */}
      <Button
        variant="ghost"
        asChild
        className="w-fit h-auto p-0 hover:bg-transparent transition-all"
      >
        <Link to="/projects" className="flex items-center gap-3">
          <div className="flex items-center justify-center size-11 rounded-lg border border-black/10 bg-white shadow-sm">
            <ArrowLeft size={20} />
          </div>
          <span className="font-semibold text-base text-black/40">
            Kembali
          </span>
        </Link>
      </Button>

      {/* Hero Image */}
      <Section className="p-2 overflow-hidden bg-white mt-2">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full aspect-video object-cover rounded-md"
        />
      </Section>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        {/* Left Column: Description */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <Section className="p-6 sm:p-8 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold border-b border-black/10 pb-3">
              Tentang Proyek
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-black/60 leading-relaxed whitespace-pre-line">
              {project.fullDescription || "Deskripsi lengkap tidak tersedia."}
            </p>

            {project.gallery && project.gallery.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {project.gallery.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="rounded-lg border border-black/5"
                  />
                ))}
              </div>
            )}
          </Section>
        </div>

        {/* Right Column: Info Sidebar */}
        <div className="flex flex-col gap-8">
          <Section className="p-6 sm:p-8 bg-[#FBFBFB] border border-black/10 flex flex-col gap-6">
            <h3 className="text-xl font-bold border-b border-black/10 pb-3">
              Informasi Proyek
            </h3>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3 text-black/80">
                <User className="size-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-black/40 uppercase tracking-widest">
                    Klien
                  </p>
                  <p className="font-medium text-black/80">
                    {project.client || "Klien Rahasia"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-black/80">
                <Calendar className="size-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-black/40 uppercase tracking-widest">
                    Tahun
                  </p>
                  <p className="font-medium text-black/80 text-lg">
                    {project.year || "2024"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-black/80">
                <Layout className="size-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-black/40 uppercase tracking-widest">
                    Kategori
                  </p>
                  <p className="font-medium text-black/80 text-lg">
                    {project.category}
                  </p>
                </div>
              </div>
            </div>

            {project.demo && (
              <Button variant="cta" size="cta" className="w-full" asChild>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Kunjungi Website <ExternalLink size={18} />
                </a>
              </Button>
            )}
          </Section>

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <Section className="p-6 sm:p-8 flex flex-col gap-6">
              <h3 className="text-lg font-semibold border-b border-black/10 pb-3">
                Teknologi Digunakan
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-black/5 border border-black/10 rounded-lg text-sm font-medium text-black/70 hover:bg-black/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Section>
          )}
        </div>
      </div>
      <Contact />
    </>
  );
}
