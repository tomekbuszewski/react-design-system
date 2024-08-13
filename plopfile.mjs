export default function plop(/** @type {import("plop").NodePlopAPI} */ plop) {
  plop.setGenerator("ui", {
    description: "Create a new UI component",

    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],

    actions: [
      {
        type: "add",
        path: "./src/ui/{{ pascalCase name }}/{{ pascalCase name }}.tsx",
        templateFile: "./plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "./src/ui/{{ pascalCase name }}/{{ pascalCase name }}.stories.tsx",
        templateFile: "./plop-templates/Story.tsx.hbs",
      },
      {
        type: "append",
        path: "./src/ui/index.ts",
        template:
          'export { default as {{ pascalCase name }} } from "./{{ pascalCase name }}/{{ pascalCase name }}";',
      },
    ],
  });
}
