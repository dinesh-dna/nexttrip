# nexttrip
NextTrip Metrotransit case study

Model URl : 

### Structure
src/ contains the app code.<br>
  
  For React UI Code: <br>
      - Feature based architecture approach. <br>
      - Every page is inside src/Pages, componets used inside the page is placed inside the page folder itself.<br>
      - Reusable components in src/components<br>
      - Each page has styles.js that uses styled-components<br>
      - src/utils has all the utils functions.<br>
  <br>
  For Redux code:<br>
      <span>* src/Ducks -> used Ducks based architecute. All Redux code is in src/Ducks</span><br>
      - Each API call has its own Actions and Reducers. <br>
      - src/Ducks/index.js has api calls are integrated in. <br>
      - src/Store has redux store. That servers as single source of truth for all API response.<br>

  ### Tests: 
      - Unit test for each component is placed next to the component with component.spec.js filename.<br>
      - Jest and Enzyme for Unit test.<br>
      - Automated Functional test using Cypress.io <br>

  ### Packages
      * Bootstrap 4 and React-Bootstrap is used for design and style the app.<br>
      * React-bootstrap/table is used for listing table information.<br>
      * Layout the APP based on GRID system and used flex box inside whenever necessary.<br>
      * redux-saga as middleware to handle API calls, <br>
      * Axios to connect and retrieve data from API.<br>
      * Create-react-app is used as boiler plate framework.<br>
  
### Node Version

    nvm use 8.10.0 -> version is used while creation of this project
   
### Commands
    yarn -> to Download all the necessary packages.
    yarn start -> to run in local , url : http://localhost:3000
    yarn test a -> to run all tests
    yarn build -> Builds the app for production to the `build` folder.

    
  
  

