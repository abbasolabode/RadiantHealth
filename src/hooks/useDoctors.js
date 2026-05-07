import { useQuery } from "@tanstack/react-query";
import { getDoctorsData } from "../services/apiGetDoctors";

export function useDoctors() {
    const { data: doctors = [], isLoading } = useQuery({
        queryKey: ["doctors"],
        queryFn: getDoctorsData,
    });
    return { doctors, isLoading }
}