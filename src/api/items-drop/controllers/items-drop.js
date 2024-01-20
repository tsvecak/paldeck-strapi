'use strict';

/**
 * items-drop controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::items-drop.items-drop',
() => ({
  async find(ctx) {
    ctx.query = { ...ctx.query, locale: "en" };
    const result = await super.find(ctx);

    result.data.sort((a,b) => (a.attributes.name).localeCompare(b.attributes.name)); 

    return result;
  },
}));
