const sample = `
## Chotu : URL Shortner

### Contents
1. [Overview](#overview)
2. [Basic-Architecture](#basic-architecture)
3. [Setup](#setup)
4. [Demo](#demo)
5. [Routes Used](#routes)
6. [TODO](#todo)





### Overview
---
+ This Web App is made to understand underlying funtionality of URL Shortner sevices from prototying to scalabilty point of view.
+ Watch this system design Youtube [video](https://www.youtube.com/watch?v=JQDHz72OA3c) for proper understanding of system
+ Tech stack used : [Bootsrap](https://getbootstrap.com/), [NodeJS](https://nodejs.org/en/), [MongoDB](https://www.mongodb.com/), [ExpressJS](https://expressjs.com/), [nanoid](https://www.npmjs.com/package/nanoid)
+ Work on progress.

### Basic-Architecture
---
![Architecture](https://user-images.githubusercontent.com/31367960/76006348-58245100-5f32-11ea-8e90-121a711fe4da.png)


### Setup
---
Before proceeding please download and install [NodeJS](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/download-center/community) because it is required.

1. Download/Clone the Repository
2. Navigate into the Repository folder on your disk using Terminal
3. Make sure that you have the Node and MongoDB installed
4. Run the following command to run the setup,\`npm install\`  
Now everything required should be installed, go ahead and run the following command whenever you want to run the app,
\`node index.js\`
##### The App would now be Up and Running on localhost:6700
    
    
### Demo
---
![Web App](https://user-images.githubusercontent.com/31367960/76006354-59557e00-5f32-11ea-8886-2fff79394513.gif)



### Routes
---

| Route  | Description | Signature |
| ------------- | ------------- | ------------- |
| /shorturl |(post) Takes full URL as input | Body: { \`url\`} |
| /:url |(get) pass shorturl as paramater  | Body: { \`shorturl\` |


| Command | Description |
| --- | --- |
| \`git status\` | List all *new or modified* files |
| \`git diff\` | Show file differences that **haven't been** staged |

## Todo
 ---
- [x] Basic prototyping
- [x] Copy to Clipboard
- [ ] Custom Naming
- [ ] Expiration period
- [ ] Add Redis for caching
- [ ] Changing short code algorithm and check duplicate short codes
- [ ] Make scalable
- helsdosd
`;


export default sample;