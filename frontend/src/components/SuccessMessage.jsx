export default function SuccessMessage() {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
      <div className="text-green-600 text-5xl mb-4">✓</div>
      <h2 className="text-2xl font-bold text-green-800 mb-2">Report Submitted Successfully!</h2>
      <p className="text-green-700">Your error report has been received and will be processed shortly.</p>
    </div>
  );
}
