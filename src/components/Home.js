import React from "react";
import { connect } from "react-redux";

function Home({ user }) {
  return (
    <div className="home-container">
      <h1>Welcome {user.username.toUpperCase()}</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps())(Home);
