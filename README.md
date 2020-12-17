
A sample company website built with Gatsby & Sanity.io
This examples combines Gatsby site generation with Sanity content management in a neat little company website. Read the blog post and see the getting started video.

Features
Installation
Enable Gatsby watch mode for drafts
Usage example
Development setup
Run it
Development workflow
Deployment
Contributing
License
Watch a video about the company website built with Gatsby using Sanity.io as a headless CMS

See the example up and running

Features
A company website built with Gatsby

📡 Real-time content preview in development
⏱ Fast & frugal builds
🗃 No accidental missing fields/types
🧰 Full Render Control with Portable Text
📸 gatsby-image support
🔧 Minimal configuration
Sanity Studio with a schema for

🏢 Company info
📃 Pages
👨🏼‍🎨 Projects
👩🏾‍💻 People
📰 Blog posts
Installation
Read the step-by-step blog post.

git clone git@github.com:sanity-io/example-company-website-gatsby-sanity-combo.git
cd example-company-website-gatsby-sanity-combo
npm install

# Install or upgrade the Sanity CLI to
# make sure you are on v0.140.0 or higher
npm install -g @sanity/cli
# Set up Sanity.io account and project (≈ 45s)
npm run init
See the getting started video for a walkthrough of the installation.

Enable Gatsby watch mode for drafts
We have enabled the watch mode in the gatsby-source-sanity plugin, which means that your frontend will automatically update with content changes whenever you publish them. If you want the frontend to show content changes in real time, you must do the following:

Go to manage.sanity.io and find your project (or run the command sanity manage in the studio folder)
Navigate to Settings->API and scroll down to the Tokens section
Add a new token and give it read privileges.
Copy the .env-example file to a file called .env in the /web folder
Add your new token to the key: SANITY_TOKEN="<token here>"
If you restart the local development server, it will now show unpublished changes from the Studio. Note that the .env file is ignored by Git, because the token gives access to unpublished content in the API.

Usage example
This project demos Sanity.io with Gatsby using our source plugin. It's a good starter for a simple company site, a portfolio site for an agency or a personal blog with an attached portfolio.

We tried to strike a balance between a useful example and a minimal footprint to make it easier to iterate on design and content model. Let us know should you have questions!

Development setup
Run it
npm start
# Studio at http://localhost:3333
# Web frontend at http://localhost:8000
# GraphiQL explorer at http://localhost:8000/___graphql
Development workflow
We wrote a blog post about how to use this example, but if you would like to just start tinkering:

The Sanity Studio keeps its schemas in ./studio/schemas. We will hot reload the editor when you edit them so just start experimenting. Read more about our schemas here.
We followed Gatsby conventions and you can read all about them here.
If you want Gatsby to not throw errors on missing fields for unpopulated data you need to redeploy the GraphQL API so we can generate schemas – npm run graphql-deploy
Deployment
# Deploy a GraphQL API and schema to Sanity
npm run graphql-deploy

# Deploy the Sanity Studio to *.sanity.studio
npm run sanity-deploy

# Build & deploy to Zeit's Now. Remember to set `basePath` to "/studio" in sanity.json
npm run now-deploy
Deploy on Netlify: If you want to deploy the Gatsby site to Netlify we added a netlify.toml config for you.

Fork or clone the example to your GitHub account. After adding your repo to Netlify you’ll get automatic builds & deploys when pushing to master. You can also add a webhook to get deploys on content changes.

Deploy on Cloudflare: If you want to deploy the Gatsby site to Cloudflare we added a wrangler.toml and workers-site/ to both studio and web.

Follow quickstart for wrangler: https://developers.cloudflare.com/workers/quickstart
Edit wrangler.toml's according to where you'd like studio and web to get deployed to
Run npm run worker-deploy
Contributing
Fork it
Create your feature branch (git checkout -b feature/fooBar)
Commit your changes (git commit -am 'Add some fooBar')
Push to the branch (git push origin feature/fooBar)
Create a new Pull Request
License
MIT
