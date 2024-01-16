'use strict';

/**
 * `pals-list` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = {
      model: {
        fields: ['name', 'alternativeText', 'caption', 'url'],
      },
      elements: {
        fields: ['name', 'color'],
        populate: {
          icon: {
            fields: ['name', 'alternativeText', 'caption', 'url'],
          }
        }
      },
    }

    await next();
  };
};
