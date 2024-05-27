import { Project } from '../projects'

export default {
  name: 'Reinforcement Learning Adventures',
  slug: 'reinforcement-learning-adventures',
  tech: ['Python', 'Keras', 'OpenAI Gym'],
  links: [
    {
      type: 'external',
      url: 'https://medium.com/@preyneyv/reinforcement-learning-adventures-ba99cc27eb85',
    },
  ],
  description: (
    <>
      Exploration using Deep Q-Networks to play the Chrome Dinosaur Game,
      Connect 4, and Othello.
    </>
  ),
} satisfies Project
