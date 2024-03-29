![COMMODEL Logo](https://github.com/breebrowder/COMMODEL/blob/main/readme_assets/brand-logo.png)
# COMMODEL
- [COMMODEL](#commodel)
  - [Usage](#usage)
  - [Technical Stack](#technical-stack)
  - [API](#api)
  - [Known issues](#known-issues)
  - [Authors](#authors)
    - [**Simon Sun**](#simon-sun)
    - [**Bree Browder**](#bree-browder)
    - [**Nikki Edmonds**](#nikki-edmonds)
    - [**Brian Kong**](#brian-kong)
  - [Resources](#resources)

<b>COMMODEL</b> is a full-stack MERN application that serves as an e-commerce platform which specializes in selling unique 3D/XR models to consumers that are tied to a story, while providing meaning and value with each purchase. Visit https://commodel.netlify.app/ to view the application and list of available products to purchase. 

[View Slide Deck Pitch](https://docs.google.com/presentation/d/1qHf8PprFeEAJv9dnbnPzH_ZRyZPB8qNeZUF6UC_e6lY/edit?usp=sharing)

## Usage
1. Run ``` git clone https://github.com/breebrowder/COMMODEL.git ```
2. Create your own <b>.env</b> file to store in /api directory. (Should contain MongoDB cluster string, JSON Web Token, and Stripe Key).
3. Open two terminal windows.
4. Run ``` npm install ``` in both the <b>/api</b> and <b>/client</b> directories to install all dependencies.
5. In the <b>/api</b> directory run command: ``` npm run start ```. If successfull, you should recieve the message below.

![DB Connect](https://github.com/breebrowder/COMMODEL/blob/main/readme_assets/db_connect.png)

6. In the <b>/client</b> directory run command: ``` npm run start ```. It should launch the application on localhost:3001.

| ⚠️ NOTE: Make sure to have the LTS versions of react, npm, and node  |
| --- |

### Preview Demo Here


[Youtube - Demo COMMODEL](https://www.youtube.com/embed/hk2TsUm4cWE)


## Technical Stack
- Client
  - <b>Languages</b>: React
  - <b>Frameworks</b>: Material UI, Styled Components
  - <b>Host</b>: AWS Cloud

- Server
  - <b>Runtime Environment</b>: Node.js
  - <b>Frameworks</b>: Express.js
  - <b>Database</b>: MongoDB
  - <b>Payment Processing</b>: Stripe

## API
View all documentation for <b>API</b> [here](https://documenter.getpostman.com/view/19797749/UzBgu9oW).

## Known issues
In the time given to complete this project, some issues discovered that will be updated in the future are: 
- Blockchain implementation
- Responsiveness - The application is currently suitable for desktop versions only
- Register/login functionality is temporarily disconnected from database, any username/password combination will work
- Product list stored in the backend of the application is not included in current deployment. Refer to Youtube demo for true website functionality.

## Resources
1. [React JS Docs](https://reactjs.org/docs/getting-started.html)

2. [Material UI Docs](https://mui.com/material-ui/getting-started/overview/)

3. [Styled Components Docs](https://styled-components.com/docs)

4. [Unity Docs](https://docs.unity3d.com/Manual/index.html)

5. [Blender Docs](https://docs.blender.org/)

6. [Node JS Docs](https://nodejs.org/en/docs/)

7. [MongoDB Docs](https://www.mongodb.com/docs/)

## Authors
### **Simon Sun**
:robot:: [GitHub](https://github.com/ssun97)

:pen:: [LinkedIn](https://www.linkedin.com/in/ssun97/)

### **Bree Browder**
:robot:: [GitHub](https://github.com/breebrowder)

:pen:: [LinkedIn](https://www.linkedin.com/in/breebrowder/)

### **Nikki Edmonds**
:robot:: [GitHub](https://github.com/NikkiE-dev)

:pen:: [LinkedIn](https://www.linkedin.com/in/nikki-edmonds-developer/)

### **Brian Kong**
:robot:: [GitHub](https://github.com/rkbrian)

:pen:: [LinkedIn](https://www.linkedin.com/in/ran-kong/)
