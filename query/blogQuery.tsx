import { RequestDocument, request } from "graphql-request";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { graphql } from "./graphql/gql";
import { GET_ALL_POSTS } from "./queries";

const allBlogsQueryDocument = graphql(GET_ALL_POSTS);

export function BlogQuery<T>(key: string, query: RequestDocument, id?: number): UseQueryResult<T, Error> {
	return useQuery({
		queryKey: [key],
		queryFn: async () => request("https://gql.hashnode.com/", query)
	});
}
