import { RequestDocument, request } from "graphql-request";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export function BlogQuery<T>(key: string, query: RequestDocument): UseQueryResult<T, Error> {
	return useQuery({
		queryKey: [key],
		queryFn: async () => request("https://gql.hashnode.com/", query)
	});
}
