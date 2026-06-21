import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getDoctorDataById } from "../services/apiGetDoctors";

export function useGetDoctorDetailsById() {
    const { id } = useParams();
    const { data: doctor = [], isLoading } = useQuery({
        queryKey: ["doctors", id],
        queryFn: () => getDoctorDataById(id),
        enabled: !!id,
    });

    return { doctor, isLoading };
}