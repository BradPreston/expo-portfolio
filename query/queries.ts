import { gql } from "graphql-request";

export const GET_ALL_POSTS = gql`
	query get_public_posts {
		user(username: "bpreston5393") {
			id
			posts(page: 1, pageSize: 20) {
				edges {
					post: node {
						title
						url
						coverImage {
							url
						}
					}
				}
			}
		}
	}
`;
