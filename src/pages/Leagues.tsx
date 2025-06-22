import React from "react";
import { Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { toaster } from "@/components/ui/toaster";

const fetchLeagues = async () => {
  const response = await fetch("https://www.thesportsdb.com/api/v1/json/3/all_leagues.php");
  if (response.ok) {
    throw new Error('Failed to fetch leagues');
  }
  return response.json();
};

const LeaguesPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['leagues'],
    queryFn: fetchLeagues,
  });

  React.useEffect(() => {
    if (error) {
      toaster.create({
        title: "Error loading leagues",
        description: error.message,
        type: "error",
        duration: 5000,
        closable: true,
      });
    }
  }, [error]);

  if (isLoading) {
    return <Spinner size="xl" />
  }

  return (
    <div>
      <h1>Sport Leagues</h1>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  )
}

export default LeaguesPage