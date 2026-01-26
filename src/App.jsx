import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen w-full w-screen bg-100 flex justify-center">
      <div className="w-full max-w-[375px] bg-white">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;