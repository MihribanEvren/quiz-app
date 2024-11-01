const OptionButton = ({ option, text, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`p-4 border rounded-xl text-left bg-[#C4DAD2] h-full
        ${!disabled ? 'hover:bg-white transition-colors' : 'opacity-70'}
        flex items-center`}
  >
    <span className="w-full text-base md:text-lg">
      {option}: {text}
    </span>
  </button>
);
export default OptionButton;
