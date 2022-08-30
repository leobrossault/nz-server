'use strict';

/**
 * all-article service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-article.all-article');
