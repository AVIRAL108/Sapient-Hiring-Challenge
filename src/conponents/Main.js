import React from "react";
import {
  Grid,
  Segment,
  Menu,
  Progress,
  Loader,
  Icon,
} from "semantic-ui-react";
import Launches from "./Launches";
import FilterArea from "./Filters";
import { connect } from "react-redux";

const Main = ({ loading }) => {
  return (
    <React.Fragment>
      <Menu fixed="top" inverted>
        <Menu.Item header>SpaceX Launch Programs</Menu.Item>
      </Menu>
      <Grid padded>
        <Grid.Column computer={3} mobile={16} tablet={6}>
          <FilterArea />
        </Grid.Column>
        <Grid.Column computer={13} mobile={16} tablet={10}>
          <Segment stacked>
            <Progress
              percent={loading.percent}
              active={loading.status}
              attached="top"
              color={loading.percent === 100 ? "green" : "blue"}
            />
            <Loader
              as={Icon}
              size="mini"
              active={loading.status}
              color="blue"
            />
       
              <Launches />
           
          
          </Segment>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};
export default connect(mapStateToProps)(Main);
