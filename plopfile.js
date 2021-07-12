/* eslint-disable prefer-template */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable prefer-const */
const { readdirSync } = require('fs');

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      return { name: dirent.name, value: dirent.name };
    });

const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + ' is required';
    }
    return true;
  };
};

module.exports = (plop) => {
  let directories = getDirectories('src/pages');
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name')
      },
      {
        // Raw text input
        type: 'confirm',
        // Variable name for this input
        name: 'isCommon',
        // Prompt to display on command line
        message: 'Is it common component?'
      },
      {
        when: function (response) {
          return response.isCommon === false;
        },
        // Raw text input
        type: 'list',
        // Variable name for this input
        name: 'container',
        // Prompt to display on command line
        message: 'Choose container?',
        choices: directories
      }
    ],
    actions: (data) => {
      const path = data.isCommon
        ? 'src/components/'
        : 'src/pages/' + data.container + '/components/';
      const actions = [
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'plop-templates/Component/Component.js.hbs'
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'plop-templates/Component/Component.test.js.hbs'
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.sc.tsx',
          templateFile: 'plop-templates/Component/Component.sc.js.hbs'
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/index.tsx',
          templateFile: 'plop-templates/Component/index.js.hbs'
        },
        {
          type: 'add',
          path: path + 'index.tsx',
          templateFile: 'plop-templates/injectable-index.js.hbs',
          skipIfExists: true
        },
        {
          type: 'append',
          path: path + 'index.tsx',
          pattern: `/* PLOP_INJECT_IMPORT */`,
          template: `import {{pascalCase name}} from './{{pascalCase name}}';`
        },
        {
          type: 'append',
          path: path + 'index.tsx',
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `\t{{pascalCase name}},`
        }
      ];

      return actions;
    }
  });

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
        validate: requireField('name')
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Page/Page.js.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/Page/Page.test.js.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.sc.tsx',
        templateFile: 'plop-templates/Page/Page.sc.js.hbs'
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/Page/index.js.hbs'
      }
    ]
  });

  plop.setGenerator('service', {
    description: 'Create service',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name?',
        validate: requireField('name')
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/services/{{camelCase name}}/{{camelCase name}}.tsx',
        templateFile: 'plop-templates/service/service.js.hbs'
      },
      {
        type: 'add',
        path: 'src/services/{{camelCase name}}/{{camelCase name}}.test.tsx',
        templateFile: 'plop-templates/service/service.test.js.hbs'
      },
      {
        type: 'add',
        path: 'src/services/{{camelCase name}}/index.tsx',
        templateFile: 'plop-templates/service/index.js.hbs'
      },
      {
        type: 'add',
        path: 'src/services/index.tsx',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: 'src/services/index.tsx',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}';`
      },
      {
        type: 'append',
        path: 'src/services/index.tsx',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`
      }
    ]
  });

  plop.setGenerator('hook', {
    description: 'Create a custom react hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your hook name?',
        validate: requireField('name')
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/hooks/{{camelCase name}}/{{camelCase name}}.tsx',
        templateFile: 'plop-templates/hook/hook.js.hbs'
      },
      {
        type: 'add',
        path: 'src/hooks/{{camelCase name}}/{{camelCase name}}.test.tsx',
        templateFile: 'plop-templates/hook/hook.test.js.hbs'
      },
      {
        type: 'add',
        path: 'src/hooks/{{camelCase name}}/index.tsx',
        templateFile: 'plop-templates/hook/index.js.hbs'
      },
      {
        type: 'add',
        path: 'src/hooks/index.tsx',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: 'src/hooks/index.tsx',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{camelCase name}} from './{{camelCase name}}';`
      },
      {
        type: 'append',
        path: 'src/hooks/index.tsx',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{camelCase name}},`
      }
    ]
  });
};
