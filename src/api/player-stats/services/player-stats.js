'use strict';

/**
 * player-stats service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::player-stats.player-stats');
