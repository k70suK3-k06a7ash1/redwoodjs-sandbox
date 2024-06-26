export const schema = gql`
  type Todo {
    id: Int!
    title: String!
    body: String!
    isDone: Boolean!
    createdAt: DateTime!
  }

  type Query {
    todos: [Todo!]! @requireAuth
    todo(id: Int!): Todo @requireAuth
  }

  input CreateTodoInput {
    title: String!
    body: String!
    isDone: Boolean!
  }

  input UpdateTodoInput {
    title: String
    body: String
    isDone: Boolean
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Todo! @requireAuth
    updateTodo(id: Int!, input: UpdateTodoInput!): Todo! @requireAuth
    deleteTodo(id: Int!): Todo! @requireAuth
  }
`;
