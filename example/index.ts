import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// 
const api = new awsx.apigateway.API("serverlesspartyparrot", {
    routes: [{
        path: "/",
        method: "GET",
        eventHandler: new aws.lambda.CallbackFunction("handler", {
            memorySize: 256,
            callback: async (event) => {
                return {
                    statusCode: 200,
                    headers: {"Content-Type": "text/html"},
                    body: '<img src="https://cultofthepartyparrot.com/parrots/hd/parrot.gif" class="lazy" data-src="/parrots/hd/parrot.gif" alt="Parrot">',
                };
            },
        }),
    }],
})

export const url = api.url;