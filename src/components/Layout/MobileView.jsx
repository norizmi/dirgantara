// eslint-disable-next-line react/prop-types
function MobileView({children}) {
  return (
    <>
        <main className="my-0 mx-auto min-h-full max-w-screen-sm">
          <div className="my-0 mx-auto min-h-screen overflow-x-hidden bg-[#F0F0F0] max-w-[480px] w-full text-black">
              {children}
          </div>
        </main>
    </>
  )
}

export default MobileView
