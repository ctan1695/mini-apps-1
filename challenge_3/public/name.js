function Name(props) {
  console.log('props name: ', props.currentOrderID);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9uYW1lLmpzeCJdLCJuYW1lcyI6WyJOYW1lIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudE9yZGVySUQiLCJlIiwiaGFuZGxlTmV4dEZvck5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLElBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNwQkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkYsS0FBSyxDQUFDRyxjQUFsQztBQUNBLHNCQUNFLDhDQUNFLHNFQURGLGVBR0UsK0NBQ0UsOENBQ0UsMkNBREYsZUFFRTtBQUFPLElBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsSUFBQSxJQUFJLEVBQUMsTUFBeEI7QUFBK0IsSUFBQSxFQUFFLEVBQUMsTUFBbEM7QUFBeUMsSUFBQSxRQUFRO0FBQWpELElBRkYsQ0FERixlQU1FLDhDQUNFLDRDQURGLGVBRUU7QUFBTyxJQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLElBQUEsSUFBSSxFQUFDLE9BQXhCO0FBQWdDLElBQUEsRUFBRSxFQUFDLE9BQW5DO0FBQTJDLElBQUEsUUFBUTtBQUFuRCxJQUZGLENBTkYsZUFXRSw4Q0FDRSwrQ0FERixlQUVFO0FBQU8sSUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixJQUFBLElBQUksRUFBQyxVQUF4QjtBQUFtQyxJQUFBLEVBQUUsRUFBQyxVQUF0QztBQUFpRCxJQUFBLFFBQVE7QUFBekQsSUFGRixDQVhGLGVBZ0JFLDhDQUNFO0FBQU8sSUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixJQUFBLEtBQUssRUFBQyxNQUEzQjtBQUFrQyxJQUFBLE9BQU8sRUFBR0MsQ0FBRCxJQUFPO0FBQUNKLE1BQUFBLEtBQUssQ0FBQ0ssaUJBQU4sQ0FBd0JELENBQXhCO0FBQTJCO0FBQTlFLElBREYsQ0FoQkYsQ0FIRixDQURGO0FBMEJEOztBQUVELGVBQWVMLElBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBOYW1lIChwcm9wcykge1xuICBjb25zb2xlLmxvZygncHJvcHMgbmFtZTogJywgcHJvcHMuY3VycmVudE9yZGVySUQpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDM+RW50ZXIgeW91ciBOYW1lLCBFbWFpbCBhbmQgUGFzc3dvcmQ8L2gzPlxuXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsID5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCA+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uQ2xpY2s9eyhlKSA9PiB7cHJvcHMuaGFuZGxlTmV4dEZvck5hbWUoZSl9fT48L2lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYW1lO1xuXG4iXX0=