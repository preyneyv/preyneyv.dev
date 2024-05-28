import { Project } from '../projects'

export default {
  name: "Rubik's Cube RL Agents",
  slug: 'rubiks-cube-rl-agents',
  tech: ['Python', 'Keras', 'OpenAI Gym'],
  links: [
    {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=3m4HonM1uTI',
    },
  ],
  for: 'Georgia Tech',
  tagline: `Machine Learning (CS 4641) end-of-semester project to solve a Rubik’s Cube
  using reinforcement learning.`,
  description: (
    <>
      Explored a variety of agents, network architectures, and hyperparameters.
    </>
  ),
} satisfies Project
