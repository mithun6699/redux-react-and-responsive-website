import React from "react";

import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
class CoursesPage extends React.Component {
  // no need to use constructor
  // constructor(props) {
  // super(props);
  // this.state{}
  state = {
    course: {
      title: "",
    },
    // };
    /*there is another method to this ,
    use arrow functions cuz arrow functions doesnot
     have this , and it inherits 
    /the binding  context of enclosing scope*/
    // this.handleChange = this.handleChange.bind(this);
  };
  handleChange = (event) => {
    // anything on right will matches the left
    const course = { ...this.state.course, title: event.target.value };
    // we can ommit right hand side
    // this.setState({ course: course });
    this.setState({ course });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // debugger;
    // alert(this.state.course.title);
    // lets call that ation here
    // dispatchh will give our actions
    this.props.dispatch(courseActions.createCourse(this.state.course));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h2> Add Course</h2>
        <input
          type="text"
          // onChange={this.handleChange.bind(this)}
          // thsi is another method
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input
          type="submit"
          value="save"
          // onClick={() => alert(this.state.course.title)}
          // just alerting teh course title
          // onClick={() => alert(this.state.course.title)}
        />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};
function mapStateToProps(state) {
  // debugger;
  return {
    courses: state.courses,
  };
}
// mapDispatchToProps;
export default connect(mapStateToProps)(CoursesPage);

// connects to reduc store
