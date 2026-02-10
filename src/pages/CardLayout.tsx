// Version 2: Centered card layout (MoneyMoov for Business style)
const CardHome = ({ onEnterPressed }: { onEnterPressed: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-4xl w-full pt-10 pb-8 px-4 bg-none md:pb-10 md:pt-14 md:px-16 md:bg-[linear-gradient(135deg,#E8FCF2_0%,#D7FBE9_50%,#8BE4E2_100%)] text-cyan-950">

      <div className="w-28 mb-8 md:mb-10">
        <img
          src="/logo.svg"
          alt="Business Diagram"
          className="h-full w-full object-cover"
        />
      </div>

      <h2 className="relative text-4xl font-semibold text-center font-sans-tight">
      Business Portal
      </h2>

      <p className="mt-4 text-center text-sm w-xs md:w-sm md:mt-6 text-pretty">
        Send, receive, store and
  reconcile automatically.<br className="hidden md:inline"/> The intelligent Current Account
        that seamlessly blends into your business operations.
      </p>

      <button
        className="flex items-center justify-center rounded-full px-10 py-3 mt-8 bg-cyan-900 text-teal-200 hover:bg-cyan-950 transition-colors"
        onClick={onEnterPressed}
      >
        <span>Enter</span>
      </button>
      <a className="mt-8 text-xs text-teal-900/70 underline hover:no-underline cursor-pointer" href="https://www.nofrixion.com/whats-new">What's new?</a>

    </div>
  )
}

export default function CardLayout() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative bg-white">
      {/* Content: centered card layout */}
      <main className="flex flex-col items-center justify-center py-10 px-2 lg:p-10 min-h-screen gap-10 bg-[linear-gradient(135deg,#E8FCF2_0%,#D7FBE9_50%,#8BE4E2_100%)] md:bg-none">
        <div className="flex flex-col items-center justify-center h-full w-full md:w-fit px-2">
          <CardHome
            onEnterPressed={() => {
              // Replace with your actual login URL
              window.location.href = 'https://identity.nofrixion.com/Account/Login'
            }}
          />
          
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-[10px] text-teal-700/50 md:text-slate-400/70 max-w-lg px-2">
            NoFrixion Ltd is authorised as an Electronic Money Institution (EMI) by the Central Bank of Ireland under firm reference number CBI00458163. Although the Central Bank of Ireland's Deposit Guarantee Scheme does not apply to Electronic Money Institutions, NoFrixion ensures the full protection of customer funds, in line with regulatory requirements. NoFrixion is compliant with the Payment Card Industry - Data Security Standard (PCI-DSS), maintaining the highest standards for payment security.
          </p>
        </div>
      </main>
    </div>
  )
}
