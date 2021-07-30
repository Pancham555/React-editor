import FeatureComponent from "./FeatureComponent";

const featurePlugin = {
  Renderer: ({ data }) => (
    <FeatureComponent data={data}></FeatureComponent>
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
        text: {
          type: 'string',
          default: 'someDefaultValue',
        },
      },
      required: ['title'],
    },
  },
};
export default featurePlugin;