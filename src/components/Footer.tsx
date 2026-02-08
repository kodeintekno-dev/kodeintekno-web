import { footers } from "@/data/footer";

export default function Footer() {
  function capitalize(str: string) {
    return str
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <footer className="-mt-7 py-24 px-5 md:px-12 lg:px-16 grid gap-15 [grid-template-areas:'l''f''c'] xl:[grid-template-areas:'l_f''c_f'] border-x border-dashed border-black/40 container mx-auto">
      <img src="/img/logo.png" alt="logo" className="w-52 [grid-area:l]" />
      <p className="[grid-area:c] inline-flex items-end">
        &copy; 2025 Kodeintekno | All rights reserved.
      </p>
      <ul className="flex flex-col md:flex-row justify-between gap-10 [grid-area:f]">
        {Object.entries(footers).map(([section, items]) => (
          <li key={section} className="flex-1">
            <ul className="space-y-4">
              <li className="font-semibold text-3xl">{capitalize(section)}</li>
              {items.map((item, i) => (
                <li key={i}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </footer>
  );
}
