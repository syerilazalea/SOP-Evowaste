import Mission from "@/components/mission";
import SopAlat from "@/components/sop-alat";
import { Miss_Fajardose } from "next/font/google";

export default function SopAlatPage() {
  return (
    <main>
      <Mission
  title="SOP Produksi & Operasi Alat"
  description="SOP ini mengatur pengoperasian teknis dari setiap mesin produksi sesuai dengan alur kerja pada standar perusahaan Evowaste.
"
  buttonText="Lihat SOP Produksi"
/>

      <SopAlat />
    </main>
  )
}