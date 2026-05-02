import previewImage from "../../../public/previews/arcaptcha.png";
import { Project } from "../projects";

export default {
  name: "ARCaptcha",
  slug: "arcaptcha",
  tech: ["Python", "Flask", "Socket.IO", "React", "TypeScript", "Docker"],
  links: [
    { type: "external", url: "https://arcaptcha.io/" },
    { type: "github", url: "https://github.com/preyneyv/arcaptcha" },
  ],
  tagline: "Daily ARC-AGI-3 puzzle in a handheld-console UI.",
  description: (
    <>
      One puzzle goes live each day, the backend keeps the environment warm, and
      the browser replays your same-day run over Socket.IO.
    </>
  ),
  previewImage: {
    type: "image",
    src: previewImage,
  },
} satisfies Project;
