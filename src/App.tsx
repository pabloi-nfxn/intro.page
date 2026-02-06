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
        <div className="w-full max-w-xl px-8 md:px-12 lg:px-40 py-12 lg:max-w-4xl">
          {/* Logo: exported from Figma as SVG, used as-is */}
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <img
              src="/logo.svg"
              alt="nofrixion"
              className="h-6 w-auto shrink-0"
            />
          </div>

          <h1 className="text-4xl font-medium font-sans-tight text-cyan-950 leading-tight mb-6 lg:text-5xl">
            Money Management for Modern Finance Teams
          </h1>

          <p className="text-base text-cyan-950 leading-relaxed mb-10 max-w-lg">
            Send, receive, store and reconcile automatically.
            <br />
            The intelligent Current Account that seamlessly blends into your
            business operations.
          </p>

          <a
            href="https://identity.nofrixion.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dnofrixion.business%26redirect_uri%3Dhttps%253A%252F%252Fbusiness.nofrixion.com%252Fsignin-oidc%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520user_access%2520offline_access%26code_challenge%3DVtTMpIPOK8LN8DmTTDp9s4aIF2fv-6k9w2uvUk6NzU0%26code_challenge_method%3DS256%26max_age%3D10800%26nonce%3D639059091583862606.ZTZjNTIzZTItYjAwMy00ODE1LWE0NGUtMjFjZjdiZjMyNWIwNWE1Mjk0NzEtZTEzYy00OWJiLWFlNWMtODM3NTk2N2MzMDFi%26state%3DCfDJ8Pt-fU7KZ09Bkp5Dkn-1LCeT4dssbATrqXsDcVgUY9VlXw3LJp955t-82Lg_W8isumf6kj_UemwK-DPC7_W6qLZX0g83sbCVSkJz3DdOgYzESfj-cxk5l-QziCRGlSh1erHl2prVqKgVeHdSB1INnraw4eEQRo9q8kLBHAZSX9BHzsyQkIArtCi3balOal7LNH42QKTlrwZIdewqNxaZj8OGZUwAFzO-J_Gko6VznFDo3Cf1r6a4xsxKpUdk0buxoTLhB85fPgupJRmJT8GNgcbWJzYCaDbwLUgdVB5QrlUzHA1iwYi-n7l4HtFSgpMbiOf0NwoMK41CcO2acJwrFyufUuFhObAhr5ezsGGBdwxtes08o54R4pisS8mDemVxdw%26x-client-SKU%3DID_NET8_0%26x-client-ver%3D7.6.2.0"
            className="inline-block px-8 py-3.5 rounded-lg bg-cyan-900 text-teal-200 font-normal text-base hover:bg-cyan-950 active:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 transition-colors"
          >
            Enter
          </a>
        </div>
      </main>
    </div>
  )
}

export default App
