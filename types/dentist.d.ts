interface dentist {
    id: number
    image: string
    image_width: number
    image_height: number
    title_name: string
    name: string
    lastname: string
    slug?: string
    specialty: string
    work_time: string
    info: infoDetail[]
}

interface infoDetail {
    id_dentist: number;
    doctor_title_name?: string
    doctor_name?: string,
    doctor_lastname?: string,
    name: string
    lastname: string
    service: string
    phone_number: string
    payment_average: number
    dentist_appointment_time_start?: string
    dentist_appointment_time_end?: string
}