import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // count: 0,
      // count1: 1,
      userInfo:{
        name:"dummy name",
        location:"dummy location"
      }
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/barnali-sen-tech");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo:json
    })
  }

  componentDidUpdate(){

  }
  componentWillUnmount(){
    
  }

  render() {
    // const { name, location } = this.props;
    // const { count, count1 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact:xyz</h4>
        {/* <h3>
          {count}&{count1}
        </h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click
        </button> */}
      </div>
    );
  }
}

export default UserClass;
