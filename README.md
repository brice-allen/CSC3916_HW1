# Assignment One

### Purpose
The purpose of this assignment is to set up your GitHub and Heroku
instances for future assignments.

You will create a Postman collection and create a REST test within the
project. You will need to automate each test and include at least one
assert for each request in the validation.

### Requirements
* Sign-up for a free GitHub account: https://github.com/
    * Homework assignments will be stored on GitHub.
    * Create an individual repo: CSC3916_HW1
* Creat an ECHO server (from the lecture) 
* Setup Heroku to auto-deploy your application from your REPO CSC3916_HW1
* Create a PostMan request that posts a body value to your API
    * Create an environment variable \$echo_body for the body of the request
    * Assert (test) must include
        * Validating string sent is what is returned 
          (Use \$echo_body to validate against
          the response sent back from the server)
        * Response status code (e.g. 200)
        * Response time < 200ms
### Submissions
* All source code should be stored on github (remember .gitignore for the node_modules)
* API needs to be deployed to Heroku
* Create a README.md at the root of your github repository with the embedded(markdown) to your test collection
    * Within the collection click the (...), share collection &#8594; Embed
        * Static Button
        * Click update link
        * Include your environment settings
        * Copy to clipboard
    * Submit the URL to canvas with the REPO CSC3916_HW1
    * Note: All tests should be testing against your Heroku endpoint
### Resources
* [http://nodejs.org](http://nodejs.org)
* [http://www.passportjs.org/docs/basic-digest/](http://www.passportjs.org/docs/basic-digest/)
* [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)
* [https://devcenter.heroku.com/articles/config-vars](https://devcenter.heroku.com/articles/config-vars)
* [https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)


[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/98d4e2e0b09c450968a7#?env%5BCSCI-3916-hw-01%5D=W3sia2V5IjoiJGVjaG9fYm9keSIsInZhbHVlIjoiSGVsbG8gZnJvbSBQb3N0bWFuIGRlc2t0b3AiLCJlbmFibGVkIjp0cnVlfV0=)