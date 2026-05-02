import { Project } from "../projects";

export default {
  name: "use-prompt",
  slug: "use-prompt",
  tech: ["Rust", "SWC", "TypeScript", "Next.js", "OpenAI"],
  links: [
    {
      type: "github",
      url: "https://github.com/preyneyv/swc-plugin-use-prompt",
    },
    {
      type: "external",
      url: "https://codesandbox.io/p/devbox/swc-plugin-use-prompt-m73dsf",
    },
  ],
  tagline: "Compile-time GenAI for SWC-powered apps.",
  description: (
    <>
      A Rust SWC plugin and CLI that turn <code>&quot;use prompt:&quot;</code>
      directives into real TypeScript before the build finishes.
    </>
  ),
  previewImage: {
    type: "video",
    src: "/previews/use-prompt.mp4",
  },
} satisfies Project;
