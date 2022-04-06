# Demo frontend Pact example project using Mocha

This example is a really simple demonstration of the use of Pact in Mocha tests.

Places where you need to make changes are marked with TODO comments

To run the tests:

```console
npm install
npm test
```

The important files in this project:

`demo-frontend.js` - This is the consumer code that will access your provider. You should replace this 
with your actual consumer code.

`test/demo-frontend.spec.js` - This is the Pact consumer test that invokes the consumer code.

## Publishing the pact file

Running the tests ( if they pass ;-) ) will generate a pact file `pacts/demo_frontend-demo_backend.json`.
You can publish this to your broker by running `npm run test:publish`.

Before publishing replace <<PACT_BROKER_URL>> in `test/publish.js` with yours pact broker url.

Generally, you would do this from your CI server.


**REMEMBER to set the PACTFLOW_TOKEN environment variable with a valid token before running this!**

  
The script in `test/publish.js` needs to be updated to set the correct version and branch environment variables
for your CI system.
