import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'nkdwfm1n', // replace value with your own
    dataset: 'production', // replace value with your own
  },
  studioHost: 'vellandi',
  deployment: {
    appId: '0f2c336d7931e9d6e9ef044d',
  },
}) 