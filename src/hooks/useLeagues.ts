import { useQuery } from "@tanstack/react-query";

export interface League {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string;
}

const fetchLeagues = async () => {
  const response = await fetch(
    "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch leagues");
  }
  return response.json();
};

export const useLeagues = () => {
  return useQuery({
    queryKey: ["leagues"],
    queryFn: fetchLeagues,
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 30,
  });
}; 