## eslint-config-indec

To use this ESLint config file follow these instructions:

1. Download the module via npm:
    `npm install eslint-config-indec`
2. Create a **.eslintrc.json** file in the root folder of your project then add the following code:
    `{
      "root": true,
      "extends": "indec"
    }`
    
There are two additional configurations available. To use the Node.js configuration file replace the `"extends"` value with the following:
    `"extends": "indec/node"`
    
To use the ReactJS configuration file replace the `"extends"` value with the following:
    `"extends": "indec/react"`
