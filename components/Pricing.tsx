export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Simple Pricing
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="border rounded-xl p-6 bg-white">
          <h3 className="font-semibold">Starter</h3>
          <p className="text-3xl font-bold mt-2">$29</p>
          <p className="text-gray-600 mt-2">Basic analytics setup</p>
        </div>

        <div className="border-2 border-black rounded-xl p-6 bg-white">
          <h3 className="font-semibold">Pro</h3>
          <p className="text-3xl font-bold mt-2">$99</p>
          <p className="text-gray-600 mt-2">Full tracking + optimization</p>
        </div>

        <div className="border rounded-xl p-6 bg-white">
          <h3 className="font-semibold">Enterprise</h3>
          <p className="text-3xl font-bold mt-2">Custom</p>
          <p className="text-gray-600 mt-2">Advanced integrations</p>
        </div>
      </div>
    </section>
  );
}
