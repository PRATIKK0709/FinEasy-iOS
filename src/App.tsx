import React, { useState } from 'react';
import { Shield, LineChart, ArrowRight, Receipt, ChevronDown } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StepProps {
  number: string;
  title: string;
  description: string;
}

interface FaqItemProps {
  question: string;
  answer: string;
}

interface VersionBlockProps {
  version: string;
  date: string;
  changes: {
    added: string[];
    fixed: string[];
    improved: string[];
  }
}

interface PolicySectionProps {
  title: string;
  content: React.ReactNode;
}

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <header className="container mx-auto px-8 pt-40 pb-32">
          <div className="max-w-4xl">
            <h1 className="text-7xl font-light tracking-tight text-gray-900 mb-12">
              FinEasy
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-lg font-light tracking-wide">
              Financing made easy with FinEasy. Your secure, private companion for expense tracking.
            </p>
            
            <a
  href="https://apps.apple.com/in/app/fineasy/id6478165097"
  className="inline-flex items-center backdrop-blur-sm bg-black/10 text-gray-900 border border-gray-200 px-8 py-4 text-sm tracking-widest hover:bg-black/20 transition-all duration-300"
>
  DOWNLOAD ON APP STORE
  <ArrowRight className="ml-2 w-4 h-4" />
</a>

          </div>
        </header>

        <section className="py-32 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-3 gap-16 max-w-6xl">
              <FeatureCard
                icon={<Shield className="w-6 h-6" strokeWidth={1} />}
                title="Privacy First"
                description="Your financial data stays on your device, encrypted and secure."
              />
              <FeatureCard
                icon={<LineChart className="w-6 h-6" strokeWidth={1} />}
                title="Smart Analytics"
                description="Track spending patterns and get insights into your financial habits."
              />
              <FeatureCard
                icon={<Receipt className="w-6 h-6" strokeWidth={1} />}
                title="Easy Tracking"
                description="Effortlessly log expenses and manage your budget in one place."
              />
            </div>
          </div>
        </section>

        <section className="py-32 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-light mb-16 tracking-wide">FREQUENTLY ASKED QUESTIONS</h2>
              <div className="space-y-6">
                <FaqItem
                  question="How do I add an expense?"
                  answer="To add an expense, navigate to the 'Tracker' tab in the app. Then, fill in the date, amount, and note fields. Optionally, you can select a category for your expense. Finally, tap the 'Save Expense' button to add the expense."
                />
                <FaqItem
                  question="Can I set a monthly budget?"
                  answer="Yes, you can set a monthly budget in the 'Settings' tab of the app. Simply enter your desired budget amount, and the app will help you track your expenses relative to that budget."
                />
                <FaqItem
                  question="How can I view my expense logs?"
                  answer="To view your expense logs, navigate to the 'Logs' tab in the app. Here, you'll find a list of your expenses grouped by year and month. You can also search for specific expenses or filter them by category."
                />
                <FaqItem
                  question="Is there a daily expense limit feature?"
                  answer="Yes, you can enable a daily expense limit in the 'Settings' tab of the app. If enabled, the app will notify you if you exceed your specified daily expense limit."
                />
                <FaqItem
                  question="How do I contact support for further assistance?"
                  answer="If you need further assistance or have any other questions, please don't hesitate to reach out to our support team. You can contact us via email at peacefordevelopment0709@gmail.com or through the 'About' section of the app."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-light mb-16 tracking-wide">VERSION HISTORY</h2>
              <div className="space-y-12">
              <VersionBlock 
                  version="0.2, 4th Build"
                  date="December 2, 2024"
                  changes={{
                    added: [],
                    fixed: [],
                    improved: ["UI/UX Refresh."]
                  }}
                />
              <VersionBlock 
                  version="0.2, 4th Build"
                  date="September 2, 2024"
                  changes={{
                    added: [],
                    fixed: [],
                    improved: ["Haptic feedback and keyboard experience across the application."]
                  }}
                />
              <VersionBlock 
                  version="0.1, 5th Build"
                  date="August 3, 2024"
                  changes={{
                    added: ["Support for iOS 15.3"],
                    fixed: [],
                    improved: []
                  }}
                />
                <VersionBlock 
                  version="0.1, 4th Build"
                  date="March 1, 2024"
                  changes={{
                    added: ["Support for iOS 15"],
                    fixed: [],
                    improved: []
                  }}
                />
                <VersionBlock 
                  version="0.1, 3rd Build"
                  date="February 29, 2024"
                  changes={{
                    added: ["Daily expense average section"],
                    fixed: [],
                    improved: []
                  }}
                />
                <VersionBlock 
                  version="0.1, 2nd Build"
                  date="February 24, 2024"
                  changes={{
                    added: [],
                    fixed: [],
                    improved: ["Improved loading screen animation, reducing loading time"]
                  }}
                />
                <VersionBlock 
                  version="0.1, 1st Build"
                  date="February 21, 2024"
                  changes={{
                    added: ["Application got accepted for TestFlight"],
                    fixed: [],
                    improved: []
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 border-t border-gray-100 bg-gray-50/90 backdrop-blur-sm">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-light mb-16 tracking-wide">PRIVACY POLICY</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-sm text-gray-600 mb-4">Effective Date: 30 March 2024</p>
                <p className="text-gray-600 mb-8">
                  MISTILTEINN built the FinEasy app as a commercial app. This SERVICE is provided by 
                  <a href="https://www.mistilteinn.xyz/" className="text-black hover:text-gray-600"> mistilteinn.xyz </a> 
                  and is intended for use as is.
                </p>
                
                <div className="space-y-8">
                  <PolicySection
                    title="Data Collection"
                    content="The app does not collect, store, or share any personal information or user data. We do not track your usage behavior, location, or any other personal information."
                  />
                  <PolicySection
                    title="Data Storage"
                    content="The app does not store any user-generated data on external servers. All data entered by the user, such as expenses, notes, categories, and budget information, is stored locally on the user's device."
                  />
                  <PolicySection
                    title="Third-Party Services"
                    content="The app does not use any third-party services that collect personal information."
                  />
                  <PolicySection
                    title="Security"
                    content="We are committed to protecting the privacy and security of our users. The app is designed to securely store all data locally on the user's device, and we do not transmit any data to external servers."
                  />
                  <PolicySection
                    title="Children's Privacy"
                    content="This app does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13."
                  />
                  <PolicySection
                    title="Changes to This Privacy Policy"
                    content="We reserve the right to update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify users of any changes by updating the 'Effective Date' at the top of this Privacy Policy."
                  />
                  <PolicySection
                    title="Contact Us"
                    content={
                      <>
                        If you have any questions or concerns about our Privacy Policy, please contact us at{' '}
                        <a href="https://www.mistilteinn.xyz/" className="text-black hover:text-gray-600">
                          mistilteinn.xyz
                        </a>
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-8">
            <p className="text-sm text-gray-400 tracking-wide">© 2024 FinEasy</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div>
      <div className="mb-6">{icon}</div>
      <h3 className="text-lg font-light mb-4 tracking-wide">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="grid md:grid-cols-4 gap-8">
      <div className="text-sm font-light tracking-wide">{number}</div>
      <div className="md:col-span-3">
        <h3 className="text-lg font-light mb-4 tracking-wide">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 pb-6">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-light tracking-wide">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`mt-4 text-gray-600 transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const VersionBlock: React.FC<VersionBlockProps> = ({ version, date, changes }) => {
  return (
    <div className="border-b border-gray-100 pb-8">
      <div className="flex items-baseline gap-4 mb-4">
        <h3 className="text-lg font-light tracking-wide">Version {version}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <div className="space-y-2">
        {changes.added.length > 0 && (
          <div>
            <span className="text-sm font-medium text-green-600">Added:</span>
            <ul className="mt-1 ml-4 space-y-1">
              {changes.added.map((item, index) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        )}
        {changes.fixed.length > 0 && (
          <div>
            <span className="text-sm font-medium text-red-600">Fixed:</span>
            <ul className="mt-1 ml-4 space-y-1">
              {changes.fixed.map((item, index) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        )}
        {changes.improved.length > 0 && (
          <div>
            <span className="text-sm font-medium text-blue-600">Improved:</span>
            <ul className="mt-1 ml-4 space-y-1">
              {changes.improved.map((item, index) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const PolicySection: React.FC<PolicySectionProps> = ({ title, content }) => {
  return (
    <div>
      <h3 className="text-lg font-light mb-4 tracking-wide">{title}</h3>
      {typeof content === 'string' ? (
        <p className="text-gray-600">{content}</p>
      ) : (
        content
      )}
    </div>
  );
};

export default App;
