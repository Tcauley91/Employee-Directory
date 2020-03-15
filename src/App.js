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

  sortByNameAZ = e => {
    let name = [...this.state.employees];
    name.sort((a,b)=>{
      var nameA = a.name.toUpperCase(); 
      var nameB = b.name.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    })
    this.setState({employees: name})
  };

 sortbyLNameAZ = e => {
    let name = [...this.state.employees];

    name.sort((a,b)=>{

      let aFirst = a.name.split(" ");
      let bFirst = b.name.split(" ");
      let aLast = aFirst[aFirst.length -1];
      let bLast = bFirst[bFirst.length -1];

      if(aLast < bLast) return -1;
      if(aLast > bLast) return 1;
      return 0;
    })
    this.setState({employees: name})
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
                 <SortButton
                 sortByNameAZ={this.sortByNameAZ}
                 sortbyLNameAZ={this.sortbyLNameAZ}
                 >
                 </SortButton>
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
