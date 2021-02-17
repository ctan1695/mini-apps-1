function Payment(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Enter your Payment Information"), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Credit Card #:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "cc",
    id: "cc",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Expiry Date:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "exp",
    id: "exp",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "CVV:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "cicvvty",
    id: "cvv",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Billing Zip Code:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "zip",
    id: "zip",
    required: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Next",
    onClick: e => {
      props.handleNextForPayment(e);
    }
  }))));
}

export default Payment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9wYXltZW50LmpzeCJdLCJuYW1lcyI6WyJQYXltZW50IiwicHJvcHMiLCJlIiwiaGFuZGxlTmV4dEZvclBheW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE9BQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLHNCQUNFLDhDQUNBLGlFQURBLGVBR0EsK0NBQ0UsOENBQ0Usb0RBREYsZUFFRTtBQUFPLElBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsSUFBQSxJQUFJLEVBQUMsSUFBeEI7QUFBNkIsSUFBQSxFQUFFLEVBQUMsSUFBaEM7QUFBcUMsSUFBQSxRQUFRO0FBQTdDLElBRkYsQ0FERixlQU1FLDhDQUNFLGtEQURGLGVBRUU7QUFBTyxJQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLElBQUEsSUFBSSxFQUFDLEtBQXhCO0FBQThCLElBQUEsRUFBRSxFQUFDLEtBQWpDO0FBQXVDLElBQUEsUUFBUTtBQUEvQyxJQUZGLENBTkYsZUFXRSw4Q0FDRSwwQ0FERixlQUVFO0FBQU8sSUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixJQUFBLElBQUksRUFBQyxTQUF4QjtBQUFrQyxJQUFBLEVBQUUsRUFBQyxLQUFyQztBQUEyQyxJQUFBLFFBQVE7QUFBbkQsSUFGRixDQVhGLGVBZ0JFLDhDQUNFLHVEQURGLGVBRUU7QUFBTyxJQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLElBQUEsSUFBSSxFQUFDLEtBQXhCO0FBQThCLElBQUEsRUFBRSxFQUFDLEtBQWpDO0FBQXVDLElBQUEsUUFBUTtBQUEvQyxJQUZGLENBaEJGLGVBcUJFLDhDQUNFO0FBQU8sSUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixJQUFBLEtBQUssRUFBQyxNQUEzQjtBQUFrQyxJQUFBLE9BQU8sRUFBR0MsQ0FBRCxJQUFPO0FBQUNELE1BQUFBLEtBQUssQ0FBQ0Usb0JBQU4sQ0FBMkJELENBQTNCO0FBQThCO0FBQWpGLElBREYsQ0FyQkYsQ0FIQSxDQURGO0FBK0JEOztBQUVELGVBQWVGLE9BQWYiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBQYXltZW50IChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPGgzPkVudGVyIHlvdXIgUGF5bWVudCBJbmZvcm1hdGlvbjwvaDM+XG5cbiAgICA8Zm9ybT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCA+Q3JlZGl0IENhcmQgIzo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2NcIiBpZD1cImNjXCIgcmVxdWlyZWQ+PC9pbnB1dD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgPkV4cGlyeSBEYXRlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJleHBcIiBpZD1cImV4cFwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsID5DVlY6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpY3Z2dHlcIiBpZD1cImN2dlwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsID5CaWxsaW5nIFppcCBDb2RlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ6aXBcIiBpZD1cInppcFwiIHJlcXVpcmVkPjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIiBvbkNsaWNrPXsoZSkgPT4ge3Byb3BzLmhhbmRsZU5leHRGb3JQYXltZW50KGUpfX0+PC9pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGF5bWVudDtcblxuIl19