import type {
	ExampleTodosQuery,
	ExampleTodosQueryVariables,
} from "types/graphql";

import type {
	CellSuccessProps,
	CellFailureProps,
	TypedDocumentNode,
} from "@redwoodjs/web";

export const QUERY: TypedDocumentNode<
	ExampleTodosQuery,
	ExampleTodosQueryVariables
> = gql`
  query ExampleTodosQuery {
    exampleTodos {
      id
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }: CellFailureProps) => (
	<div style={{ color: "red" }}>Error: {error?.message}</div>
);

export const Success = ({
	exampleTodos,
}: CellSuccessProps<ExampleTodosQuery>) => {
	return (
		<ul>
			{exampleTodos.map((item) => {
				return <li key={item.id}>{JSON.stringify(item)}</li>;
			})}
		</ul>
	);
};
