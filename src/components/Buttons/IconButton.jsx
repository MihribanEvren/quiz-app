const IconButton = ({ icon: Icon, onClick, disabled, className = '' }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`p-2 border rounded hover:bg-gray-100 disabled:opacity-50 transition-colors ${className}`}
  >
    <Icon className="w-5 h-5" />
  </button>
);
export default IconButton;
