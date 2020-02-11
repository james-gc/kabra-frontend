import React from "react";
import { connect } from "react-redux";
import { fetchGithubData } from "../reducers/products/actions";

function GithubData({ data, fetch }) {
  React.useEffect(() => {
    fetch();
  }, [ ]);

  if (!data) {
    return <div>No Data</div>;
  }

  return (
    <div>
      <div>Name: {data.name}</div>
      <br />
      <div>Blog: {data.blog}</div>
      <br />
      <div>Github Followers: {data.followers}</div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log("githubData :: MSTP :: state", state);
  return {
    data: state.products
  };
};

const mapDispatchToProps = {
  fetch: fetchGithubData
};

export default connect(mapStateToProps, mapDispatchToProps)(GithubData);
