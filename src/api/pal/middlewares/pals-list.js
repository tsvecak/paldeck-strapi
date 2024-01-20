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
        fields: ['name','slug', 'color'],
        populate: {
          icon: {
            fields: ['name', 'alternativeText', 'caption', 'url'],
          }
        }
      },
      partner_skills: {
        fields: ['name', 'slug', 'description'],
        populate: {
          icon: {
            fields: ['name', 'alternativeText', 'caption', 'url'],
          }
        }
      },
      work_suitabilities: {
        fields: ['name', 'slug', 'description'],
        populate: {
          icon: {
            fields: ['name', 'alternativeText', 'caption', 'url'],
          }
        }
      },
      items_drops: {
        fields: ['name', 'slug', 'description'],
        populate: {
          icon: {
            fields: ['name', 'alternativeText', 'caption', 'url'],
          }
        }
      },
      habitat: {
        fields: ['name', 'alternativeText', 'caption', 'url'],
      },
    }

    await next();
  };
};
