const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "For individuals getting started.",
    features: ["Up to 3 projects", "Basic analytics", "Community support"],
    popular: false
  },
  {
    name: "Professional",
    price: "$29",
    description: "For growing teams and businesses.",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "Team collaboration"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For organizations with advanced needs.",
    features: [
      "Everything in Professional",
      "Advanced security",
      "Custom integrations",
      "Dedicated support"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-blue-600 font-semibold">PRICING</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Simple pricing for every team
          </h2>
          <p className="mt-5 text-gray-600 text-lg">
            Choose a plan that fits your needs and start building with Nova
            today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.popular ? "border-blue-600 shadow-lg" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-gray-600 mt-3">{plan.description}</p>

              <div className="mt-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>

              <a
                href="#contact"
                className={`block text-center w-full mt-8 py-3 rounded-lg font-medium transition ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                Get Started
              </a>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}