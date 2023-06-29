/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* eslint-env node */

const fetch = require( 'node-fetch' );

const {
	INTEGRATION_CI_ORGANIZATION,
	INTEGRATION_CI_REPOSITORY,
	TRAVIS_EVENT_TYPE,
	TRAVIS_BRANCH,
	INTEGRATION_CI_CIRCLE_CI_TOKEN
} = process.env;

/**
 * This script triggers Travis that verifies whether projects that depend on CKEditor 5 build correctly.
 *
 * In order to integrate the action in a new repository, you need add a few secrets in the new repository.
 *   - INTEGRATION_CI_ORGANIZATION - a name of the organization that keeps the repository where the build should be triggered
 *   - INTEGRATION_CI_REPOSITORY - a name of the repository where the build should be triggered
 *   - INTEGRATION_CI_TRAVIS_TOKEN - an authorization token generated by Travis CLI: `travis --pro token`
 *
 * @param {String} repository A slug of repository that triggers a new build.
 * @param {String} lastCommit A hash of latest commit.
 * @returns {Object} Travis API response as JSON.
 */
module.exports = function triggerCkeditor5ContinuousIntegration( repository, lastCommit ) {
	// We want to trigger the integration build when current build was triggered by push commit or API call.
	if ( TRAVIS_EVENT_TYPE !== 'push' && TRAVIS_EVENT_TYPE !== 'api' ) {
		return;
	}

	// Trigger the integration build only when checking the "master" branch in the repository.
	if ( TRAVIS_BRANCH !== 'master' ) {
		return;
	}

	const requestUrl =
		`https://circleci.com/api/v2/project/github/${ INTEGRATION_CI_ORGANIZATION }/${ INTEGRATION_CI_REPOSITORY }/pipeline`;
	const requestOptions = {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Circle-Token': INTEGRATION_CI_CIRCLE_CI_TOKEN
		},
		body: JSON.stringify( {
			branch: 'master',
			properties: {
				triggeringRepository: repository,
				triggeringCommit: lastCommit
			}
		} )
	};

	return fetch( requestUrl, requestOptions )
		.then( res => res.json() );
};
