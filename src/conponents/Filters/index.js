import React, { useState } from "react";
import { Segment, Header, Button, Grid } from "semantic-ui-react";
import { getListOfYears } from "../../utils";
import { applyFilter } from "../../actions";
import { connect } from "react-redux";

const FilterArea = ({ applyFilter }) => {
  const [launchSuccess, setlaunchSuccess] =  useState();
  const [landSuccess, setLandSuccess] =  useState();
  const [ year, setYear ] =  useState("");
  const handleLaunch = (v) => {
    applyFilter({
      launch_year: year,
      launch_success: v,
      land_success: landSuccess,
    });
    return setlaunchSuccess(v);
  };
  const handleLand = (v) => {
    applyFilter({
      launch_year: year,
      launch_success: launchSuccess,
      land_success: v,
    });
    return setLandSuccess(v);
  };
  const handleYear = (v) => {
    applyFilter({
      launch_year: v,
      launch_success: launchSuccess,
      land_success: landSuccess,
    });
    return setYear(v);
  };
  return ( 
    <Segment stacked>
      <Header as="h4" icon="filter" textAlign="center" content="Launch Year" dividing />
      <Segment basic textAlign="center"  >
        <Grid columns={2}>
          {getListOfYears(2006, []).map((v) => {
            return (
              <Grid.Column key={v} style={{ marginTop :'0em' , marginBottom  :  '0em', padding :  '0.5em 0em 0em 0em'}}>
                <Button onClick={ () =>  {
                   return handleYear(v)}}  size="mini" color= {  v === year ? "orange" : "green" } content={v}  />
              </Grid.Column>
            );
          })}
        </Grid>
        </Segment>
      <Header as="h4" textAlign="center" dividing>
        {" "}
        Successful Launch{" "}
      </Header>
      <Segment basic textAlign="center" >
        <Grid columns={2}>
          {[ true,  false].map((v, k) => {
            return (
              <Grid.Column key={k} style={{ marginTop :'0em' , marginBottom  :  '0em', padding :  '0.5em 0em 0em 0em'}}>
                <Button  onClick={ () =>  {
                   return handleLaunch(v)}} size="mini" color={   v === launchSuccess  ? "orange"  : "green"} content={v ? "True" : "False" }  />
              </Grid.Column>
            );
          })}
        </Grid>
        </Segment>
      <Header as="h4" textAlign="center" dividing>
        {" "}
        Successful Landing{" "}
        
      </Header>
      <Segment basic textAlign="center" >
        <Grid columns={2}>
          {[true,  false].map((v, k) => {
            return (
              <Grid.Column  key={k} style={{ marginTop :'0em' , marginBottom  :  '0em', padding :  '0.5em 0em 0em 0em'}}>
                <Button onClick={ () =>  {
                   return handleLand(v)}} size="mini"  color={   v === landSuccess  ? "orange"  : "green"} content={v ? "True" : "False" } />
              </Grid.Column>
            );
          })}
        </Grid>
        </Segment>
    </Segment>
  );
};

export default connect(null, { applyFilter })(FilterArea);
