"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubmitPPT = () => {
  const [leaderName, setLeaderName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [pptLink, setPptLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (!leaderName) return "Leader Name is required.";
    if (!teamName) return "Team Name is required.";
    if (!collegeName) return "College Name is required.";
    if (!pptLink) return "Please provide the Google Drive link for your PPT.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const error = validateForm();
    if (error) {
      toast.error(error);
      setIsSubmitting(false);
      return;
    }

    const url =
      "https://script.google.com/macros/s/AKfycbzr9bItKaMd7oXgaAzuGvbF4wmIVHTvcM5o0OiVmoX_rUlZrbcFSP76Lnu0atmc55rguA/exec";
    try {
      const body = new URLSearchParams({
        LeaderName: leaderName,
        TeamName: teamName,
        CollegeName: collegeName,
        PptLink: pptLink,
      });

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      toast.success("Your PPT has been submitted successfully!");

      // Reset fields
      setLeaderName("");
      setTeamName("");
      setCollegeName("");
      setPptLink("");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="submit-ppt" className="py-24 bg-transparent relative">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        theme="colored"
        toastStyle={{
          backgroundColor: "#1F1F1F",
          color: "#FFD700",
          fontWeight: "bold",
          border: "1px solid #FFD700",
        }}
      />

      <div className="relative w-full px-6 max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Info */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Submit Your PPT
            </span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Upload your final presentation link for evaluation.  
            Ensure your Google Drive link has <span className="text-yellow-400 font-semibold">public view access</span>.
          </p>

          <div className="bg-black/40 border border-yellow-500/30 rounded-xl p-6 shadow-md shadow-yellow-500/10">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">
              Submission Guidelines
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm leading-relaxed">
              <li>Only the team leader should submit the PPT link.</li>
              <li>Ensure the file name includes your <b>Team Name</b>.</li>
              <li>Provide a valid <b>Google Drive link with view access</b>.</li>
              <li>Once submitted, you cannot re-upload. Double-check before submitting.</li>
            </ul>

            <div className="mt-6 p-4 bg-black/60 border border-yellow-500/20 rounded-lg text-sm text-gray-200">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">
                Note
              </h4>
              <p>
                Submissions after the deadline will not be accepted.  
                Ensure your PPT follows the given template and format.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white/5 backdrop-blur-lg border border-yellow-500/30 rounded-2xl p-8 shadow-lg shadow-yellow-500/10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              value={leaderName}
              onChange={(e) => setLeaderName(e.target.value)}
              placeholder="Leader Name"
              className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
              required
            />
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Team Name"
              className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
              required
            />
            <input
              type="text"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              placeholder="College Name"
              className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
              required
            />
            <input
              type="url"
              value={pptLink}
              onChange={(e) => setPptLink(e.target.value)}
              placeholder="Google Drive Link for PPT"
              className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 text-white rounded-lg"
              required
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:scale-105 transition-all disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit PPT"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubmitPPT;
