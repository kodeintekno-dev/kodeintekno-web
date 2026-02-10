import { service } from "../data/service";
import Section from "./ui/section";

export default function Service() {
  return (
    <Section
      id="layanan"
      className="flex flex-col px-4 md:px-10 xl:px-16 py-10 md:py-14 lg:py-24 xl:py-30 my-10"
    >
      <div className="flex flex-col items-center text-center max-w-none md:max-w-xl xl:max-w-3xl mx-auto mb-14 xl:mb-20">
        <h1 className="text-2xl md:text-3xl xl:text-6xl font-bold md:font-semibold mb-4">
          Layanan Kami
        </h1>
        <p className="text-black/60 lg:text-lg xl:text-xl">
          Kami menyediakan berbagai layanan digital terpadu yang dirancang untuk
          mendukung perkembangan bisnis Anda, mulai dari pengembangan website
          hingga pemasaran digital.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 md:gap-10 lg:gap-15 xl:gap-20 px-8 md:px-14 lg:px-20 xl:px-28">
        {service.map((item, index) => (
          <div key={index}>
            <div className="flex items-center gap-2 mb-3">
              <img src={item.icon} alt="icon" />
              <p className="font-semibold text-md md:text-xl">{item.title}</p>
            </div>
            <p className="text-black/60">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
