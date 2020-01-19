import React from "react";

const data = [
  { name: "Ogbinaka Emmanuel", avatar_url: "#", company: "Facebook", id: 14 },
  { name: "Ogbinaka Efe", avatar_url: "#", company: "Facebook", id: 15 },
  { name: "Daniel Amromanor", avatar_url: "#", company: "Facebook", id: 41 },
  { name: "Atufe Rukevwe", avatar_url: "#", company: "Facebook", id: 17 }
];

const CardList = props => (
  <>
    {props.profiles.map(p => (
      <Card {...p} key={p.id} />
    ))}
  </>
);

class Form extends React.Component {
  render() {
    return (
      <div className="forms">
        <form>
          <input type="text" placeholder="Github username here" />
          <button>Add New Card</button>
        </form>
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    let profile = this.props;
    return (
      <div className="details">
        <img src={profile.avatar_url} alt={`avatar here`} />
        {profile.name} <br />
        {profile.company}
      </div>
    );
  }
}

const Footer = () => (
  <div className='footer'>Footer section here!! &copy; {new Date().getFullYear()}</div>
);

class App extends React.Component {
  render() {
    return (
      <>
      <h1 className='header' align= 'center'>{this.props.title}</h1>
        <Form />
        <CardList profiles={data} />
        <Footer />
      </>
    );
  }
}

export default App;