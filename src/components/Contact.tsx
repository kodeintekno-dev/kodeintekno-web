import Section from "./ui/section";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
          message: form.message,
        },
        publicKey,
      )
      .then(() => {
        setLoading(false);
        alert("Pesan berhasil dikirim");

        setForm({
          name: "",
          email: "",
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
      className="p-5 py-8 sm:px-8 lg:p-16 flex flex-col xl:flex-row gap-16"
    >
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
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <img src="/img/icon/name.svg" alt="Nama" />
                  <div className="font-semibold text-sm md:text-xl">Nama</div>
                </div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="masukkan nama anda disini"
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
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="masukkan email anda disini"
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
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="masukkan pesan anda untuk kami disini"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent placeholder-gray-400 text-sm resize-none text-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF743C] hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-sm"
              id="submit-button"
            >
              {loading ? "Mengirim..." : "Kirim"}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
