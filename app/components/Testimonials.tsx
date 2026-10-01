const testimonials = [
  {
    name: "Alex Morgan",
    role: "Product Designer",
    message:
      "Nova makes it much easier for our team to organize projects and keep everyone aligned."
  },
  {
    name: "Sarah Williams",
    role: "Startup Founder",
    message:
      "The simple workflow and clean interface help us move from an idea to a product much faster."
  },
  {
    name: "Daniel Lee",
    role: "Engineering Lead",
    message:
      "A clean and focused workspace that makes managing our development process easier."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-blue-600 font-semibold">TESTIMONIALS</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Loved by modern teams
          </h2>
          <p className="mt-5 text-gray-600 text-lg">
            See how teams can use Nova to simplify their product development
            workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition duration-300"
            >
              <div className="text-yellow-500 text-xl" aria-label="5 out of 5 stars">
                ★★★★★
              </div>

              <p className="text-gray-600 mt-6 leading-relaxed">
                “{testimonial.message}”
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}