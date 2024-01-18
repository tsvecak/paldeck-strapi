'use strict';

/**
 * pal controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::pal.pal',
  () => ({
    async find(ctx) {
      ctx.query = { ...ctx.query, locale: "en" };
      const result = await super.find(ctx);

      console.log(result);
      result.data.sort((a,b) => ("" + a.attributes.number).localeCompare(b.attributes.number, undefined, {numeric: true})); 

      return result;
    },
  })
);