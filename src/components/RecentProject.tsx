import Section from "./ui/section";

export default function RecentProject() {
  return (
    <Section className="w-full py-10 sm:py-16 px-4 sm:px-8 lg:px-16">
      <div className="w-full flex flex-col lg:flex-row p-6 sm:p-8 rounded-lg bg-[#FBFBFB] border border-black/10">
        <div className="flex-1 mb-6 lg:mb-0 lg:pr-8">
          <span className="text-sm sm:text-base">Company Profile</span>
          <div className="mt-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4">
              Avieaventura
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-black/60">
              Website company profile Avieaventura yang dirancang untuk
              memperkuat citra profesional, menyampaikan layanan secara jelas,
              serta meningkatkan kepercayaan klien melalui tampilan modern dan
              informatif.
            </p>
          </div>
        </div>

        <div className="flex-1 grid place-items-center lg:place-items-end">
          <img
            src="/img/project/aviaventura.webp"
            alt="Project Image"
            className="w-full max-w-full sm:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </Section>
  );
}
