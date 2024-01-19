'use strict';

/**
 * `ele-list` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = {
      icon: {
        fields: ['name', 'alternativeText', 'caption', 'url'],
      },
    }

    await next();
  };
};
