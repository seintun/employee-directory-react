const Header = React.createClass({
  render: function() {
    return <h1 className="title">{this.props.text}</h1>;
  }
});

const SearchBar = React.createClass({
  render: function() {
    return <input type="search" />;
  }
});

const EmployeeListItem = React.createClass({
  render: function() {
    return (
      <li>
        <a href={"#employees/" + this.props.employee.id}>
          {this.props.employee.firstName}
          {this.props.employee.lastName}
        </a>
      </li>
    );
  }
});

const EmployeeList = React.createClass({
  render: function() {
    const items = this.props.employees.map(function(employee) {
      console.log(employee)
      return <EmployeeListItem key={employee.id} employee={employee} />;
    });
    return <ul>{items}</ul>;
  }
});

const HomePage = React.createClass({
  render: function() {
    const employees = [
      { firstName: "Sein", lastName: "Tun" },
      { firstName: "Super", lastName: "Gopher" },
      { firstName: "John", lastName: "Smith" }
    ];
    return (
      <div>
        <Header text="Employee Directory" />
        <SearchBar />
        <EmployeeList employees={employees} />
      </div>
    );
  }
});

React.render(<HomePage />, document.body);
