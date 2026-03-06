import Image from "next/image";

export default function Home() {
  const locations = [
    { name: "Costa del Sol", href: "/locations/costa-del-sol" },
    { name: "Marbella", href: "/locations/marbella" },
    {
      name: "Puerto Banús & Nueva Andalucía",
      href: "/locations/puerto-banus-nueva-andalucia",
    },
    { name: "Benahavís", href: "/locations/benahavis" },
    { name: "San Pedro de Alcántara", href: "/locations/san-pedro-de-alcantara" },
    { name: "Estepona", href: "/locations/estepona" },
    { name: "Sotogrande", href: "/locations/sotogrande" },
    { name: "La Cala de Mijas", href: "/locations/la-cala-de-mijas" },
  ];

  const galleryImages = [
    { src: "/doors/door-01.jpg", alt: "Bespoke security entrance door installation" },
    { src: "/doors/door-02.jpg", alt: "Security front door with glazed detailing" },
    { src: "/doors/door-03.jpg", alt: "High security door with contemporary panel design" },
    { src: "/doors/door-04.jpg", alt: "Security door set within rendered villa facade" },
    { src: "/doors/door-05.jpg", alt: "Security door with side light panel" },
    { src: "/doors/door-06.jpg", alt: "Reinforced entrance door in modern apartment building" },
  ];

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-16 text-zinc-900">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Cenit Security Doors
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-900">
          Bespoke security doors for Costa del Sol residences
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-zinc-600">
          London‑standard engineering, applied to villas and apartments across
          Marbella, Puerto Banús, Benahavís, San Pedro de Alcántara, Estepona,
          Sotogrande and La Cala de Mijas. Every installation is discreetly
          specified, managed and overseen from consultation through to
          completion.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
          Selected installations
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image) => (
            <div key={image.src} className="space-y-2 text-sm">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 200px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-xs text-zinc-600">{image.alt}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-zinc-500">
          Every door is specified and installed as part of the structural
          security of the property, rather than as standard joinery.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
          Regional coverage
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {locations.map((loc) => (
            <a
              key={loc.href}
              href={loc.href}
              className="rounded-xl border border-zinc-200 bg-white p-4 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-zinc-300 hover:shadow"
            >
              {loc.name}
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
          Services delivered with discretion and direct oversight
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-zinc-700">
          <li>Front entrance security doors for villas and apartments</li>
          <li>
            Terrace and secondary access doors, engineered to resist forced
            entry
          </li>
          <li>Safe room doors and conversions for families and high‑value assets</li>
          <li>Internal door upgrades to create controlled security zones</li>
          <li>Optional discreet access control and biometric integration</li>
        </ul>
      </section>
    </main>
  );
}
