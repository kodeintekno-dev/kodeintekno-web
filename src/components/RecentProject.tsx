import Section from "./ui/section";

export default function RecentProject() {
  return (
    <Section className="w-full py-30 px-17.5">
      <div
        className="w-full flex p-7 rounded-lg bg-[#FBFBFB] border border-black/10"
      >
        <div className="flex-1/2 flex flex-col justify-between">
          <span className="text-sm">Company Profile</span>
          <div className="flex flex-col max-w-133 w-full">
            <h2 className="text-[64px] font-semibold">Avieaventura</h2>
            <p className="text-[20px] text-black/60">
              Website company profile Avieaventura yang dirancang untuk
              memperkuat citra profesional, menyampaikan layanan secara jelas,
              serta meningkatkan kepercayaan klien melalui tampilan modern dan
              informatif.
            </p>
          </div>
        </div>
        <div className="flex-1/2 grid place-items-end">
          <img
            src="/img/project/aviaventura.webp"
            alt=""
            style={{
              maxWidth: 454,
            }}
          />
        </div>
      </div>
    </Section>
  );
}
