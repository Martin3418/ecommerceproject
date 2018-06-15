import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
//import { mapStateToProps } from "../../store/product/selectors";
import { basketHandler } from "../../store/basket/handlers";
import './../../App.css';
import './../../categorie.css';
import _ from "underscore";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "categories": []
    }
  }

  componentDidMount() {
      fetch("https://decath-product-api.herokuapp.com/categories")
        .catch((error) => {
          console.warn(error);
        })
        .then((response) => response.json())
        .then((resp) => {
          this.setState({"categories": resp})
          //console.log(resp);
        })
  }

  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-6 col-sm-4"></div>
          <div className="col-6 col-sm-4">Categories</div>
          <div className="col-6 col-sm-4"></div>

        </div>
        <div className="row">
          {_.sortBy(this.state.categories, "label").map((element) =>
            <div key={element.id} className="col-6 col-sm-4 card">
              <div className="card-body">
                <Link to={`/categories/${element.id}/products`}>{element.label}</Link>
              </div>
            </div>
          )}

        </div>

      </div>

    );
  }
}

const Connected = connect(null, basketHandler)(Categories);
export default Connected;
