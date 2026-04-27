import Section from "./ui/section";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, ChevronDown } from "lucide-react";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    intent: "Pengembangan Produk/Layanan Digital (Bisnis)",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      alert("EmailJS env belum lengkap");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          intent: form.intent,
          message: form.message,
        },
        publicKey,
      )
      .then(() => {
        setLoading(false);
        setIsSubmitted(true);

        setForm({
          name: "",
          email: "",
          intent: "Pengembangan Produk/Layanan Digital (Bisnis)",
          message: "",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        alert("Gagal mengirim pesan");
      });
  };

  return (
    <Section
      id="contact"
      className="p-5 py-8 sm:px-8 lg:p-16 flex flex-col xl:flex-row gap-16 scroll-mt-24"
    >
      <div className="flex-1 text-center md:text-left space-y-4">
        <h1 className="font-semibold text-3xl lg:text-6xl">Hubungi Kami</h1>
        <div className="text-black/60 lg:text-lg space-y-4">
          <p>
            Ingin membangun solusi digital inovatif? Kami siap membantu
            mewujudkan ide Anda melalui pengembangan sistem, website, hingga
            aplikasi mobile untuk mendukung pertumbuhan bisnis Anda.
          </p>
          <p>
            Kami juga membuka peluang kolaborasi untuk menciptakan dampak sosial
            yang nyata melalui kemitraan program CSR berbasis teknologi. Mari
            bergabung bersama kami untuk menciptakan masa depan yang lebih baik.
          </p>
        </div>
      </div>

      <div className="flex-1">
        {isSubmitted ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-orange-50/50 rounded-2xl border border-orange-100 animate-in fade-in zoom-in duration-500">
            <div className="size-20 bg-orange-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-200">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-bold mb-3">Pesan Terkirim!</h2>
            <p className="text-black/60 mb-8 max-w-[40ch]">
              Terima kasih telah menghubungi kami. Tim kami akan segera meninjau
              pesan Anda dan memberikan respon terbaik sesuai dengan kebutuhan
              Anda.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-orange-600 font-semibold hover:underline cursor-pointer"
            >
              Kirim Pesan Lainnya
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <img
                      src="/img/icon/name.svg"
                      alt="Nama"
                      className="size-5 md:size-8"
                    />
                    <div className="font-semibold text-sm md:text-xl">Nama</div>
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="masukkan nama anda disini"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-400 text-sm text-black"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <img
                      src="/img/icon/mail.svg"
                      alt="Email"
                      className="size-5 md:size-8"
                    />
                    <div className="font-semibold text-sm md:text-xl">Email</div>
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="masukkan email anda disini"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-400 text-sm text-black"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="/img/icon/ux.svg"
                    alt="Intent"
                    className="size-5 md:size-8"
                  />
                  <div className="font-semibold text-sm md:text-xl">
                    Pilih Kebutuhan Anda
                  </div>
                </div>
                <div className="relative">
                  <select
                    name="intent"
                    value={form.intent}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-sm text-black bg-white cursor-pointer appearance-none transition-all hover:border-orange-200"
                  >
                    <option value="Pengembangan Proyek Digital">
                      Pengembangan Proyek Digital
                    </option>
                    <option value="Kemitraan Program CSR">
                      Kemitraan Program CSR
                    </option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="/img/icon/message.svg"
                    alt="Pesan"
                    className="size-5 md:size-8"
                  />
                  <div className="font-semibold text-sm md:text-xl">Pesan</div>
                </div>
                <textarea
                  rows={4}
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="masukkan pesan anda untuk kami disini"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-400 text-sm resize-none text-black"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FF743C] hover:bg-orange-600 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-sm cursor-pointer"
                id="submit-button"
              >
                {loading ? "Mengirim..." : "Kirim"}
              </button>
            </div>
          </form>
        )}
      </div>
    </Section>
  );
}
