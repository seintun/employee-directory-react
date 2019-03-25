const Header = React.createClass({
  render: function(){
    return(
      <h1 className="title">{this.props.text}</h1>
    );
  }
});

const SearchBar = React.createClass({
  render: function(){
    return (
      <input type="search" />    
    );
  }
});

const EmployeeList = React.createClass({
  render: function(){
    return (
      <ul>
        <li>Sein Tun</li>
        <li>John Smith</li>
      </ul>
    );
  }
});

const HomePage = React.createClass({
  render: function(){
    return (
      <div>
        <Header text="Employee Directory"/>
        <SearchBar />
        <EmployeeList />
      </div>
    );
  }
});

React.render(
  <HomePage />,
  document.body
);