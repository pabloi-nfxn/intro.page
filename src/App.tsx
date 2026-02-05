function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      {/* Background: exported from Figma (node 24712-140438) */}
      <img
        src="/background.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top-left pointer-events-none select-none"
        aria-hidden
      />

      {/* Content: logo, title, paragraph, button - left-aligned */}
      <main className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-3xl px-8 md:px-12 lg:px-40 py-12">
          {/* Logo: exported from Figma as SVG, used as-is */}
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <img
              src="/logo.svg"
              alt="nofrixion"
              className="h-6 w-auto shrink-0"
            />
          </div>

          <h1 className="text-4xl font-semibold text-cyan-950 leading-tight mb-6">
            Money Management for Modern Finance Teams
          </h1>

          <p className="text-base text-cyan-950 leading-relaxed mb-10 max-w-lg">
            Send, receive, store and reconcile automatically.
            <br />
            The intelligent Current Account that seamlessly blends into your
            business operations.
          </p>

          <button
            type="button"
            className="px-8 py-3.5 rounded-lg bg-cyan-900 text-teal-200 font-normal text-base hover:bg-cyan-950 active:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 transition-colors"
          >
            Enter
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
