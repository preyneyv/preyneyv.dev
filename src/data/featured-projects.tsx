import type { Project } from "./projects";

import arcaptcha from "./projects/arcaptcha";
import usePrompt from "./projects/use-prompt";
import yarralytics from "./projects/yarralytics";

export type FeaturedProject = Pick<
  Project,
  "name" | "slug" | "description" | "tech" | "links"
>;

export default [arcaptcha, usePrompt, yarralytics].map(
  ({ name, slug, tagline, tech, links }) => ({
    name,
    slug,
    description: tagline,
    tech,
    links: links.filter(
      (link): link is { type: "external" | "github"; url: string } =>
        link.type === "external" || link.type === "github",
    ),
  }),
) satisfies FeaturedProject[];
