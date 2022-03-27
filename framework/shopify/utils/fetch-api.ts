type FetchParams = {
  query: string;
};

type FetchResult<T> = { data: T };

const fetchApi = async <T>({ query }: FetchParams): Promise<FetchResult<T>> => {
  const url = "http://localhost:4000/graphql";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });

  const { data, error } = await res.json();
  if (error) {
    throw new Error("Error fetching query:", error[0].message ?? error.message);
  }

  return { data };
};

export default fetchApi;
