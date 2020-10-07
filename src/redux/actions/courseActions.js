// it creates an action
export function createCourse(course) {
  // debugger;
  // object short hand syntax,removing rigt hhand side
  //   so that it matches left hand side
  return { type: "CREATE_COURSE", course: course };
}
