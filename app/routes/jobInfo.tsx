import { Link, useParams } from "react-router";

export default function JobInfo() {
  const { identifier } = useParams();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16">
      {/* Top Navbar */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Applications</span>
          </Link>

          <span className="text-xs font-mono text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1 rounded-md">
            Job ID: {identifier}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8">
        {/* Header Card */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-indigo-600 text-white font-bold text-2xl flex items-center justify-center shrink-0">
                J
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    Job Details
                  </h1>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                    ● Applied
                  </span>
                </div>
                <p className="text-sm text-slate-600">
                  Application reference: <span className="font-semibold text-slate-800">{identifier}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-xs"
              >
                Edit
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-xs"
              >
                Update Status
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Status</p>
              <p className="text-sm font-semibold text-slate-900 mt-1">Under Review</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Salary Range</p>
              <p className="text-sm font-semibold text-slate-900 mt-1">$120,000 - $150,000</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Workplace</p>
              <p className="text-sm font-semibold text-slate-900 mt-1">Remote</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Type</p>
              <p className="text-sm font-semibold text-slate-900 mt-1">Full-time</p>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-3">Job Description</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Information for job identifier <span className="font-mono font-medium text-slate-800">{identifier}</span>.
                Manage and track all details, interviews, and follow-ups for this position.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Requirements & Notes</h2>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-600">
                Keep notes on interviews, requirements, and next steps for this application.
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-3">Timeline</h3>
              <ol className="space-y-3 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-slate-800">Applied</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span>Screening</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-slate-300" />
                  <span>Interview</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
