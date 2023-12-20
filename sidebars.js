/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  overview: [{ type: 'autogenerated', dirName: 'overview' }],
  networks: [
    'networks/index',
    {
      type: 'category',
      label: 'Flow Networks',
      link: { type: 'doc', id: 'networks/flow-networks/index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'networks/flow-networks',
        },
      ],
    },
    {
      type: 'link',
      label: 'HTTP API',
      href: 'https://developers.flow.com/http-api',
    },
    {
      type: 'category',
      label: 'Flow Port',
      link: { type: 'doc', id: 'networks/flow-port/index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'networks/flow-port',
        },
      ],
    },
    'networks/governance',
    {
      type: 'category',
      label: 'Node Ops',
      items: [
        {
          type: 'autogenerated',
          dirName: 'networks/node-ops',
        },
      ],
    },
    {
      type: 'category',
      label: 'Staking and Epochs',
      items: [
        {
          type: 'autogenerated',
          dirName: 'networks/staking',
        },
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        {
          type: 'autogenerated',
          dirName: 'networks/faq',
        },
      ],
    },
  ],
  build: [
    'build/flow',
    {
      type: 'category',
      label: 'Getting Started',
      items: [{ type: 'autogenerated', dirName: 'build/getting-started' }],
    },
    'build/building-vs-other-chains',
    {
      type: 'category',
      label: 'Basic Concepts',
      items: [{ type: 'autogenerated', dirName: 'build/basics' }],
    },
    {
      type: 'category',
      label: 'Advanced Concepts',
      items: [{ type: 'autogenerated', dirName: 'build/advanced-concepts' }],
    },
    {
      type: 'category',
      label: 'Writing and Deploying Smart Contracts',
      items: [
        { type: 'autogenerated', dirName: 'build/smart-contracts' },
        {
          type: 'category',
          label: 'Cadence Reference',
          items: [
            'build/cadence-reference/json-cadence-spec',
            {
              type: 'link',
              label: 'Language reference',
              href: 'https://cadence-lang.org/docs/language/',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [{ type: 'autogenerated', dirName: 'build/guides' }],
    },
    {
      type: 'category',
      label: 'Core Smart Contracts',
      link: { type: 'doc', id: 'build/core-contracts/index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'build/core-contracts',
        },
      ],
    },
  ],
  nodeOps: [{ type: 'autogenerated', dirName: 'node-ops' }],
  tutorials: [{ type: 'autogenerated', dirName: 'tutorials' }],
  tools: [{ type: 'autogenerated', dirName: 'tools' }],
  communityResources: [
    { type: 'autogenerated', dirName: 'community-resources' },
  ],
};

module.exports = sidebars;
