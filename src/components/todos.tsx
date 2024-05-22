'use client';

import { useQuery } from '@tanstack/react-query';
import { getTodos } from '~/server';

export default function Todos() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data</p>;
  }

  return <div>{data && data.map((todo, index) => <p key={index}>{todo}</p>)}</div>;
}
