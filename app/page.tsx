import datas from "@/data/doctor.json"
import { HomePageDentist } from "@/app/HomePageDentist"

export default function page() {
  return (
    <section className="min-h-[calc(100dvh-165px)] px-3 sm:px-4 lg:px-6 ">
      <div className="text-4xl font-bold text-center mt-14">
        <p>Dentist Website</p>
      </div>
      <HomePageDentist dentists={datas} />
    </section>
  )
}
