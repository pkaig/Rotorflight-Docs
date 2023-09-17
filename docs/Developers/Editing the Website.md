---
sidebar_position: 70
---

# Editing the Website

Website is built using Docusaurus

# Adding a new page
Duplicate a current page. Open the Markdown (.MD) file in an Editor. At the top of the file change the Sidebar_Position to position your new page where you wish it to be in the sidebar. The current pages are numbered with a spacing of 10 so there are free spaces for new pages. 

# Run the development server
Run the development server using the command -> `npm start`. This will open your web browser at "http://localhost:3000/" to view your current site. Each each time you 'save' one of your files the local instance will be updated and is visible imediately. 

# Run the local server. 
After you have completed your changes view them on the local server. This version is different to the development server but is the version that will be published. Some of the formatting is displayed differently such as the nav bar (Its frustrating me and I need to work out why) 
Build the static website files -> `npm run build`

Run the local server instance of the website -> `npm run serve`

The website will again be viewable from the browser at "http://localhost:3000/" however it will no longer change dynamically when you save further files.  

# Deploying
If you have not already done so build the static files -> `npm run build`

Push these files to the github pages site. On remote push to the 'gh-pages' branch the website is updated.  
`GIT_USER=(username here) DEPLOYMENT_BRANCH=gh-pages yarn deploy`


