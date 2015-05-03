/**
 * @module errors/index
 * @description Errors Bootstrap
 */

'use strict';

module.exports = {
    EmptyGAResultsSet: require('./errors/emptyGAResultsSet'),
    NotFound: require('./errors/notFound'),
    BadRequest: require('./errors/badRequest'),
    FoundDependentDocument: require('./errors/foundDependentDocument'),
    Unauthorized: require('./errors/unauthorized')
};
