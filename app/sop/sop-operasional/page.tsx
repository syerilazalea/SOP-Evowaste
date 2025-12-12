
import Mission from "@/components/mission"
import SopOperasinal from "@/components/sop-operasional"


export default function SopOperasionalPage() {
  return (
    <main>
      <Mission
        title="SOP Operasional Inti"
        description="SOP ini mengatur alur utama bisnis dari penerimaan sampah hingga distribusi produk di Evomart, memastikan prinsip 3R (Reduce, Reuse, Recycle) dan circular economy berjalan.

      "
        buttonText="Lihat SOP Produksi"
      />
      <SopOperasinal />
    </main>
  )
}