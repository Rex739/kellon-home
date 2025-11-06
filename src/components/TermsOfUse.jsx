import React, { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { getVisitorLocation, getLegalJurisdiction } from '../utils/locationUtils'

const TermsOfUse = ({ onBack }) => {
  const [jurisdiction, setJurisdiction] = useState('Malta') // Default fallback
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const location = await getVisitorLocation()
        const legalJurisdiction = getLegalJurisdiction(location.countryCode)
        setJurisdiction(legalJurisdiction)
      } catch (error) {
        console.warn('Location detection failed, using default jurisdiction:', error)
        setJurisdiction('Malta')
      } finally {
        setIsLoading(false)
      }
    }

    detectLocation()
  }, [])
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-accent-900 to-primary-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center text-primary-400 hover:text-primary-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        {/* Terms of Use Content */}
        <div className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Kellon Terms of Use
          </h1>
          <p className="text-gray-400 mb-12">Last updated: 03/10/2025</p>

          <div className="prose prose-invert max-w-none">
            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">1. Introduction</h2>
              <div className="text-gray-300 space-y-4">
                <p>Welcome to Kellon ("we," "our," "us").</p>
                <p>
                  Kellon provides a non-custodial, blockchain-based platform that enables users to send and receive cryptocurrency, perform crypto swaps, access fiat payouts, and purchase tokenized assets through trusted third-party partners.
                </p>
                <p>
                  By using our website, mobile application, or any part of the Kellon ecosystem (collectively, the "Services"), you agree to be bound by these Terms of Use ("Terms").
                </p>
                <p className="font-medium text-red-300">
                  If you do not agree, please do not use our Services.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">2. Eligibility</h2>
              <div className="text-gray-300 space-y-4">
                <p>To use Kellon, you must:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Be at least 18 years old (or the age of majority in your jurisdiction).</li>
                  <li>Have the legal capacity to enter into binding contracts.</li>
                  <li>Comply with all applicable laws, regulations, and sanctions in your region.</li>
                </ul>
                <p className="text-accent-300 font-medium">
                  We reserve the right to deny or restrict access to anyone violating these Terms or local laws.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">3. Non-Custodial Wallet</h2>
              <div className="text-gray-300 space-y-4">
                <p className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
                  <strong className="text-primary-300">Kellon is a non-custodial wallet platform.</strong>
                </p>
                <p>This means:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>You retain full control of your private keys and digital assets.</li>
                  <li>We do not have access to, store, or recover your private keys, passwords, or seed phrases.</li>
                  <li>You are solely responsible for safeguarding your credentials.</li>
                </ul>
                <p className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-300">
                  <strong>Important:</strong> If you lose your keys, Kellon cannot restore access to your wallet or funds.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">4. Services Overview</h2>
              <div className="text-gray-300 space-y-4">
                <p>Kellon provides tools and integrations that may include:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Crypto-to-crypto swaps</li>
                  <li>Crypto-to-fiat and fiat-to-crypto conversions via third-party on/off-ramp providers (e.g., Ramp, Transak, MoonPay)</li>
                  <li>Cross-border payments and digital asset transfers</li>
                  <li>Tokenized asset trading within supported jurisdictions</li>
                </ul>
                <p className="bg-accent-500/10 border border-accent-500/20 rounded-lg p-4">
                  All fiat services are facilitated by regulated third-party providers, not by Kellon itself. We do not issue, hold, or manage fiat currency or act as a financial institution.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">5. Third-Party Integrations</h2>
              <div className="text-gray-300 space-y-4">
                <p>Kellon connects to third-party services to enable certain features. When you use these services, you agree to their respective terms and privacy policies.</p>
                <p>Kellon is not responsible for:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>The availability, accuracy, or performance of third-party APIs or widgets</li>
                  <li>Delays, losses, or damages arising from external services</li>
                  <li>Fees or exchange rates set by third-party providers</li>
                </ul>
                <p className="text-sm text-gray-400">
                  We carefully vet our partners but cannot guarantee their continuous operation or compliance in every jurisdiction.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">6. User Responsibilities</h2>
              <div className="text-gray-300 space-y-4">
                <p>By using Kellon, you agree to:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Use the Services only for lawful purposes</li>
                  <li>Not engage in money laundering, terrorism financing, or fraudulent activity</li>
                  <li>Not attempt to hack, reverse engineer, or misuse Kellon's platform or smart contracts</li>
                  <li>Ensure compliance with your country's tax and reporting obligations related to digital assets</li>
                </ul>
                <p className="font-medium text-accent-300">
                  You acknowledge that transactions on blockchain networks are irreversible, and Kellon cannot cancel or reverse them once executed.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">7. Fees and Charges</h2>
              <div className="text-gray-300 space-y-4">
                <p>Kellon may display or collect fees associated with:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Crypto network gas fees</li>
                  <li>Partner service fees (for swaps or fiat transactions)</li>
                  <li>Platform convenience fees (where applicable)</li>
                </ul>
                <p>Fee details are shown before confirming a transaction. You agree to review and accept these fees before proceeding.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">8. Risk Disclaimer</h2>
              <div className="text-gray-300 space-y-4">
                <p>Using digital assets carries inherent risks, including but not limited to:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Market volatility and potential loss of value</li>
                  <li>Smart contract bugs or network errors</li>
                  <li>Regulatory changes or service restrictions</li>
                  <li>Third-party provider outages or compliance limitations</li>
                </ul>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-300 font-medium mb-2">By using Kellon, you acknowledge that:</p>
                  <ul className="list-disc ml-6 space-y-1 text-red-300">
                    <li>You assume all risks related to your use of cryptocurrencies and tokenized assets.</li>
                    <li>Kellon does not guarantee profits, price stability, or asset recovery.</li>
                    <li>We are not liable for any loss arising from user error, third-party failure, or market fluctuation.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">9. Compliance and KYC</h2>
              <div className="text-gray-300 space-y-4">
                <p>Certain features (e.g., fiat transactions) may require identity verification (KYC) under partner or jurisdictional rules. By submitting KYC information, you agree to its use by authorized partners for compliance purposes.</p>
                <p>We may suspend or restrict access to your account if required by law, regulation, or partner policy.</p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">10. Intellectual Property</h2>
              <div className="text-gray-300 space-y-4">
                <p>All content on the Kellon website and app — including logos, trademarks, text, designs, and code — are the property of Kellon Digital Asset Management Limited or its licensors.</p>
                <p>You may not copy, modify, distribute, or reproduce any part of our materials without written permission.</p>
              </div>
            </section>

            {/* Section 11 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">11. Limitation of Liability</h2>
              <div className="text-gray-300 space-y-4">
                <p>To the maximum extent permitted by law:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Kellon, its founders, affiliates, or employees are not liable for indirect, incidental, or consequential damages arising from your use of the Services.</li>
                  <li>Kellon does not act as your broker, custodian, or financial advisor.</li>
                  <li>All services are provided "as is" and "as available", without warranties of any kind.</li>
                </ul>
                <p className="text-sm text-gray-400">
                  If applicable law does not allow such limitation, our liability will not exceed the total fees paid by you (if any) for using the Services.
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">12. Indemnification</h2>
              <div className="text-gray-300 space-y-4">
                <p>You agree to indemnify and hold harmless Kellon, its affiliates, employees, and partners from any claims, damages, losses, or expenses arising from:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Your violation of these Terms</li>
                  <li>Misuse of the Services</li>
                  <li>Breach of any applicable law or third-party rights</li>
                </ul>
              </div>
            </section>

            {/* Section 13 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">13. Termination</h2>
              <div className="text-gray-300 space-y-4">
                <p>We may suspend or terminate your access to the Services at any time, without notice, if we suspect:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Violation of these Terms</li>
                  <li>Illegal activity or fraudulent use</li>
                  <li>Regulatory non-compliance</li>
                </ul>
                <p>You may stop using Kellon at any time by discontinuing access to our app or website.</p>
              </div>
            </section>

            {/* Section 14 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">14. Governing Law</h2>
              <div className="text-gray-300 space-y-4">
                {isLoading ? (
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-gray-400">
                      <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-primary-400 mr-2"></span>
                      Determining applicable jurisdiction...
                    </p>
                  </div>
                ) : (
                  <>
                    <p>
                      These Terms are governed by and construed in accordance with the laws of <strong className="text-primary-300">{jurisdiction}</strong>, without regard to its conflict of law principles.
                    </p>
                    <p>
                      Any dispute arising shall be subject to the exclusive jurisdiction of competent courts in {jurisdiction}.
                    </p>
                    <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4 text-sm">
                      <p className="text-primary-300">
                        <strong>Note:</strong> Jurisdiction automatically determined based on your location. 
                        Kellon operates in compliance with local regulations in crypto-friendly jurisdictions.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </section>

            {/* Section 15 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">15. Amendments</h2>
              <div className="text-gray-300 space-y-4">
                <p>Kellon may modify or update these Terms periodically. The "Last updated" date reflects the latest version.</p>
                <p>Continued use of our Services after changes means you accept the revised Terms.</p>
              </div>
            </section>

            {/* Section 16 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">16. Contact Us</h2>
              <div className="text-gray-300 space-y-4">
                <p>For any questions or concerns about these Terms, please contact us at:</p>
                <div className="bg-white/5 rounded-lg p-4 space-y-2">
                  <p>📧 <a href="mailto:contact@kellon.xyz" className="text-primary-400 hover:text-primary-300">contact@kellon.xyz</a></p>
                  <p>🌐 <a href="https://kellon.xyz" className="text-primary-400 hover:text-primary-300">https://kellon.xyz</a></p>
                </div>
              </div>
            </section>

            {/* Additional Disclaimer */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Disclaimer</h2>
              <div className="text-gray-300 space-y-4">
                <h3 className="text-xl font-semibold text-white mb-3">1. General Information</h3>
                <p>
                  Kellon is a non-custodial, blockchain-based payment and digital asset platform developed by Kellon Digital Asset Management Limited. Our app enables users to send, receive, and swap cryptocurrencies, convert between crypto and fiat using regulated partners, and trade tokenized assets across supported markets.
                </p>
                <p className="bg-accent-500/10 border border-accent-500/20 rounded-lg p-4 font-medium text-accent-300">
                  Kellon is not a bank, exchange, or financial institution. We do not hold user funds, custody assets, or provide financial advice of any kind.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-8">2. No Financial or Investment Advice</h3>
                <p>All content on the Kellon website, app, and communications is for informational purposes only. Nothing provided by Kellon should be interpreted as:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Financial or investment advice</li>
                  <li>Legal or tax guidance</li>
                  <li>A guarantee of returns or asset stability</li>
                </ul>
                <p className="font-medium text-primary-300">
                  You are solely responsible for evaluating and managing the risks associated with your use of cryptocurrencies and digital assets.
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  If you require financial advice, please consult a licensed professional.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfUse