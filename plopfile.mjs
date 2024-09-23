export default function plop(/** @type {import("plop").NodePlopAPI} */ plop) {
  plop.setGenerator("ui", {
    description: "Create a new UI component",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "Component type",
        choices: ["atom", "molecule", "organism", "view"],
      },
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],

    actions: [
      {
        type: "add",
        path: "./src/ui/{{type}}s/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "./plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "./src/ui/{{type}}s/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "./plop-templates/Story.tsx.hbs",
      },
      {
        type: "append",
        path: "./src/ui/{{type}}s/index.ts",
        template:
          'export { default as {{pascalCase name}} } from "./{{pascalCase name}}/{{pascalCase name}}";',
      },
    ],
  });
}
