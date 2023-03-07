import { useQuery } from "@tanstack/react-query";

import { pb } from "@/lib/pocketbase";

export default function Home() {
  const { isLoading, data } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => await pb.collection("posts").getFullList(),
  });

  if (isLoading) {
    <>로딩중</>;
  }

  console.log("data", data);

  return (
    <>
      {!data
        ? "에러"
        : data.map((res) => (
            <div key={res.id}>
              <div>{res.title}</div>
              <div>
                {res.comments.map((comment: string) => (
                  <div key={comment} className="ml-4">
                    {comment}
                  </div>
                ))}
              </div>
            </div>
          ))}
    </>
  );
}
