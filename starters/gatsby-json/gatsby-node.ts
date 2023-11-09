/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument */
import { sentenceCase } from 'change-case';
import type { GatsbyNode } from 'gatsby';
import path from 'path';

type Result = {
  allFile: {
    nodes: {
      absolutePath: string;
      relativePath: string;
    }[];
  };
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const PreviewPage = path.resolve('./src/templates/preview-page.tsx');

  const result = await graphql<Result>(`
    {
      allFile(filter: { relativePath: { glob: "*.example.*" } }) {
        nodes {
          relativePath
          absolutePath
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your pages data.`, result.errors);

    return;
  }

  const examplePages = result?.data?.allFile.nodes ?? [];

  if (examplePages.length > 0) {
    examplePages.forEach(({ absolutePath, relativePath }) => {
      // eslint-disable-next-line no-useless-escape -- This RegEx is correct.
      const match = absolutePath.match(/\/([^\/.]+)\.example./);
      const fileName = match?.[1] ?? 'file';
      const title = sentenceCase(fileName);

      createPage({
        path: `/preview/${fileName}`,
        component: PreviewPage,
        context: {
          title: title,
          fileName: fileName,
          examplePath: relativePath,
          dependencies: [],
        },
      });
    });
  }
};
