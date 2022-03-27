import { ApiFetchOptions, ApiFetchResults } from "@common/types/api";

const fetchApi = async <T>({
  url,
  query,
}: ApiFetchOptions): Promise<ApiFetchResults<T>> => {
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
