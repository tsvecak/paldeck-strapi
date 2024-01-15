'use strict';

/**
 * pal router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::pal.pal', {
  config: {
    find: {
      middlewares: ['api::pal.pals-list'],
    },
  },
 });
