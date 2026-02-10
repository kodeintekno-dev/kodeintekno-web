import { links } from "@/data/navbar";
import { sosialMedia } from "@/data/sosmed";

export default function Footer() {
  return (
    <footer className="-mt-7 py-24 px-5 md:px-12 lg:px-16 grid gap-15 [grid-template-areas:'l''f''c'] xl:[grid-template-areas:'l_f''c_f'] border-x border-dashed border-black/40 container mx-auto">
      <img src="/img/logo.png" alt="logo" className="w-52 [grid-area:l]" />

      <p className="[grid-area:c] inline-flex items-end">
        &copy; 2025 Kodeintekno | All rights reserved.
      </p>

      <ul className="flex flex-col md:flex-row justify-between gap-10 [grid-area:f]">
        <li className="flex-1">
          <ul className="space-y-4">
            <li className="font-semibold text-3xl">Menu</li>

            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </li>

        <li className="flex-1">
          <ul className="space-y-4">
            <li className="font-semibold text-3xl">Kontak</li>

            <li>+62 82170270241</li>
            <li>kodeintekno@gmail.com</li>
            <li>Harvest City, Ragemanunggal, Setu, Bekasi.</li>
          </ul>
        </li>

        <li className="flex-1">
          <ul className="space-y-4">
            <li className="font-semibold text-3xl">Social Media</li>

            {sosialMedia.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </footer>
  );
}
