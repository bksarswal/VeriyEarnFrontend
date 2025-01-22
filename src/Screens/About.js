import React from 'react';

const About = () => {
  return (
    <div className="w-full min-h-screen bg-[#F2FAFA] absolute top-0 left-0 right-0 -z-10">
      <div className="mx-auto max-w-7xl px-4 pt-[28vh]">
        <div className="relative">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </div>
          
          <div className="space-y-12 pb-32">
            <p className="text-center text-gray-800 text-xl">
              Welcome to Verify Earn, a platform where your time and efforts turn into rewards!
            </p>

            <div>
              <h1 className="text-4xl font-semibold text-center mb-8">Overview</h1>
              <p className="text-gray-800 text-lg">
                At Verify Earn, we believe in empowering individuals by creating opportunities to earn money effortlessly. Our platform connects users with simple, engaging tasks that they can complete at their convenience. From surveys to app testing and data verification, we ensure every task is easy, rewarding, and impactful.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-800 text-lg">
                Our mission is to help people monetize their spare time by offering meaningful micro-tasks that benefit both users and businesses. We aim to create a win-win ecosystem where companies achieve their goals and users are rewarded fairly for their contributions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Why Choose</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Simple Tasks:</span>
                  <span>No technical expertise required—anyone can participate and earn.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Instant Rewards:</span>
                  <span>Get compensated quickly for the tasks you complete.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Flexibility:</span>
                  <span>Work at your pace, from anywhere, anytime.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Transparency:</span>
                  <span>Your earnings are tracked in real-time with no hidden terms.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
              <ol className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1. Sign Up:</span>
                  <span>Create your account on Verify Earn and get started.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2. Choose Tasks:</span>
                  <span>Browse through available tasks and pick what interests you.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3. Complete & Earn:</span>
                  <span>Finish tasks and watch your earnings grow.</span>
                </li>
              </ol>
            </section>

            <div className="space-y-6 text-lg">
              <p className="text-gray-800">
                Whether you're looking to supplement your income, explore new experiences, or simply spend your time more productively, Verify Earn is here to make it happen.
              </p>

              <p className="text-gray-800">
                Join the community of thousands already earning with Verify Earn. Your journey to extra income starts here!
              </p>
            </div>

            <div className="text-center pt-8">
              <p className="mb-2 text-lg">
                Ready to get started?{' '}
                <a href="#" className="text-[#2196F3] hover:text-[#1976D2] font-semibold">
                  Sign Up Now
                </a>
              </p>
              <p className="text-gray-800">and begin earning today!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
