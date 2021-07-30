import FeatureComponent from "./FeatureComponent";

const featurePlugin = {
    Renderer: ({ data }) => (
      <FeatureComponent></FeatureComponent>
    ),
    id: 'featurePlugin',
    title: 'featurePlugin',
    description: 'featurePlugin',
    version: 1,
    controls: {
      type: 'autoform',
      schema: {
        properties: {
          title: {
            type: 'string',
            default: 'someDefaultValue',
          },
        },
        required: ['title'],
      },
    },
  };
  export default  featurePlugin;