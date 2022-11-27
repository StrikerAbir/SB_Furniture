import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useRole = (email) => {

  const [roles, setRole] = useState('');
  const url = `http://localhost:1000/users/userType/${email}`;

  const { data: role, refetch, } = useQuery({
    queryKey: ["role", email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      setRole(data)
      return data;
    }
  });
  return [roles,refetch]
}

export default useRole;
