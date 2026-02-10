import Section from "./ui/section";

export default function About() {
  return (
    <Section
      id="tentang"
      className="flex flex-col lg:flex-row gap-10 items-center px-4 md:px-10 xl:px-16 py-4 md:py-10 xl:py-16"
    >
      <div className="flex-1 px-4 md:px-10 xl:px-16 py-4 md:py-10 xl:py-16 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl xl:text-6xl font-bold md:font-semibold mb-4">
          Tentang Kami
        </h1>
        <p className="text-black/60 lg:text-lg xl:text-xl">
          Kodeintekno adalah mitra strategis Anda dalam transformasi digital.
          Kami menghadirkan solusi-solusi inovatif yang menggabungkan
          kreativitas dan teknologi terkini. Dengan portofolio layanan lengkap
          mulai dari pengembangan website, desain grafis, hingga pemasaran
          digital, kami membantu bisnis Anda mencapai pertumbuhan yang
          signifikan dan berkelanjutan.
        </p>
      </div>
      <div className=" bg-gray-100 px-5 py-5 rounded-lg flex-1">
        <div className="flex gap-2">
          <img src="/img/icon/picture.svg" alt="logo" />
          <p className="font-semibold">Aktifitas Tim Kami</p>
        </div>
        <img className="mt-3" src="/img/aktifitas.jpg" alt="photo" />
      </div>
    </Section>
  );
}
