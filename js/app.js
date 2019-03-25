const Header = React.createClass({
  render: function() {
    return <h1 className="title">{this.props.text}</h1>;
  }
});

const SearchBar = React.createClass({
  getInitialState: function() {
    return { searchKey: "" };
  },
  searchHandler: function(event) {
    const searchKey = event.target.value;
    this.setState({ searchKey: searchKey });
    this.props.searchHandler(searchKey);
  },
  render: function() {
    return (
      <input
        type="search"
        value={this.state.symbol}
        onChange={this.searchHandler}
      />
    );
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
      console.log(employee);
      return <EmployeeListItem key={employee.id} employee={employee} />;
    });
    return <ul>{items}</ul>;
  }
});

const HomePage = React.createClass({
  getInitialState: function() {
    return { employees: [] };
  },
  searchHandler: function(key) {
    this.props.service.findByName(key).done(
      function(result) {
        this.setState({ searchKey: key, employees: result });
      }.bind(this)
    );
  },
  render: function() {
    return (
      <div>
        <Header text="Employee Directory" />
        <SearchBar searchHandler={this.searchHandler} />
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
});

React.render(<HomePage service={employeeService} />, document.body);
