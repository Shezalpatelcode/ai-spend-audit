// "use client";

// export default function AuditForm() {
//   return (
//     <div className="mt-10 space-y-4 max-w-xl">
//       <input
//         className="w-full p-3 rounded-lg text-black"
//         placeholder="Tool Name"
//       />

//       <input
//         className="w-full p-3 rounded-lg text-black"
//         placeholder="Monthly Spend"
//       />

//       <input
//         className="w-full p-3 rounded-lg text-black"
//         placeholder="Number of Seats"
//       />

//       <button className="bg-blue-500 px-6 py-3 rounded-xl">
//         Generate Audit
//       </button>
//     </div>
//   );
// }
// "use client";
// import { generateAudit } from "@/lib/audit";
// import { useState } from "react";

// export default function AuditForm() {
//   const [formData, setFormData] = useState({
//     tool: "",
//     plan: "",
//     spend: "",
//     seats: "",
//     teamSize: "",
//     useCase: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="mt-10 max-w-2xl bg-zinc-900 p-8 rounded-2xl border border-zinc-800 space-y-6">
//       <h2 className="text-2xl font-semibold">
//         Start Your AI Spend Audit
//       </h2>

//       {/* Tool Dropdown */}
//       <div>
//         <label className="block mb-2 text-sm text-zinc-400">
//           AI Tool
//         </label>

//         <select
//           name="tool"
//           value={formData.tool}
//           onChange={handleChange}
//           className="w-full p-3 rounded-xl bg-black border border-zinc-700"
//         >
//           <option value="">Select Tool</option>
//           <option value="ChatGPT">ChatGPT</option>
//           <option value="Claude">Claude</option>
//           <option value="Cursor">Cursor</option>
//           <option value="Copilot">GitHub Copilot</option>
//           <option value="Gemini">Gemini</option>
//           <option value="Windsurf">Windsurf</option>
//         </select>
//       </div>

//       {/* Plan Dropdown */}
//       <div>
//         <label className="block mb-2 text-sm text-zinc-400">
//           Plan
//         </label>

//         <select
//           name="plan"
//           value={formData.plan}
//           onChange={handleChange}
//           className="w-full p-3 rounded-xl bg-black border border-zinc-700"
//         >
//           <option value="">Select Plan</option>
//           <option value="Free">Free</option>
//           <option value="Plus">Plus</option>
//           <option value="Pro">Pro</option>
//           <option value="Team">Team</option>
//           <option value="Business">Business</option>
//           <option value="Enterprise">Enterprise</option>
//         </select>
//       </div>

//       {/* Monthly Spend */}
//       <div>
//         <label className="block mb-2 text-sm text-zinc-400">
//           Monthly Spend ($)
//         </label>

//         <input
//           type="number"
//           name="spend"
//           value={formData.spend}
//           onChange={handleChange}
//           placeholder="200"
//           className="w-full p-3 rounded-xl bg-black border border-zinc-700"
//         />
//       </div>

//       {/* Seats */}
//       <div>
//         <label className="block mb-2 text-sm text-zinc-400">
//           Number of Seats
//         </label>

//         <input
//           type="number"
//           name="seats"
//           value={formData.seats}
//           onChange={handleChange}
//           placeholder="5"
//           className="w-full p-3 rounded-xl bg-black border border-zinc-700"
//         />
//       </div>

//       {/* Team Size */}
//       <div>
//         <label className="block mb-2 text-sm text-zinc-400">
//           Team Size
//         </label>

//         <input
//           type="number"
//           name="teamSize"
//           value={formData.teamSize}
//           onChange={handleChange}
//           placeholder="10"
//           className="w-full p-3 rounded-xl bg-black border border-zinc-700"
//         />
//       </div>

//       {/* Use Case Dropdown */}
//       <div>
//         <label className="block mb-2 text-sm text-zinc-400">
//           Primary Use Case
//         </label>

//         <select
//           name="useCase"
//           value={formData.useCase}
//           onChange={handleChange}
//           className="w-full p-3 rounded-xl bg-black border border-zinc-700"
//         >
//           <option value="">Select Use Case</option>
//           <option value="Coding">Coding</option>
//           <option value="Writing">Writing</option>
//           <option value="Research">Research</option>
//           <option value="Data Analysis">Data Analysis</option>
//           <option value="Mixed">Mixed</option>
//         </select>
//       </div>

