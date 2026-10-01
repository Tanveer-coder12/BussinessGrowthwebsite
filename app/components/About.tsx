import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold">ABOUT NOVA</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Built for teams that want to move faster.
            </h2>
            <p className="text-gray-600 mt-6 leading-relaxed">
              Nova is designed to simplify the way modern teams build, manage
              and launch digital products.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Our platform brings powerful tools into one simple workspace so
              teams can focus on creating great products.
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Learn More
            </a>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/nova-dashboard.png"
              alt="Nova dashboard interface"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}