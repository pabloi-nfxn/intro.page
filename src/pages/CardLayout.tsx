// Version 2: Centered card layout (MoneyMoov for Business style)
const CardHome = ({ onEnterPressed }: { onEnterPressed: () => void }) => {
  return (
    <div className="relative flex flex-col items-center justify-center rounded-3xl lg:rounded-[3rem] pt-32 lg:pt-36 pb-10 lg:pb-12 px-8 sm:px-12 lg:px-16 w-full max-w-lg lg:max-w-2xl bg-slate-50 text-cyan-950">
      <div className="absolute top-2 -translate-y-1/2 w-4/5 lg:w-auto">
        <img
          src="/business-diagram.svg"
          alt="MoneyMoov for Business Graphic"
          className="h-full object-cover"
        />
      </div>

      <h2 className="relative text-2xl lg:text-3xl font-semibold text-center leading-snug px-2">
      Money Management for <br />Modern Finance Teams
      </h2>

      <p className="mt-6 lg:mt-8 text-center text-sm lg:text-base leading-relaxed px-2 max-w-md">
        Send, receive, store and reconcile automatically. The intelligent Current Account
        that seamlessly blends into your business operations.
      </p>

      <button
        className="flex items-center rounded-full px-8 py-3 mt-8 bg-cyan-900 text-teal-200 hover:bg-cyan-950 transition-colors"
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
      <main className="flex flex-col items-center justify-between py-8 lg:py-10 px-4 lg:px-10 min-h-screen gap-6 lg:gap-10">
        <div className="flex items-center justify-center pt-2">
          <img 
            src="/logo.svg" 
            alt="NoFrixion Logo" 
            className="h-5 w-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center px-2 sm:px-4 flex-1">
          <CardHome
            onEnterPressed={() => {
              // Replace with your actual login URL
              window.location.href = 'https://identity.nofrixion.com/Account/Login'
            }}
          />
        </div>
        <div className="flex items-center justify-center pb-4">
          <p className="text-center text-[10px] text-slate-400 max-w-2xl lg:max-w-3xl px-4 leading-relaxed">
            NoFrixion Ltd is authorised as an Electronic Money Institution (EMI) by the Central Bank of Ireland under firm reference number CBI00458163. Although the Central Bank of Ireland's Deposit Guarantee Scheme does not apply to Electronic Money Institutions, NoFrixion ensures the full protection of customer funds, in line with regulatory requirements. NoFrixion is compliant with the Payment Card Industry - Data Security Standard (PCI-DSS), maintaining the highest standards for payment security.
          </p>
        </div>
      </main>
    </div>
  )
}
