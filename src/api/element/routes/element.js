'use strict';

/**
 * element router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::element.element', {
  config: {
    find: {
      middlewares: ['api::element.ele-list'],
    },
  },
 });
