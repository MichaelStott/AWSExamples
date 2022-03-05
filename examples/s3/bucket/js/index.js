"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

const bucket = new aws.s3.Bucket("tech-squawks-bucket");

exports.bucketName = bucket.id;
