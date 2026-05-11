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

// "use client";

// import { useEffect, useState } from "react";
// import { generateAudit } from "@/lib/audit";

// export default function AuditForm() {
//   const [formData, setFormData] = useState({
//     tool: "",
//     plan: "",
//     spend: "",
//     seats: "",
//     teamSize: "",
//     useCase: "",
//   });

//   const [result, setResult] = useState<any>(null);

//   //--------------------------------------------------------
//   useEffect(() => {
//   const savedData = localStorage.getItem("auditFormData");

//   if (savedData) {
//     setFormData(JSON.parse(savedData));
//   }
// }, []);
// //----------------------------------------------------------

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   //-------------------------
//   useEffect(() => {
//   localStorage.setItem(
//     "auditFormData",
//     JSON.stringify(formData)
//   );
// }, [formData]);
// //--------------------------------

//   // const handleSubmit = async () => {
//   //   const auditResult = generateAudit(formData);

//   //   setResult(auditResult);
//   // };
// //   const handleSubmit = async () => {
// //   const auditResult = generateAudit(formData);

// //   await fetch("/api/audit", {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify({
// //       tool: formData.tool,
// //       plan: formData.plan,
// //       spend: formData.spend,
// //       seats: formData.seats,
// //       teamSize: formData.teamSize,
// //       useCase: formData.useCase,

// //       recommendation: auditResult.recommendation,
// //       savings: auditResult.savings,
// //     }),
// //   });

// //   setResult(auditResult);
// // };
// const handleSubmit = async () => {
//   const auditResult = generateAudit(formData);

//   setResult(auditResult);

//   try {
//     const response = await fetch("/api/audit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify({
//         ...formData,
//         recommendation: auditResult.recommendation,
//         savings: auditResult.savings,
//         summary: auditResult.summary,
//       }),
//     });

//     const savedAudit = await response.json();

//     console.log("Saved Audit:", savedAudit);

//   } catch (error) {
//     console.error("Failed to save audit");
//   }
// };

//   return (
//     <div className="mt-10 max-w-2xl w-full bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-zinc-800 shadow-2xl space-y-6">

//       <h2 className="text-2xl font-semibold text-center">
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
//       <button
//         onClick={handleSubmit}
//         className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-zinc-200 transition"
//       >
//         Generate Audit
//       </button>

//       {/* Results Section */}
//       {result && (
//   <div className="mt-8 rounded-2xl border border-zinc-700 bg-black p-6 space-y-6">

//     {/* Status */}
//     <div className="flex items-center justify-between">
//       <h3 className="text-2xl font-bold">
//         Audit Results
//       </h3>

//       <span
//         className={`px-4 py-2 rounded-full text-sm font-medium ${
//           result.savings > 0
//             ? "bg-red-500/20 text-red-400"
//             : "bg-green-500/20 text-green-400"
//         }`}
//       >
//         {result.status}
//       </span>
//     </div>

//     {/* Recommendation */}
//     <div>
//       <p className="text-zinc-300 leading-relaxed">
//         {result.recommendation}
//       </p>
//     </div>

//     {/* Savings Cards */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//       <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
//         <p className="text-sm text-zinc-500">
//           Monthly Savings
//         </p>

//         <h4 className="text-4xl font-bold text-green-400 mt-2">
//           ${result.savings}
//         </h4>
//       </div>

//       <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
//         <p className="text-sm text-zinc-500">
//           Annual Savings
//         </p>

//         <h4 className="text-4xl font-bold text-blue-400 mt-2">
//           ${result.savings * 12}
//         </h4>
//       </div>

//     </div>

//     {/* AI Summary */}
//     <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
//       <p className="text-sm text-zinc-500 mb-2">
//         AI Generated Summary
//       </p>

//       <p className="text-zinc-300 leading-relaxed">
//         {result.summary}
//       </p>
//     </div>

//   </div>
// )}
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
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

  const [shareUrl, setShareUrl] = useState("");

  // Load saved form data
  useEffect(() => {
    const savedData = localStorage.getItem("auditFormData");

    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Persist form data
  useEffect(() => {
    localStorage.setItem(
      "auditFormData",
      JSON.stringify(formData)
    );
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const auditResult = generateAudit(formData);

    setResult(auditResult);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...formData,
          recommendation: auditResult.recommendation,
          savings: auditResult.savings,
          summary: auditResult.summary,
        }),
      });

      const savedAudit = await response.json();

      console.log("Saved Audit:", savedAudit);

      setShareUrl(
        `${window.location.origin}/audit/${savedAudit._id}`
      );

    } catch (error) {
      console.error("Failed to save audit");
    }
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
        <div className="mt-8 rounded-2xl border border-zinc-700 bg-black p-6 space-y-6">

          {/* Status */}
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">
              Audit Results
            </h3>

            <span
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                result.savings > 0
                  ? "bg-red-500/20 text-red-400"
                  : "bg-green-500/20 text-green-400"
              }`}
            >
              {result.status}
            </span>
          </div>

          {/* Recommendation */}
          <div>
            <p className="text-zinc-300 leading-relaxed">
              {result.recommendation}
            </p>
          </div>

          {/* Savings Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
              <p className="text-sm text-zinc-500">
                Monthly Savings
              </p>

              <h4 className="text-4xl font-bold text-green-400 mt-2">
                ${result.savings}
              </h4>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
              <p className="text-sm text-zinc-500">
                Annual Savings
              </p>

              <h4 className="text-4xl font-bold text-blue-400 mt-2">
                ${result.savings * 12}
              </h4>
            </div>

          </div>

          {/* AI Summary */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-sm text-zinc-500 mb-2">
              AI Generated Summary
            </p>

            <p className="text-zinc-300 leading-relaxed">
              {result.summary}
            </p>
          </div>

          {/* Share Link Button */}
          {shareUrl && (
            <div className="pt-4">

              <button
                onClick={() => {
                  navigator.clipboard.writeText(shareUrl);

                  alert("Shareable link copied!");
                }}
                className="w-full bg-blue-500 hover:bg-blue-600 transition py-3 rounded-xl font-semibold"
              >
                Copy Shareable Link
              </button>

            </div>
          )}

        </div>
      )}

    </div>
  );
}