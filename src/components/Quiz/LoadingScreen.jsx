const LoadingScreen = () => (
  <div className="flex flex-col items-center justify-center space-y-4">
    <div className="w-16 h-16 border-4 border-[#16423C] border-t-transparent rounded-full animate-spin" />
    <p className="text-[#16423C] text-xl font-medium">Loading questions...</p>
  </div>
);
export default LoadingScreen;
