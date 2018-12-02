import React, {Component} from 'react';
class FormError extends Comment{
    render(){
        const {errorMessage}=this.props;
        return(
            <div>
                 <h2 className='ui teal center aligned header'>
                 {errorMessage}
                </h2>
            </div>
        );

    }
  }
  export default FormError;