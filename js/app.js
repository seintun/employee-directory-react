const Header = React.createClass({
  render: function() {
    return (
      <header className="bar bar-nav">
        <a
          href="#"
          className={
            "icon icon-left-nav pull-left" +
            (this.props.back === "true" ? "" : " hidden")
          }
        />
        <h1 className="title">{this.props.text}</h1>
      </header>
    );
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
      <div className="bar bar-standard bar-header-secondary">
        <input
          type="search"
          value={this.state.symbol}
          onChange={this.searchHandler}
        />
      </div>
    );
  }
});

const EmployeeListItem = React.createClass({
  render: function() {
    return (
      <li className="table-view-cell media">
        <a href={"#employees/" + this.props.employee.id}>
          <img
            className="media-object small pull-left"
            src={
              "pics/" +
              this.props.employee.firstName +
              "_" +
              this.props.employee.lastName +
              ".jpg"
            }
          />
          {this.props.employee.firstName} {this.props.employee.lastName}
          <p>{this.props.employee.title}</p>
        </a>
      </li>
    );
  }
});

const EmployeeList = React.createClass({
  render: function() {
    const items = this.props.employees.map(function(employee) {
      return <EmployeeListItem key={employee.id} employee={employee} />;
    });
    return <ul className="table-view">{items}</ul>;
  }
});

const HomePage = React.createClass({
  render: function() {
    return (
      <div>
        <Header text="Employee Directory" back="false" />
        <SearchBar
          searchKey={this.props.searchKey}
          searchHandler={this.props.searchHandler}
        />
        {/* create list like content */}
        <div className="content">
          <EmployeeList employees={this.props.employees} />
        </div>
      </div>
    );
  }
});

const EmployeePage = React.createClass({
  getInitialState: function() {
    return { employee: {} };
  },
  componentDidMount: function() {
    this.props.service.findById(this.props.employeeId).done(
      function(result) {
        this.setState({ employee: result });
      }.bind(this)
    );
  },
  render: function() {
    return (
      <div>
        <Header text="Employee" back="true" />
        <div className="card">
          <ul className="table-view">
            <li className="table-view-cell media">
              <img
                className="media-object big pull-left"
                src={
                  "pics/" +
                  this.state.employee.firstName +
                  "_" +
                  this.state.employee.lastName +
                  ".jpg"
                }
              />
              <h1>
                {this.state.employee.firstName} {this.state.employee.lastName}
              </h1>
              <p>{this.state.employee.title}</p>
            </li>
            <li className="table-view-cell media">
              <a
                href={"tel:" + this.state.employee.officePhone}
                className="push-right"
              >
                <span className="media-object pull-left icon icon-call" />
                <div className="media-body">
                  Call Office
                  <p>{this.state.employee.officePhone}</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a
                href={"tel:" + this.state.employee.mobilePhone}
                className="push-right"
              >
                <span className="media-object pull-left icon icon-call" />
                <div className="media-body">
                  Call Mobile
                  <p>{this.state.employee.mobilePhone}</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a
                href={"sms:" + this.state.employee.mobilePhone}
                className="push-right"
              >
                <span className="media-object pull-left icon icon-sms" />
                <div className="media-body">
                  SMS
                  <p>{this.state.employee.mobilePhone}</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a
                href={"mailto:" + this.state.employee.email}
                className="push-right"
              >
                <span className="media-object pull-left icon icon-email" />
                <div className="media-body">
                  Email
                  <p>{this.state.employee.email}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

const App = React.createClass({
  getInitialState: function() {
    return {
      searchKey: "",
      employees: [],
      page: null
    };
  },
  searchHandler: function(searchKey) {
    employeeService.findByName(searchKey).done(
      function(employees) {
        this.setState({
          searchKey: searchKey,
          employees: employees,
          page: (
            <HomePage
              searchKey={searchKey}
              searchHandler={this.searchHandler}
              employees={employees}
            />
          )
        });
      }.bind(this)
    );
  },
  componentDidMount: function() {
    router.addRoute(
      "",
      function() {
        this.setState({
          page: (
            <HomePage
              searchKey={this.state.searchKey}
              searchHandler={this.searchHandler}
              employees={this.state.employees}
            />
          )
        });
      }.bind(this)
    );

    router.addRoute(
      "employees/:id",
      function(id) {
        this.setState({
          page: <EmployeePage employeeId={id} service={employeeService} />
        });
      }.bind(this)
    );
    router.start();
  },
  render: function() {
    return this.state.page;
  }
});

React.render(<App />, document.body);
