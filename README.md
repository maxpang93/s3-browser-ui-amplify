# Use AWS Amplify React Component for S3 browsing

## Background:
Cannot use free, open-source software that requires enterprise license. Trying to hack together a Frontend to view S3 objects.

## Pre-requisite:
1. Ensure AWS Access Key ID and Secret Access Key has permission for the S3 bucket (see `.env.example`)
2. Make sure S3 bucket CORS is configure. Go to AWS Console -> S3 Bucket -> Permission -> CORS and paste this:
```json
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "GET",
            "PUT",
            "POST",
            "DELETE",
            "HEAD"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [
            "ETag"
        ]
    }
]
```
3. Fill up `.env` file from `.env.example`. For AWS Account ID, use the following AWS CLI command:
```bash
$ aws sts get-caller-identity
{
    "UserId": "USER_ID",
    "Account": "ACCOUNT_ID",
    "Arn": "IAM_ARN"
}
```

## For dev (hot reload)
```bash
npm run dev
```
