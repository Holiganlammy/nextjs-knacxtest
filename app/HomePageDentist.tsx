"use client"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { DentistItem } from "@/components/DentistItem"
import { useState } from "react"
interface ComponentProps {
    dentists: dentist[]
}

export function HomePageDentist({ dentists }: ComponentProps) {
    const [selectspecialty, setSelectspecialty] = useState("default")
    const dentistFilter = selectspecialty && selectspecialty !== "default"
        ? dentists.filter(dentist => dentist.specialty === selectspecialty)
        : dentists;
    console.log(dentistFilter)
    return (
        <div>
            <Select onValueChange={setSelectspecialty} value={selectspecialty}>
                <SelectTrigger className="w-[250px] mt-20">
                    <SelectValue placeholder="Sort Position Dentist by Default" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Position Dentist</SelectLabel>
                        <SelectItem value="default">Sort Position Dentist by Default</SelectItem>
                        <SelectItem value="ทันตแพทย์ทั่วไป">ทันตแพทย์ทั่วไป</SelectItem>
                        <SelectItem value="ทันตแพทย์จัดฟัน">ทันตแพทย์จัดฟัน</SelectItem>
                        <SelectItem value="ทันตแพทย์เฉพาะทางรากฟัน">ทันตแพทย์เฉพาะทางรากฟัน</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <div className="grid grid-cols-5 gap-3 mt-20">
                {dentistFilter.map((dentist) => (
                    <DentistItem key={dentist.id} dentist={dentist} />
                ))}
            </div>
        </div>
    )
}
