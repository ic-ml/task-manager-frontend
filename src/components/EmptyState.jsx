const EmptyState = ({ text }) => {
  return (
    <div className="text-center text-gray-400 mt-16">
      <p className="text-lg">📭</p>
      <p className="text-sm mt-2">{text}</p>
    </div>
  );
};

export default EmptyState;