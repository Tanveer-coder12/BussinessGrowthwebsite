export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="text-2xl font-bold">Nova</div>
            <p className="text-gray-600 mt-4 leading-relaxed">
              A modern workspace designed to help teams build and launch
              products faster.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Product</h3>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <a href="#features" className="block hover:text-blue-600 transition">Features</a>
              <a href="#pricing" className="block hover:text-blue-600 transition">Pricing</a>
              <a href="#about" className="block hover:text-blue-600 transition">About</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>
            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <a href="#about" className="block hover:text-blue-600 transition">About Us</a>
              <a href="#contact" className="block hover:text-blue-600 transition">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Follow Us</h3>
            <div className="mt-4 flex gap-4 text-sm">
              <a href="#" aria-label="X" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition">
                𝕏
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition">
                in
              </a>
              <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition">
                Git
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 Nova. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}