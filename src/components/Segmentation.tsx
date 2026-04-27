import Section from "./ui/section";
import { Button } from "./ui/button";
import { ArrowRight, Briefcase, Heart } from "lucide-react";

export default function Segmentation() {
  const brandOrange = "#FF743C";
  const brandBlue = "#1B80C8";

  return (
    <Section id="csr" className="px-5 py-12 md:py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header - Sharp Title & Detailed Description */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-5 text-black">
            Solusi Digital & Dampak Sosial
          </h1>
          <p className="text-black/60 lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Kami tidak mengelola donasi. Kami membangun program kemitraan
            berbasis teknologi untuk menciptakan solusi sosial yang inovatif dan
            berkelanjutan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Business Card - Sharp & Relevant */}
          <div className="p-8 rounded-lg bg-[#FBFBFB] border border-black/10 flex flex-col h-full">
            <div
              className="size-12 rounded-lg flex items-center justify-center mb-6"
              style={{ backgroundColor: `${brandOrange}1A`, color: brandOrange }}
            >
              <Briefcase size={24} />
            </div>

            <h3 className="text-xl font-bold mb-3 text-black">
              Pengembangan Proyek Digital
            </h3>
            <p className="text-black/60 mb-8 flex-1 text-sm md:text-base leading-relaxed">
              Skalakan operasional dan jangkauan produk Anda melalui
              pengembangan sistem, website, dan aplikasi mobile yang dirancang
              untuk pertumbuhan bisnis yang terukur.
            </p>

            <Button asChild variant="cta" className="w-full sm:w-auto">
              <a href="#layanan" className="flex items-center gap-2">
                Eksplorasi Solusi <ArrowRight size={18} />
              </a>
            </Button>
          </div>

          {/* CSR/Impact Card - Sharp & Relevant */}
          <div className="p-8 rounded-lg bg-[#FBFBFB] border border-black/10 flex flex-col h-full">
            <div
              className="size-12 rounded-lg flex items-center justify-center mb-6"
              style={{ backgroundColor: `${brandBlue}1A`, color: brandBlue }}
            >
              <Heart size={24} />
            </div>

            <h3 className="text-xl font-bold mb-3 text-black">
              Kemitraan Program CSR
            </h3>
            <p className="text-black/60 mb-8 flex-1 text-sm md:text-base leading-relaxed">
              Bangun inisiatif sosial yang kredibel. Kami membantu organisasi
              merancang dan menjalankan program CSR berbasis teknologi yang
              transparan dan berdampak luas.
            </p>

            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto border-orange-500 text-orange-500 hover:bg-orange-50"
            >
              <a href="#contact" className="flex items-center gap-2">
                Mulai Kemitraan <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
