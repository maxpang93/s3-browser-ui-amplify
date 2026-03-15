import { createStorageBrowser } from "@aws-amplify/ui-react-storage/browser";
import "@aws-amplify/ui-react-storage/styles.css";

const region = import.meta.env.VITE_AWS_REGION
const accountId = import.meta.env.VITE_ACCOUNT_ID
const accessKeyId = import.meta.env.VITE_AWS_ACCESS_KEY_ID
const secretAccessKey = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY
const bucket = import.meta.env.VITE_S3_BUCKET

export const { StorageBrowser } = createStorageBrowser({
  config: {
    region: region,
    accountId: accountId,

    listLocations: async () => {
      return {
        items: [
          {
            id: "bucket1",
            bucket: bucket,
            prefix: "",
            type: "BUCKET",
            permissions: ["list", "get", "write", "delete"]
          }
        ],
        nextToken: undefined
      };
    },

    getLocationCredentials: async () => {
      return {
        credentials: {
          accessKeyId: accessKeyId,
          secretAccessKey: secretAccessKey,
          sessionToken: "",
          expiration: new Date(Date.now() + 3600 * 1000)
        }
      };
    },

    registerAuthListener: () => {}
  }
});