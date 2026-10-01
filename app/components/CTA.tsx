export default function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-6 py-16 md:px-12 md:py-20 text-center">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-white/10" />

          <div className="relative">
            <p className="text-blue-100 font-semibold">GET STARTED</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
              Ready to build something amazing?
            </h2>
            <p className="mt-5 text-blue-100 max-w-2xl mx-auto text-lg">
              Bring your ideas to life with a simple and powerful workspace
              designed for modern teams.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#pricing"
                className="bg-white text-blue-600 px-7 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Start Building
              </a>
              <a
                href="#features"
                className="border border-white/40 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}