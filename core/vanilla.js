
let jsVanillaDemoConfig = {
  title: 'Vannilla',
  category: [{
  sample: [
    {
      title: 'Env Variable',
      sampleCode: 'import.meta.env.',
      id: 'processEnv',
      demoScript: function () {     
        console.log("import.meta.env", import.meta.env);
        //
        console.log("import.meta.env.VITE_PORT", import.meta.env.VITE_PORT);
        console.log("import.meta.env.DEMO_KEY", import.meta.env.VITE_DEMO_KEY);

        console.log("import.meta.env.VITE_NOT_EXISTS", import.meta.env.VITE_NOT_EXISTS || "Default Value" );
      },
      output: 'console',
    },
  ],
  }]
};

export { jsVanillaDemoConfig };