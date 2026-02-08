// Version 2: Centered card layout (MoneyMoov for Business style)
const CardHome = ({ onEnterPressed }: { onEnterPressed: () => void }) => {
  return (
    <div className="relative flex flex-col items-center justify-center rounded-4xl pt-32 pb-12 w-fit bg-slate-50 text-cyan-950">
      <div className="absolute top-[0.3rem] w-full -translate-y-1/2 lg:top-2 lg:w-auto">
        <img
          src="/business-diagram.svg"
          alt="MoneyMoov for Business Graphic"
          className="mx-auto h-full w-full object-cover"
        />
      </div>

      <h2 className="relative text-3xl font-semibold text-center">
      Money Management for <br />Modern Finance Teams
      </h2>

      <p className="mt-6 px-6 text-center text-sm leading-6 w-xl lg:mt-8 lg:text-base ">
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
      <main className="flex-col items-center justify-center py-10 px-2 lg:p-10 min-h-screen">
        <div className="flex items-center justify-center">
          <img 
            src="/logo.svg" 
            alt="NoFrixion Logo" 
            className="h-5 w-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center h-screen pb-40 px-2">
          <CardHome
            onEnterPressed={() => {
              // Replace with your actual login URL
              window.location.href = 'https://identity.nofrixion.com/Account/Login'
            }}
          />
        </div>
      </main>
    </div>
  )
}
