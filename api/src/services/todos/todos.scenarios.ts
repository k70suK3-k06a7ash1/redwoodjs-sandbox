import type { Prisma, Todo } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TodoCreateArgs>({
  todo: {
    one: { data: { title: 'String', body: 'String', isDone: true } },
    two: { data: { title: 'String', body: 'String', isDone: true } },
  },
})

export type StandardScenario = ScenarioData<Todo, 'todo'>
