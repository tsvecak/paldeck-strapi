'use strict';

/**
 * `pals-list` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = '*'

    await next();
  };
};
