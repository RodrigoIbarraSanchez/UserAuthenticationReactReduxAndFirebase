import "./styles.css";

export const AppContentScreen = () => {
  return (
    <>
      <div class="jumbotron">
        <h1 class="display-4">
          User Authentication With React JS, Redux And Firebase
        </h1>
        <p class="lead">
          This project was developed to have a faster development of any React
          app that needs user handling with a basic error handling on screen
          using Sweet Alert 2.
        </p>
        <br />
        <h2>Features:</h2>
        <ul>
          <li>Sidebar</li>
          <li>SASS styles.</li>
          <li>Redux.</li>
          <li>Dispatch to Store.</li>
          <li>Firebase and Firestore implementation.</li>
          <li>Thunk Middleware.</li>
          <li>Google and Email Sign-in.</li>
          <li>User Sign-in form and screen.</li>
          <li>Error handling forms.</li>
          <li>uiReducer and actions.</li>
          <li>useSelector (information of the state).</li>
          <li>Create user with Email and Password.</li>
          <li>User login with Email and Password.</li>
          <li>Global State loading (while waiting for Firebase response).</li>
          <li>Keeping Authentication State on refresh.</li>
          <li>Firebase Logout.</li>
          <li>
            Public and Private Routes (verify if user is authenticated or not).
          </li>
          <li>Error messages with Sweet Alert 2.</li>
          <li>And more...</li>
        </ul>
        <h2>Developed with ❤️ by Rodrigo Ibarra</h2>
      </div>
    </>
  );
};
