function App() {
  return (
    <div className="scroll-snap-container h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* MAIN */}
      <section className="snap-start h-screen bg-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-black">Main Section</h1>
      </section>

      {/* TIMELINE */}
      <section className="snap-start h-screen bg-black flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Timeline Section</h1>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="snap-start h-screen bg-yellow-400 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-black">Achievements Section</h1>
      </section>

      {/* CONTACT */}
      <section className="snap-start h-screen bg-blue-500 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Contact Section</h1>
      </section>
    </div>
  );
}

export default App;
