import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Form Submitted Successfully!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Thank you for contacting us. We will get back to you soon.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
