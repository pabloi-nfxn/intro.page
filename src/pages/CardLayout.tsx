// Version 2: Centered card layout (MoneyMoov for Business style)
const CardHome = ({ onEnterPressed }: { onEnterPressed: () => void }) => {
  return (
    <div className="relative flex flex-col items-center justify-center rounded-4xl pt-4 pb-8 px-4 md:pt-28 md:px-16 bg-slate-50 text-cyan-950">
      {/* Mobile-centered business diagram */}
      <div className="mb-6 flex justify-center md:hidden">
        <img
          src="/business-diagram.svg"
          alt="Business Diagram"
          className="w-80 h-auto object-contain"
        />
      </div>

      {/* Existing absolute diagram for desktop/tablet */}
      <div className="hidden md:block absolute top-2 -translate-y-1/2 w-auto">
        <img
          src="/business-diagram.svg"
          alt="Business Diagram"
          className="h-full w-full object-cover"
        />
      </div>

      <h2 className="relative text-2xl md:text-3xl font-semibold text-center">
      Money Management for <br />Modern Finance Teams
      </h2>

      <p className="mt-6 text-center text-xs md:text-sm w-xs md:w-sm lg:mt-8 lg:text-base ">
        Send, receive, store and reconcile automatically.<br />The intelligent Current Account
        that seamlessly blends into your business operations.
      </p>

      <button
        className="flex items-center rounded-full px-6 py-3 mt-8  bg-cyan-900 text-teal-200 hover:bg-cyan-950 transition-colors"
        onClick={onEnterPressed}
      >
        <span>Enter</span>
      </button>
    </div>
  )
}

export default function CardLayout() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative bg-white">
      {/* Content: centered card layout */}
      <main className="flex flex-col items-center justify-between py-10 px-2 lg:p-10 min-h-screen">
        <div className="flex items-center justify-center">
          <img 
            src="/logo.svg" 
            alt="NoFrixion Logo" 
            className="h-5 w-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center px-2 md:mt-10">
          <CardHome
            onEnterPressed={() => {
              // Replace with your actual login URL
              window.location.href = 'https://identity.nofrixion.com/Account/Login'
            }}
          />
        </div>
        <div className="flex items-center justify-center">
          <p className="text-center text-[10px] text-slate-400 max-w-3xl px-2">NoFrixion Ltd is authorised as an Electronic Money Institution (EMI) by the Central Bank of Ireland under firm reference number CBI00458163. Although the Central Bank of Ireland's Deposit Guarantee Scheme does not apply to Electronic Money Institutions, NoFrixion ensures the full protection of customer funds, in line with regulatory requirements. NoFrixion is compliant with the Payment Card Industry - Data Security Standard (PCI-DSS), maintaining the highest standards for payment security.

</p>
        </div>
      </main>
    </div>
  )
}
