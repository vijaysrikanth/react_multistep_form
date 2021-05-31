import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
        
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values :{firstName, lastName, email, occupation, city,bio}} = this.props;
        return( 
            <MuiThemeProvider>
               <React.Fragment>
                   <AppBar  title = "Enter Personal Details"/>
                   <List>
                       <ListItem
                       primaryText = "First Name"
                       secondaryText = {firstName}
                       />
                       <br/>
                       <ListItem
                       primaryText = "Last Name"
                       secondaryText = {lastName}
                       />
                       <br/>
                       <ListItem
                       primaryText = "Email"
                       secondaryText = {email}
                       />
                       <br/>
                       <ListItem
                       primaryText = "Occupation"
                       secondaryText = {occupation}
                       />
                       <br/>
                       <ListItem
                       primaryText = "City"
                       secondaryText = {city}
                       />
                       <br/>
                       <ListItem
                       primaryText = "Bio"
                       secondaryText = {bio}
                       />
                   </List>
                   
                   <RaisedButton
                   label="Confirm & Continue"
                   primary={true}
                   onClick = {this.continue}
                   />
                   
                   <RaisedButton
                   label="Back"
                   primary={true}
                   onClick = {this.back}
                   
                   />
                   

                  
               </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Confirm;