//       {/* Submit Button */}
//       <button className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-zinc-200 transition">
//         Generate Audit
//       </button>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { generateAudit } from "@/lib/audit";

export default function AuditForm() {
  const [formData, setFormData] = useState({
    tool: "",
    plan: "",
    spend: "",
    seats: "",
    teamSize: "",
    useCase: "",
  });

  const [result, setResult] = useState<any>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const auditResult = generateAudit(formData);

    setResult(auditResult);
  };

  return (
    <div className="mt-10 max-w-2xl w-full bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-zinc-800 shadow-2xl space-y-6">

      <h2 className="text-2xl font-semibold text-center">
        Start Your AI Spend Audit
      </h2>

      {/* Tool Dropdown */}
      <div>
        <label className="block mb-2 text-sm text-zinc-400">
          AI Tool
        </label>

        <select
          name="tool"
          value={formData.tool}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-black border border-zinc-700"
        >
          <option value="">Select Tool</option>
          <option value="ChatGPT">ChatGPT</option>
          <option value="Claude">Claude</option>
          <option value="Cursor">Cursor</option>
          <option value="Copilot">GitHub Copilot</option>
          <option value="Gemini">Gemini</option>
          <option value="Windsurf">Windsurf</option>
        </select>
      </div>

      {/* Plan Dropdown */}
      <div>
        <label className="block mb-2 text-sm text-zinc-400">
          Plan
        </label>

        <select
          name="plan"
          value={formData.plan}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-black border border-zinc-700"
        >
          <option value="">Select Plan</option>
          <option value="Free">Free</option>
          <option value="Plus">Plus</option>
          <option value="Pro">Pro</option>
          <option value="Team">Team</option>
          <option value="Business">Business</option>
          <option value="Enterprise">Enterprise</option>
        </select>
      </div>

      {/* Monthly Spend */}
      <div>
        <label className="block mb-2 text-sm text-zinc-400">
          Monthly Spend ($)
        </label>

        <input
          type="number"
          name="spend"
          value={formData.spend}
          onChange={handleChange}
          placeholder="200"
          className="w-full p-3 rounded-xl bg-black border border-zinc-700"
        />
      </div>

      {/* Seats */}
      <div>
        <label className="block mb-2 text-sm text-zinc-400">
          Number of Seats
        </label>

        <input
          type="number"
          name="seats"
          value={formData.seats}
          onChange={handleChange}
          placeholder="5"
          className="w-full p-3 rounded-xl bg-black border border-zinc-700"
        />
      </div>

      {/* Team Size */}
      <div>
        <label className="block mb-2 text-sm text-zinc-400">
          Team Size
        </label>

        <input
          type="number"
          name="teamSize"
          value={formData.teamSize}
          onChange={handleChange}
          placeholder="10"
          className="w-full p-3 rounded-xl bg-black border border-zinc-700"
        />
      </div>

      {/* Use Case Dropdown */}
      <div>
        <label className="block mb-2 text-sm text-zinc-400">
          Primary Use Case
        </label>

        <select
          name="useCase"
          value={formData.useCase}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-black border border-zinc-700"
        >
          <option value="">Select Use Case</option>
          <option value="Coding">Coding</option>
          <option value="Writing">Writing</option>
          <option value="Research">Research</option>
          <option value="Data Analysis">Data Analysis</option>
          <option value="Mixed">Mixed</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-zinc-200 transition"
      >
        Generate Audit
      </button>

      {/* Results Section */}
      {result && (
        <div className="mt-6 p-6 rounded-2xl bg-black border border-zinc-700">

          <h3 className="text-2xl font-bold mb-4">
            Audit Results
          </h3>

          <p className="text-zinc-300 leading-relaxed">
            {result.recommendation}
          </p>

          <div className="mt-6 text-4xl font-bold text-green-400">
            ${result.savings}/month
          </div>

          <div className="mt-2 text-zinc-500">
            Estimated Annual Savings: ${result.savings * 12}
          </div>
        </div>
      )}
    </div>
  );
}