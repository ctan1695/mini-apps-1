function Name(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Enter your Name, Email and Password"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Email:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "email",
    id: "email",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Password:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "password",
    id: "password",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Next",
    onClick: e => {
      props.handleNextForName(e);
    }
  }))));
}

export default Name;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9uYW1lLmpzeCJdLCJuYW1lcyI6WyJOYW1lIiwicHJvcHMiLCJlIiwiaGFuZGxlTmV4dEZvck5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLElBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNwQixzQkFDRSw4Q0FDRSxzRUFERixlQUdFLCtDQUNFLDhDQUNFLDJDQURGLGVBRUU7QUFBTyxJQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLElBQUEsSUFBSSxFQUFDLE1BQXhCO0FBQStCLElBQUEsRUFBRSxFQUFDLE1BQWxDO0FBQXlDLElBQUEsUUFBUTtBQUFqRCxJQUZGLENBREYsZUFNRSw4Q0FDRSw0Q0FERixlQUVFO0FBQU8sSUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixJQUFBLElBQUksRUFBQyxPQUF4QjtBQUFnQyxJQUFBLEVBQUUsRUFBQyxPQUFuQztBQUEyQyxJQUFBLFFBQVE7QUFBbkQsSUFGRixDQU5GLGVBV0UsOENBQ0UsK0NBREYsZUFFRTtBQUFPLElBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsSUFBQSxJQUFJLEVBQUMsVUFBeEI7QUFBbUMsSUFBQSxFQUFFLEVBQUMsVUFBdEM7QUFBaUQsSUFBQSxRQUFRO0FBQXpELElBRkYsQ0FYRixlQWdCRSw4Q0FDRTtBQUFPLElBQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsSUFBQSxLQUFLLEVBQUMsTUFBM0I7QUFBa0MsSUFBQSxPQUFPLEVBQUdDLENBQUQsSUFBTztBQUFDRCxNQUFBQSxLQUFLLENBQUNFLGlCQUFOLENBQXdCRCxDQUF4QjtBQUEyQjtBQUE5RSxJQURGLENBaEJGLENBSEYsQ0FERjtBQTBCRDs7QUFFRCxlQUFlRixJQUFmIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTmFtZSAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPkVudGVyIHlvdXIgTmFtZSwgRW1haWwgYW5kIFBhc3N3b3JkPC9oMz5cblxuICAgICAgPGZvcm0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsID5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCA+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIiBvbkNsaWNrPXsoZSkgPT4ge3Byb3BzLmhhbmRsZU5leHRGb3JOYW1lKGUpfX0+PC9pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmFtZTtcblxuIl19