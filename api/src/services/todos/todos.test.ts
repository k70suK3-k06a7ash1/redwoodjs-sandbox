import type { Todo } from "@prisma/client";

import { todos, todo, createTodo, updateTodo, deleteTodo } from "./todos";
import type { StandardScenario } from "./todos.scenarios";

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("todos", () => {
	scenario("returns all todos", async (scenario: StandardScenario) => {
		const result = await todos();

		expect(result.length).toEqual(Object.keys(scenario.todo).length);
	});

	scenario("returns a single todo", async (scenario: StandardScenario) => {
		const result = await todo({ id: scenario.todo.one.id });

		expect(result).toEqual(scenario.todo.one);
	});

	scenario("creates a todo", async () => {
		const result = await createTodo({
			input: { title: "String", body: "String", isDone: true },
		});

		expect(result.title).toEqual("String");
		expect(result.body).toEqual("String");
		expect(result.isDone).toEqual(true);
	});

	scenario("updates a todo", async (scenario: StandardScenario) => {
		const original = (await todo({ id: scenario.todo.one.id })) as Todo;
		const result = await updateTodo({
			id: original.id,
			input: { title: "String2" },
		});

		expect(result.title).toEqual("String2");
	});

	scenario("deletes a todo", async (scenario: StandardScenario) => {
		const original = (await deleteTodo({ id: scenario.todo.one.id })) as Todo;
		const result = await todo({ id: original.id });

		expect(result).toEqual(null);
	});
});
