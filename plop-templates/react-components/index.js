var componentPackage = {
    description: 'Includes Service (optional), Container, Component',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the new component?',
        },
        {
            type: 'directory',
            name: 'directory',
            message: 'Where should the component be placed?',
            basePath: 'src/components',
        },
        {
            type: 'list',
            name: 'componentType',
            message: 'What kind of component do you want?',
            choices: [
                {
                    name: 'Normal component',
                    value: 'normal',
                },
                {
                    name: 'Stateless component',
                    value: 'stateless',
                },
            ],
            default: 'stateless',
        },
        {
            type: 'confirm',
            name: 'query',
            message:
                'Would you like to include <StaticQuery> in your component?',
            default: true,
        },
        {
            type: 'confirm',
            name: 'service',
            message:
                'Would you like to use a service file together with your component?',
            default: false,
            when: function(hash) {
                return hash.componentType === 'normal';
            },
        },
    ],
    actions: function(data) {
        // Make simple componentType for ease of use with handlebars
        data.componentTypeObj = {};
        data.componentTypeObj[data.componentType] = true;

        // Make simple cssType for ease of use with handlebars
        data.cssTypeObj = {};
        data.cssTypeObj[data.cssType] = true;

        // Default actions
        var actions = [
            {
                type: 'add',
                path:
                    'src/components/{{directory}}/{{camelCase name}}/index.js',
                templateFile: 'plop-templates/react-components/index.js.txt',
            },
        ];

        // Add service file
        if (data.service) {
            actions.push({
                type: 'add',
                path:
                    'src/components/{{directory}}/{{camelCase name}}/{{camelCase name}}.service.js',
                templateFile:
                    'plop-templates/react-components/component.js.txt',
            });
        }

        // Add component file
        switch (data.componentType) {
            case 'stateless':
                actions.push({
                    type: 'add',
                    path:
                        'src/components/{{directory}}/{{camelCase name}}/{{camelCase name}}.component.js',
                    templateFile:
                        'plop-templates/react-components/component.component.stateless.js.txt',
                });
                break;
            case 'normal':
                actions.push({
                    type: 'add',
                    path:
                        'src/components/{{directory}}/{{camelCase name}}/{{camelCase name}}.component.js',
                    templateFile:
                        'plop-templates/react-components/component.component.component.js.txt',
                });
                break;
        }

        return actions;
    },
};

module.exports = {
    componentPackage,
};
