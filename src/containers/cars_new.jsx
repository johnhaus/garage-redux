import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

// import Aside from '../components/aside';
import { addCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.addCar(this.props.garage, values, () => {
      this.props.history.push('/');
    });
  }

  render () {
    return [
      // <Aside key="aside" garage={this.props.garage}>
        // <Link to='/'>Back to list</Link>
      // </Aside>,
      <div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/form.jpg')" }}>
        <div className="overlay"></div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label htmlFor="ImputBrand">Brand</label>
            <Field name="brand" type="text" placeholder="Aston Martin" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="ImputModel">Model</label>
            <Field name="model" type="text" placeholder="DB Mark III" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="ImputOwner">Brand</label>
            <Field name="owner" type="text" placeholder="James Bond" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="ImputPlate">Brand</label>
            <Field name="plate" type="text" placeholder="DB Mark III" component="input" className="form-control" />
          </div>
          <button type="submit">Add car</button>
        </form>
      </div>
    ];
  }
};

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({
  form: 'newCarForm'
})(
  connect(mapStateToProps, { addCar })(CarsNew)
);
