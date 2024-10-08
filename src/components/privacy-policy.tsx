import { ShieldCheckIcon, CreditCardIcon, UserCircleIcon, LockClosedIcon, DocumentIcon } from '@heroicons/react/24/outline';

const PrivacyTerms = () => {
  return (
    <div className="  text-gray-300 min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-center underline text-5xl font-semibold text-white mb-16">
          Privacy Policy & Cookies
        </h1>

        {/* Privacy Policy Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <ShieldCheckIcon className="h-8 w-8 text-blue-500 mr-3" />
            <h2 className="text-3xl font-semibold text-white">Privacy Policy</h2>
          </div>
          <p className="text-lg leading-7 mb-6">
            At <span className="font-bold text-blue-400">My Portfolio</span>, your privacy is of the utmost importance. 
            This policy explains what data we collect, why we collect it, and how we protect it. Your data will remain secure and will never be shared with third parties.
          </p>
          
          <div className="mb-10">
            <h3 className="flex items-center text-2xl font-semibold mb-4">
              <UserCircleIcon className="h-6 w-6 text-green-500 mr-2" /> What Information We Collect
            </h3>
            <ul className="list-disc list-inside text-lg leading-7 space-y-2">
              <li>Your Gmail address</li>
              <li>Your Gmail profile photo</li>
              <li>Physical address (for purchases)</li>
              <li>Payment details for transactions</li>
              <li>Donation-related data</li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="flex items-center text-2xl font-semibold mb-4">
              <CreditCardIcon className="h-6 w-6 text-red-500 mr-2" /> How We Use Your Information
            </h3>
            <ul className="list-disc list-inside text-lg leading-7 space-y-2">
              <li>To process your transactions for templates, courses, and donations</li>
              <li>To improve our services and provide better support</li>
              <li>To personalize your experience on the website</li>
              <li>To communicate important updates and relevant information</li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="flex items-center text-2xl font-semibold mb-4">
              <LockClosedIcon className="h-6 w-6 text-yellow-500 mr-2" /> Data Security
            </h3>
            <p className="text-lg leading-7">
              We implement encryption and strict security protocols to ensure your data is safe. Only authorized personnel have access to your information, and all sensitive data is stored securely on our servers. Rest assured, your personal details stay with us and are never shared with third-party advertisers or marketers.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="flex items-center text-2xl font-semibold mb-4">
              <DocumentIcon className="h-6 w-6 text-purple-500 mr-2" /> Your Rights
            </h3>
            <p className="text-lg leading-7">
              You can request access to, update, or delete your personal data at any time. Contact us at <span className="text-blue-400 underline">businessarifislam@gmail.com</span> to exercise your rights or inquire further.
            </p>
          </div>
        </section>

        {/* Terms & Conditions Section */}
        <section>
          <div className="flex items-center mb-6">
            <DocumentIcon className="h-8 w-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-semibold text-white">Terms & Conditions</h2>
          </div>
          <p className="text-lg leading-7 mb-6">
            By using our web application, purchasing templates or courses, or making donations, you agree to comply with the following terms:
          </p>
          
          <div className="mb-10">
            <h3 className="flex items-center text-2xl font-semibold mb-4">
              <ShieldCheckIcon className="h-6 w-6 text-blue-500 mr-2" /> Use of Services
            </h3>
            <p className="text-lg leading-7">
              Our services are provided &quot;as is&quot; without any guarantees. Users are responsible for ensuring the information they provide is accurate and complete. Misuse of our platform or providing false information can result in the termination of access to our services.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="flex items-center text-2xl font-semibold mb-4">
              <CreditCardIcon className="h-6 w-6 text-red-500 mr-2" /> Payment & Refund Policy
            </h3>
            <p className="text-lg leading-7">
              All payments for templates, courses, or donations are processed securely via trusted payment gateways. Payments are non-refundable unless specified otherwise in promotional terms. 
            </p>
          </div>

          <div className="mb-10">
            <h3 className="flex items-center text-2xl font-semibold mb-4">
              <LockClosedIcon className="h-6 w-6 text-yellow-500 mr-2" /> Intellectual Property
            </h3>
            <p className="text-lg leading-7">
              All content, including templates and courses, is the intellectual property of <span className="font-bold text-blue-400">My Portfolio</span> and is protected by copyright laws. You are not permitted to reproduce, distribute, or sell any part of the content without prior written consent.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="flex items-center text-2xl font-semibold mb-4">
              <DocumentIcon className="h-6 w-6 text-purple-500 mr-2" /> Changes to Terms
            </h3>
            <p className="text-lg leading-7">
              We reserve the right to update these Terms & Conditions at any time. It is the user’s responsibility to check this page periodically for changes.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="flex items-center text-2xl font-semibold mb-4">
              <UserCircleIcon className="h-6 w-6 text-green-500 mr-2" /> Contact Us
            </h3>
            <p className="text-lg leading-7">
              For any queries regarding these Terms & Conditions or our Privacy Policy, feel free to contact us at <span className="text-blue-400 underline">businessarifislam@gmail.com</span>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyTerms;
