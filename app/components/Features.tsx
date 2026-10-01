const features = [
  {
    title: "Lightning Fast",
    description:
      "Optimized performance helps your team move quickly without unnecessary delays.",
    icon: "⚡"
  },
  {
    title: "Easy to Scale",
    description:
      "Flexible tools and workflows designed to grow alongside your business.",
    icon: "📈"
  },
  {
    title: "Secure by Design",
    description:
      "Built with modern security practices to help keep your projects and data protected.",
    icon: "🔒"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-blue-600 font-semibold">FEATURES</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Everything you need to build better
          </h2>
          <p className="mt-5 text-gray-600 text-lg">
            Powerful features designed to help modern teams create, manage and
            launch products faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mt-6">{feature.title}</h3>
              <p className="text-gray-600 mt-3 leading-relaxed">
                {feature.description}
              </p>
              <a
                href="#pricing"
                className="inline-block mt-6 text-blue-600 font-medium hover:text-blue-800"
              >
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}