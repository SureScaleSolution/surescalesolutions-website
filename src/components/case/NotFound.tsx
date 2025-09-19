import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Case Study Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            Sorry, the case study you are looking for doesn&apos;t exist or has
            been moved.
          </p>
        </div>

        <Link
          href="/case-studies"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
          View Case Studies
        </Link>

        <div className="mt-12 text-sm text-gray-500">
          <p>
            If you believe this is an error, please{" "}
            <Link
              href="/contact-us"
              className="text-blue-600 hover:underline font-medium">
              let us know
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
