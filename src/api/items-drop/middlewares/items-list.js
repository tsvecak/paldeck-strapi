'use strict';

/**
 * items-list controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = {
      pals: {
        fields: ['name', 'slug', 'number'],
        populate: {
          model: {
            fields: ['name', 'alternativeText', 'caption', 'url'],
          },
          elements: {
            fields: ['name','slug', 'color'],
            populate: {
              icon: {
                fields: ['name', 'alternativeText', 'caption', 'url'],
              }
            }
          },
        }
      },
    }

    await next();
  };
};
