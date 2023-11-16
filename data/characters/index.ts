import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const DataCharacters = ( page: number ) => {
  return useQuery({
    queryKey: ["character", page],
    queryFn: async () => await api.get(`/character?page=${page}`),
  });
};

export const DataCharacterDetails = (id: number) => {
  return useQuery({
    queryKey: ["detailCharacter", id],
    queryFn: async () => await api.get(`character/${id}`)
  });
};
