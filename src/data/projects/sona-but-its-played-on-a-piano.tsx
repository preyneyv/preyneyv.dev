import { Project } from '../projects'

export default {
  name: "Sona but it's played on a piano",
  slug: 'sona-but-its-played-on-a-piano',
  tech: ['Python', 'OpenCV', 'MIDI'],
  links: [
    {
      type: 'video',
      url: 'https://www.youtube.com/watch?v=EF07SypDzZo',
    },
    {
      type: 'github',
      url: 'https://github.com/preyneyv/lol-piano',
    },
  ],
  description: (
    <>
      Using a digital piano to play Sona (a musical champion in League of
      Legends). Abilities are mapped to chords on the piano. Because both hands
      are preoccupied, mouse control is done using computer vision tracking a
      foot.
    </>
  ),
} satisfies Project
