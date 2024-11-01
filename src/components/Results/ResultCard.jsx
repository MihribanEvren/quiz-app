const ResultCard = ({ title, value, labelColor }) => (
  <div className="bg-[#C4DAD2] rounded-lg p-4 text-center">
    <p className="text-sm text-gray-600 mb-1">{title}</p>
    <p className={`text-2xl font-bold ${labelColor}`}>{value}</p>
  </div>
);
export default ResultCard;
