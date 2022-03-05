"""An AWS Python Pulumi program"""

import pulumi
from pulumi_aws import s3

bucket = s3.Bucket('tech-squawks-bucket')

pulumi.export('tech-squawks-bucket-id', bucket.id)
