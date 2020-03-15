import React, { Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import SortButton from "./components/Button";

class App extends Component {
  // Setting this.state.employees to the employees json array
  constructor(props){
  super(props);
  this.state = {
    searchString: "",
    employees: []
  };
  this.handleInputChange = this.handleInputChange.bind(this);
  this.sortByNameAZ = this.sortByNameAZ.bind(this);
    this.sortByNameZA = this.sortByNameZA.bind(this);
}

  componentDidMount(){
    this.setState({
      employees: employees
    });
    this.refs.search.focus();
  }
    // Getting the value and name of the input which triggered the change

  handleInputChange = event => {
      console.log(event.target.value);
     this.setState({
       searchString: this.refs.search.value
     });
  };

  // Sort names A-Z & Z-A
  
  sortByNameAZ() {
    this.setState(prevState => {
      this.state.employee.sort((a, b) => (employees.name < employees.name))
      return 1;
  });
  }

  sortByNameZA() {
    this.setState(prevState => {
      this.state.employee.sort((a, b) => (employees.name > employees.name))
      return -1;
  });
  }


  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render() {
    let _employees = this.state.employees;
    let search = this.state.searchString.trim().toLowerCase();
      if(search.length >0){
        _employees = _employees.filter(function(employee){
          return employee.name.toLowerCase().match(search);
        });
      }
    return (
      <Wrapper>
           <input
                   type="text"
                   value={this.state.searchString}
                   ref="search"
                   onChange={this.handleInputChange}
                   placeholder="type name here"
                 />
                 <SortButton></SortButton>
        <Title>Employee Directory</Title>
        {_employees.map(employee => (
          <FriendCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            occupation={employee.occupation}
            Contact={employee.Contact}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
