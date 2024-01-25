import type { Schema, Attribute } from '@strapi/strapi';

export interface ItemsItemsRequired extends Schema.Component {
  collectionName: 'components_items_items_requireds';
  info: {
    displayName: 'itemsRequired';
    icon: 'bulletList';
  };
  attributes: {
    requiredAmount: Attribute.Integer & Attribute.Required;
    item: Attribute.Relation<
      'items.items-required',
      'oneToOne',
      'api::items-drop.items-drop'
    >;
  };
}

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
      'items.items-required': ItemsItemsRequired;
      'pals.stats': PalsStats;
    }
  }
}
