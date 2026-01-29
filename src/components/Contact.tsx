export default function Contact() {
  return (
    <section className="p-5 py-8 sm:px-8 lg:p-16 bg-white border border-black/10 rounded-lg flex flex-col xl:flex-row gap-16">
      <div className="flex-1 text-center md:text-left space-y-4">
        <h1 className="font-semibold text-3xl lg:text-6xl">Hubungi Kami</h1>
        <p className="text-black/60 lg:text-lg">
          Punya ide yang ingin diwujudkan? Kami siap bantu dalam UI/UX Design,
          Web Development, Digital Marketing, hingga 3D & Graphic Design.
          Hubungi kami sekarang dan mari mulai kolaborasi untuk membuat sesuatu
          yang luar biasa.
        </p>
      </div>

      <div className="flex-1">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <img src="/img/icon/name.svg" alt="Nama" />
                <div className="font-semibold text-sm md:text-xl">Nama</div>
              </div>
              <input
                type="text"
                placeholder="Fulan bin Fulan ..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-400 text-sm text-black"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <img src="/img/icon/mail.svg" alt="Email" />
                <div className="font-semibold text-sm md:text-xl">Email</div>
              </div>
              <input
                type="email"
                placeholder="fulan02@gmail.com ..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-400 text-sm text-black"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/img/icon/message.svg" alt="Pesan" />
              <div className="font-semibold text-sm md:text-xl">Pesan</div>
            </div>
            <textarea
              rows={4}
              placeholder="Saya ingin membuat web ....."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-400 text-sm resize-none text-black"
            />
          </div>

          <button
            className="w-full bg-[#FF743C] hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-sm"
            id="submit-button"
          >
            Kirim
          </button>
        </div>
      </div>
    </section>
  );
}
