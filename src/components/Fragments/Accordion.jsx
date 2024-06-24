function Accordion() {
  return (
    <>
        <div className="join join-vertical w-[343px] text-black font-extralight text-sm">
                <div className="collapse collapse-arrow join-item border-b-2">
                  <input type="checkbox" name="my-accordion-4" />
                  <div className="collapse-title">Apa itu Gamifikasi?</div>
                  <div className="collapse-content">
                    <p>
                      Gamifikasi adalah suatu pendekatan yang mengaplikasikan
                      elemen-elemen permainan atau game dalam konteks yang bukan
                      game
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-b-2">
                  <input type="checkbox" name="my-accordion-4" />
                  <div className="collapse-title">Apa itu Dirgantara?</div>
                  <div className="collapse-content">
                    <p>
                      Layanan yang memberikan materi pembelajaran digital
                      marketing yang dikemas dengan konsep gamifikasi
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-b-2">
                  <input type="checkbox" name="my-accordion-4" />
                  <div className="collapse-title">Produk Dirgantara?</div>
                  <div className="collapse-content">
                    <p>
                      Kami memiliki produk seperti ular tangga, monopoli ,dan
                      kartu game yang dikemas dengan konsep gamifikasi
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border-b-2">
                  <input type="checkbox" name="my-accordion-4" />
                  <div className="collapse-title">
                    Berapa harga produk Dirgantara?
                  </div>
                  <div className="collapse-content">
                    <p>Seharga 40.000</p>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Accordion
