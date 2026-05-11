import dbConnect from "@/lib/mongodb";
import Audit from "@/models/Audit";

export default async function AuditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await dbConnect();
  const { id } = await params;

  const audit = await Audit.findById(id).lean();

  if (!audit) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Audit not found
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-10">

      <div className="max-w-2xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6">

        <h1 className="text-4xl font-bold">
          AI Spend Audit Report
        </h1>

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-black border border-zinc-800 rounded-xl p-4">
            <p className="text-zinc-500 text-sm">
              Tool
            </p>

            <h2 className="text-2xl font-semibold mt-2">
              {audit.tool}
            </h2>
          </div>

          <div className="bg-black border border-zinc-800 rounded-xl p-4">
            <p className="text-zinc-500 text-sm">
              Monthly Savings
            </p>

            <h2 className="text-2xl font-semibold text-green-400 mt-2">
              ${audit.savings}
            </h2>
          </div>

        </div>

        <div className="bg-black border border-zinc-800 rounded-xl p-5">
          <p className="text-zinc-500 text-sm mb-2">
            Recommendation
          </p>

          <p className="text-zinc-300 leading-relaxed">
            {audit.recommendation}
          </p>
        </div>

        <div className="bg-black border border-zinc-800 rounded-xl p-5">
          <p className="text-zinc-500 text-sm mb-2">
            AI Summary
          </p>

          <p className="text-zinc-300 leading-relaxed">
            {audit.summary}
          </p>
        </div>

      </div>
    </main>
  );
}