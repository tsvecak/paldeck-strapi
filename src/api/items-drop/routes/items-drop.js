'use strict';

/**
 * items-drop router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::items-drop.items-drop', {
  config: {
    find: {
      middlewares: ['api::items-drop.items-list'],
    },
  },
 });
