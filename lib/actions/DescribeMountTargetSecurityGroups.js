/**
 * Auto-generated action file for "Amazon Elastic File System" API.
 *
 * Generated at: 2019-05-07T08:15:53.929Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / amazonaws-com-elasticfilesystem-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'DescribeMountTargetSecurityGroups'
 * Endpoint Path: '/2015-02-01/mount-targets/{MountTargetId}/security-groups'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "MountTargetId",
    "Version",
    "X-Amz-Content-Sha256",
    "X-Amz-Date",
    "X-Amz-Algorithm",
    "X-Amz-Credential",
    "X-Amz-Security-Token",
    "X-Amz-Signature",
    "X-Amz-SignedHeaders"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "MountTargetId": "MountTargetId",
    "Version": "Version",
    "X_Amz_Content_Sha256": "X-Amz-Content-Sha256",
    "X_Amz_Date": "X-Amz-Date",
    "X_Amz_Algorithm": "X-Amz-Algorithm",
    "X_Amz_Credential": "X-Amz-Credential",
    "X_Amz_Security_Token": "X-Amz-Security-Token",
    "X_Amz_Signature": "X-Amz-Signature",
    "X_Amz_SignedHeaders": "X-Amz-SignedHeaders",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['hmac'] = cfg['hmac'];

    let callParams = {
        spec: spec,
        operationId: 'DescribeMountTargetSecurityGroups',
        pathName: '/2015-02-01/mount-targets/{MountTargetId}/security-groups',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}