import Section from "./ui/section";
import { Button } from "./ui/button";
import { Link } from "react-router";

export default function RecentProject() {
  return (
    <Section className="w-full py-10 sm:py-16 px-4 sm:px-8 lg:px-16">
      <div className="w-full flex flex-col lg:flex-row p-6 sm:p-8 rounded-lg bg-[#FBFBFB] border border-black/10">
        <div className="flex-1 mb-6 lg:mb-0 lg:pr-8 flex flex-col items-start justify-center">
          <span className="text-sm sm:text-base">Company Profile</span>
          <div className="mt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Aviaventura
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-black/60">
              Website company profile Aviaventura yang dirancang untuk
              memperkuat citra profesional, menyampaikan layanan secara jelas,
              serta meningkatkan kepercayaan klien melalui tampilan modern dan
              informatif.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <Button variant="cta" size="cta" asChild>
              <a
                href="https://aviaventura.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kunjungi Website
              </a>
            </Button>
            <Button variant="outline" size="cta" asChild>
              <Link to="/projects/aviaventura">Lihat Detail</Link>
            </Button>
          </div>
        </div>

        <div className="flex-1 grid place-items-center lg:place-items-end">
          <Link
            to="/projects/aviaventura"
            className="w-full max-w-full sm:max-w-md lg:max-w-lg hover:opacity-90 transition-opacity"
          >
            <img
              src="/img/project/aviaventura.webp"
              alt="Project Image"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
      </div>
    </Section>
  );
}
