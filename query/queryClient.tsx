import { QueryClient, QueryClientProvider as Provider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 10000
		}
	}
});

export function QueryClientProvider({ children }: PropsWithChildren) {
	return <Provider client={queryClient}>{children}</Provider>;
}
