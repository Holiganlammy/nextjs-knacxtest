"use client"
import timeTable from "@/data/dentistTableTime.json"
import { useEffect, useState } from "react";
import { Minimize2 } from 'lucide-react';
import Image from "next/image";

interface ComponentsProps {
    dentists: dentist
}

export function TableDentistDetail({ dentists }: ComponentsProps) {
    const [isZoomed, setIsZoomed] = useState(false);
    const [selectedDentist, setSelectedDentist] = useState<infoDetail | null>(null);

    const HandleZoom = (dentistInfo: infoDetail) => {
        setSelectedDentist(dentistInfo);
        setIsZoomed(!isZoomed);
    };

    useEffect(() => {
        if (isZoomed) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isZoomed]);

    return (
        <div>
            <div className="bg-white p-4 rounded-b-md shadow-md max-h-[500px] overflow-y-scroll">
                <div className="grid grid-cols-1 gap-4">
                    {timeTable.map((timeTableEntry, index) => {
                        const filteredDentists = dentists.info.filter(
                            (dentistInfo) => dentistInfo.dentist_appointment_time_start === timeTableEntry.time
                        );
                        return (
                            <div key={index} className="flex items-center border-b cursor-pointer">
                                <span className="w-16 h-12">{timeTableEntry.time}</span>
                                <div className="flex-1 relative">
                                    {filteredDentists.map((dentistInfo) => (
                                        <div
                                            key={dentistInfo.id_dentist}
                                            className="absolute left-0 mt-[-20px] w-11/12 bg-orange-400 text-white p-2 rounded-md"
                                            onClick={() => HandleZoom(dentistInfo)}
                                        >
                                            <p>ID:{dentistInfo.id_dentist} {dentistInfo.doctor_title_name} {dentistInfo.doctor_name} {dentistInfo.doctor_lastname}</p>
                                            <span>ชื่อ {dentistInfo.name}  นามสกุล {dentistInfo.lastname}</span>
                                            <span className="block text-sm">เบอร์ติดต่อคนไข้ : {dentistInfo.phone_number} | เวลานัด :{dentistInfo.dentist_appointment_time_start}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {isZoomed && selectedDentist && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center overflow-auto">
                    <div className="relative max-w-full max-h-full border border-black">
                        <Minimize2
                            onClick={() => setIsZoomed(false)}
                            className="absolute text-white cursor-pointer text-4xl right-2 top-2 z-10"
                        />
                        <div className="flex justify-between items-center gap-5 p-5">
                            <div className="relative overflow-auto">
                                <p className="text-green-300">นัดหมาย</p>
                                <p className="text-green-300">{dentists.specialty} {dentists.name} {dentists.lastname}</p>
                            </div>
                            <div className="w-10">
                                <Image src={dentists.image} alt={dentists.name} width={dentists.image_width} height={dentists.image_height} />
                            </div>
                        </div>
                        <div className="text-green-500 p-5 pt-0">
                            <p>ID: {selectedDentist.id_dentist}</p>
                            <p>ชื่อ: {selectedDentist.name} นามสกุล: {selectedDentist.lastname}</p>
                            <p>บริการ : {selectedDentist.service}</p>
                            <p>เบอร์ติดต่อ: {selectedDentist.phone_number}</p>
                            <p>เวลานัด: {selectedDentist.dentist_appointment_time_start}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
