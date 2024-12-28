
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Workout. Stake. Earn.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Join the future of fitness with LockFit
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#download"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Download Now
            </a>
            <a
              href="#learn-more"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose LockFit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              title="Earn $LOCKIN Tokens"
              description="Get rewarded with $LOCKIN tokens for completing workout challenges and competitions."
              icon="💰"
            />
            <FeatureCard
              title="Verified Workouts"
              description="Advanced sensors ensure fair play and accurate tracking of your fitness activities."
              icon="✅"
            />
            <FeatureCard
              title="Community Challenges"
              description="Join team-based competitions and participate in global fitness leagues."
              icon="🤝"
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gray-50" id="download">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Get Started Today</h2>
          <p className="text-xl text-gray-600 mb-12">
            Available on iOS and Android
          </p>
          <div className="flex gap-6 justify-center">
            <button className="bg-black text-white px-8 py-3 rounded-lg flex items-center gap-2">
              <span>App Store</span>
            </button>
            <button className="bg-black text-white px-8 py-3 rounded-lg flex items-center gap-2">
              <span>Play Store</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">LockFit</h3>
              <p className="text-gray-400">
                The future of fitness motivation
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Workout Tracking</li>
                <li>Token Staking</li>
                <li>Competitions</li>
                <li>Rewards</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>Whitepaper</li>
                <li>Blog</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Twitter</li>
                <li>Discord</li>
                <li>Telegram</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="p-6 rounded-xl bg-gray-50 text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
