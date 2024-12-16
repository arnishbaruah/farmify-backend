import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderedItemOrderedItem extends Schema.Component {
  collectionName: 'components_ordered_item_ordered_items';
  info: {
    displayName: 'orderedItem';
    icon: 'database';
    description: '';
  };
  attributes: {
    quantity: Attribute.Integer;
    amount: Attribute.Float;
    product: Attribute.Relation<
      'ordered-item.ordered-item',
      'oneToOne',
      'api::product.product'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ordered-item.ordered-item': OrderedItemOrderedItem;
    }
  }
}
