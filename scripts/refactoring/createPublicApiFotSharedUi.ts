import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(uiPath);
const componentsDirs = sharedUiDirectory?.getDirectories();

function isAbsolute (value: string) {
  const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
  return layers.some((layer) => value.startsWith(layer));
}

componentsDirs?.forEach((dir) => {
  const indexFilePath = `${dir.getPath()}/index.ts`;
  const indexFiles = dir.getSourceFiles(indexFilePath);
  if (!indexFiles) {
    const sourseCode = `export { ${dir.getBaseName()} } from './ui/${dir.getBaseName()}';`;
    const file = dir.createSourceFile(indexFilePath, sourseCode);

    file.save();
  }
});

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    const valueWithAlias = value.replace('@/', '');
    const segment = valueWithAlias.split('/');

    const isSharedLayer = segment[0] === 'shared';
    const isUiSlice = segment[1] === 'ui';

    if (isAbsolute(valueWithAlias) && isSharedLayer && isUiSlice) {
      const result = valueWithAlias.split('/').slice(0, 3).join('/');
      importDeclaration.setModuleSpecifier(`@/${result}`);
    }
  });
});

project.save();
