import Navbar from "./components/Navbar";
import Features from "./components/Features";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nova",
  description:
    "Nova helps modern teams build, manage and launch their products faster.",
  url: "https://nova-example.vercel.app"
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      <Navbar />

      <header className="relative overflow-hidden px-6 py-28 md:py-36">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700">
            ✨ The smarter way to build products
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight">
            Build faster.
            <br />
            <span className="text-blue-600">Launch smarter.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nova helps modern teams build, manage and launch their products
            faster with powerful tools in one simple workspace.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#pricing"
              className="bg-blue-600 text-white px-7 py-3.5 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Get Started
            </a>

            <a
              href="#features"
              className="border border-gray-300 px-7 py-3.5 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Explore Features
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            No credit card required · Start building in minutes
          </p>
        </div>
      </header>

      <Features />
      <About />
      <Pricing />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}