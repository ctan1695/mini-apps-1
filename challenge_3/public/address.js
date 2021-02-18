function Address(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Summary for Order #", props.currentOrderID.toString()), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("h2", null, "Please Enter your Address"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Address Line 1:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "addr1",
    id: "addr1",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Address Line 2:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "addr2",
    id: "addr2",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "City:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "city",
    id: "city",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "State:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "state",
    id: "state",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Zip Code:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "zip",
    id: "zip",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Phone Number:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "phone",
    id: "phone",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Next",
    onClick: e => {
      props.handleNextForAddress(e);
    }
  }))));
}

export default Address;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hZGRyZXNzLmpzeCJdLCJuYW1lcyI6WyJBZGRyZXNzIiwicHJvcHMiLCJjdXJyZW50T3JkZXJJRCIsInRvU3RyaW5nIiwiZSIsImhhbmRsZU5leHRGb3JBZGRyZXNzIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxPQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QixzQkFDRSw4Q0FDQSx1REFBd0JBLEtBQUssQ0FBQ0MsY0FBTixDQUFxQkMsUUFBckIsRUFBeEIsQ0FEQSxlQUdBLCtDQUNFLDREQURGLGVBRUUsOENBQ0UscURBREYsZUFFRTtBQUFPLElBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsSUFBQSxJQUFJLEVBQUMsT0FBeEI7QUFBZ0MsSUFBQSxFQUFFLEVBQUMsT0FBbkM7QUFBMkMsSUFBQSxRQUFRO0FBQW5ELElBRkYsQ0FGRixlQU9FLDhDQUNFLHFEQURGLGVBRUU7QUFBTyxJQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLElBQUEsSUFBSSxFQUFDLE9BQXhCO0FBQWdDLElBQUEsRUFBRSxFQUFDLE9BQW5DO0FBQTJDLElBQUEsUUFBUTtBQUFuRCxJQUZGLENBUEYsZUFZRSw4Q0FDRSwyQ0FERixlQUVFO0FBQU8sSUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixJQUFBLElBQUksRUFBQyxNQUF4QjtBQUErQixJQUFBLEVBQUUsRUFBQyxNQUFsQztBQUF5QyxJQUFBLFFBQVE7QUFBakQsSUFGRixDQVpGLGVBaUJFLDhDQUNFLDRDQURGLGVBRUU7QUFBTyxJQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLElBQUEsSUFBSSxFQUFDLE9BQXhCO0FBQWdDLElBQUEsRUFBRSxFQUFDLE9BQW5DO0FBQTJDLElBQUEsUUFBUTtBQUFuRCxJQUZGLENBakJGLGVBc0JFLDhDQUNFLCtDQURGLGVBRUU7QUFBTyxJQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLElBQUEsSUFBSSxFQUFDLEtBQXhCO0FBQThCLElBQUEsRUFBRSxFQUFDLEtBQWpDO0FBQXVDLElBQUEsUUFBUTtBQUEvQyxJQUZGLENBdEJGLGVBMkJFLDhDQUNFLG1EQURGLGVBRUU7QUFBTyxJQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLElBQUEsSUFBSSxFQUFDLE9BQXhCO0FBQWdDLElBQUEsRUFBRSxFQUFDLE9BQW5DO0FBQTJDLElBQUEsUUFBUTtBQUFuRCxJQUZGLENBM0JGLGVBZ0NFLDhDQUNFO0FBQU8sSUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixJQUFBLEtBQUssRUFBQyxNQUEzQjtBQUFrQyxJQUFBLE9BQU8sRUFBR0MsQ0FBRCxJQUFPO0FBQUNILE1BQUFBLEtBQUssQ0FBQ0ksb0JBQU4sQ0FBMkJELENBQTNCO0FBQThCO0FBQWpGLElBREYsQ0FoQ0YsQ0FIQSxDQURGO0FBMENEOztBQUVELGVBQWVKLE9BQWYiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBBZGRyZXNzIChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPGgzPlN1bW1hcnkgZm9yIE9yZGVyICN7cHJvcHMuY3VycmVudE9yZGVySUQudG9TdHJpbmcoKX08L2gzPlxuXG4gICAgPGZvcm0+XG4gICAgICA8aDI+UGxlYXNlIEVudGVyIHlvdXIgQWRkcmVzczwvaDI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgPkFkZHJlc3MgTGluZSAxOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJhZGRyMVwiIGlkPVwiYWRkcjFcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCA+QWRkcmVzcyBMaW5lIDI6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImFkZHIyXCIgaWQ9XCJhZGRyMlwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsID5DaXR5OjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgaWQ9XCJjaXR5XCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgPlN0YXRlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzdGF0ZVwiIGlkPVwic3RhdGVcIiByZXF1aXJlZD48L2lucHV0PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCA+WmlwIENvZGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInppcFwiIGlkPVwiemlwXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgPlBob25lIE51bWJlcjo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGhvbmVcIiBpZD1cInBob25lXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uQ2xpY2s9eyhlKSA9PiB7cHJvcHMuaGFuZGxlTmV4dEZvckFkZHJlc3MoZSl9fT48L2lucHV0PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRyZXNzO1xuXG4iXX0=