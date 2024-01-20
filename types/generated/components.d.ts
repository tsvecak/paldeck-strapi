import type { Schema, Attribute } from '@strapi/strapi';

export interface PalsStats extends Schema.Component {
  collectionName: 'components_pals_stats';
  info: {
    displayName: 'stats';
    icon: 'apps';
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'pals.stats': PalsStats;
    }
  }
}
