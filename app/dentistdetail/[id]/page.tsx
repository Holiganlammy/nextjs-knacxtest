import dentists from "@/data/doctor.json";
// import timeTable from "@/data/dentistTableTime.json"
import { TableDentistDetail } from "@/app/dentistdetail/[id]/TableDentistDetail"
import { Undo2 } from 'lucide-react';
export default function page(props: { params: { id: number; slug: string } }) {
  const slug = props.params.slug ? props.params.slug : props.params.id;
  const dentistDetail = dentists.filter(dentist => dentist.slug === slug);
  return (
    <section>
      {dentistDetail.length > 0 ? (
        dentistDetail.map((detail) => (
          <div key={detail.id} className="max-w-screen-xl mx-auto p-5">
            <div className="mt-10 text-center">
              <span className="text-4xl font-bold border-b border-black">{detail.title_name}. {detail.name} {detail.lastname}</span>
            </div>
            <div className="flex mt-10 gap-10">
              <div className="w-[40%]">
                <div className="border border-black bg-slate-600">
                  <p className="text-center text-white font-bold">{detail.specialty}</p>
                </div>
                <div className="font-bold bg-green-400 text-white rounded-md">
                  <p className="text-center">เวลาเข้างาน {detail.work_time} น.</p>
                </div>
                <TableDentistDetail dentists={detail} />
              </div>
              <div className="w-[60%]">
                <div className="flex justify-between">
                  <div>
                    <p className="text-bold text-2xl">วันที่ 22 ตุลาคม 2567</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="p-2 w-[250px] bg-slate-500 border border-black text-center">
                      <p>รายได้ทั้งหมด 0.00 บาท</p>
                    </div>
                    <div className="border border-orange-400 w-10 flex justify-center items-center">
                      <Undo2 />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-5 mt-10 ">
                  <div className="max-h-[500px] shadow-md rounded-md">
                    <h3 className="p-2 bg-emerald-500 text-center text-white text-sm">ห้องพิเศษ present (0)</h3>
                    <div className="w-full h-[430px] bg-sky-50">
                    </div>
                  </div>
                  <div className="max-h-[500px] shadow-md rounded-md">
                    <h3 className="p-2 bg-emerald-500 text-center text-white text-sm">แอดมิน (1)</h3>
                    <div className="w-full h-[430px] bg-sky-50 pt-10">
                      <div className="w-full max-w-[190px] mx-auto bg-white shadow-md rounded-lg flex items-center p-3 relative">
                        <div className="w-7 flex flex-col items-center justify-center bg-teal-500 text-white rounded-l-lg">
                          <div className="font-bold text-lg">01</div>
                        </div>
                        <div className="flex-1 px-3">
                          <div className="text-gray-800 font-semibold text-xs">วรภัทธ บารมี</div>
                          <div className="text-gray-500 text-sm">6401023</div>
                          <div className="text-gray-400 text-sm">9 วัน</div>
                        </div>
                        <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full text-gray-500 absolute top-2 right-2">
                          <span className="text-lg font-bold">05</span>
                        </div>

                        <div className="absolute bottom-2 right-2 text-red-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728zm-2.121 2.121L5.636 18.364" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="max-h-[500px] shadow-md rounded-md">
                    <h3 className="p-2 bg-emerald-500 text-center text-white text-sm">จุดชำระเงิน (1)</h3>
                    <div className="w-full h-[430px] bg-sky-50 pt-10">
                      <div className="w-full max-w-[190px] mx-auto bg-white shadow-md rounded-lg flex items-center p-3 relative">
                        <div className="w-7 flex flex-col items-center justify-center bg-teal-500 text-white rounded-l-lg">
                          <div className="font-bold text-lg">01</div>
                        </div>
                        <div className="flex-1 px-3">
                          <div className="text-gray-800 font-semibold text-xs">การดา สุขสวัสดิ์</div>
                          <div className="text-gray-500 text-sm">6401009</div>
                          <div className="text-gray-400 text-sm">5 วัน</div>
                        </div>
                        <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded-full text-gray-500 absolute top-2 right-2">
                          <span className="text-lg font-bold">03</span>
                        </div>

                        <div className="absolute bottom-2 right-2 text-red-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728zm-2.121 2.121L5.636 18.364" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No dentist found</p>
      )}
    </section>
  );
}
