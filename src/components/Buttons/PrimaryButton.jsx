const PrimaryButton = ({ icon: Icon, children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center gap-2 px-6 py-3 bg-[#16423C] text-white rounded-lg hover:bg-[#0f2c28] transition-colors ${className}`}
  >
    {Icon && <Icon className="w-5 h-5" />}
    {children}
  </button>
);
export default PrimaryButton;
