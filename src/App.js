import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Signupscreen } from './auth/student_login';
import { Adminlogin } from './auth/admin_login';
import { Adminpage } from './pages/adminpage';
import { Addstudent } from './pages/add_students';
import { Addbooks } from './pages/add_books';
import { Adminprofile } from './pages/admin_profile';
import { Studentpage } from './pages/student_page';
import { Studentprofile } from './pages/student_profile';
import { Feedbackpage } from './pages/feedback_page';
import { Todaybookrequest } from './pages/today_bookrequest';
import { Issuebook } from './pages/issue_book';
import { Yourbooks } from './pages/your_books';
import { Notificationpage } from './pages/notification_page';
import { Fineupdate } from './pages/fine_update';
import { Viewfeedback } from './pages/view_feedback';
import { Retrieveissuedbook } from './pages/retrieve_issuedbook';
import { Deletebooks } from './pages/delete_books';
import { Studentrecord } from './pages/student_info';
import { Retrievefine } from './pages/retrieve_fine';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Signupscreen />
          </Route>
          <Route exact path="/signup">
            <Signupscreen />
          </Route>
          <Route exact path="/admin">
            <Adminlogin />
          </Route>
          <Route exact path="/adminpage">
            <Adminpage />
          </Route>
          <Route exact path="/addstudent">
            <Addstudent />
          </Route>
          <Route exact path="/addbooks">
            <Addbooks />
          </Route>
          <Route exact path="/adminprofile">
            <Adminprofile />
          </Route>
          <Route exact path="/studentpage">
            <Studentpage />
          </Route>
          <Route exact path="/studentprofile">
            <Studentprofile />
          </Route>
          <Route exact path="/feedbackpage">
            <Feedbackpage />
          </Route>
          <Route exact path="/todaybookrequest">
            <Todaybookrequest />
          </Route>
          <Route exact path="/issuebook">
            <Issuebook />
          </Route>
          <Route exact path="/yourbooks">
            <Yourbooks />
          </Route>
          <Route exact path="/notificationpage">
            <Notificationpage />
          </Route>
          <Route exact path="/fineupdate">
            <Fineupdate />
          </Route>
          <Route exact path="/viewfeedback">
            <Viewfeedback />
          </Route>
          <Route exact path="/retrieveissuedbook">
            <Retrieveissuedbook />
          </Route>
          <Route exact path="/deletebooks">
            <Deletebooks />
          </Route>
          <Route exact path="/studentrecord">
            <Studentrecord />
          </Route>
          <Route exact path="/retrievefine">
            <Retrievefine />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
