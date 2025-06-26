import {elixir} from 'codemirror-lang-elixir'

// Custom configuration for the code input plugin
export const codeInputConfig = {
  // Add Elixir language support using codeModes
  codeModes: [
    {
      name: 'elixir',
      loader: () => Promise.resolve(elixir()),
    },
  ],
} 