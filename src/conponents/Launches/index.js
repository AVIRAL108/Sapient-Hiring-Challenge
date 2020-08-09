import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllLaunches } from "../../actions";
import { Card, Image, Icon, Grid, Header, Segment } from "semantic-ui-react";

const Launches = ({ getAllLaunches, launches, loading }) => {
  useEffect(() => {
    async function fetchData(){
       return  await  getAllLaunches()
    } 
    fetchData()
  }, []);
  return (
    <React.Fragment>
      <Grid verticalAlign="middle" centered={true} columns={3}>
        { launches ? launches.length === 0 && loading.percent === 100 ?(
          <Segment style={{ margin  :  '5em' }} placeholder>
            <Header icon>
              <Icon name="rocket" />
              No Launches Found through this filter. Please try more filter
              options.
            </Header>{" "}
          </Segment>
        ) : (
          launches.map((v) => {
            return (
              <Grid.Column
                computer={5}
                mobile={16}
                tablet={8}
                key={v.flight_number}
              >
                <Card centered>
                  <Image src={v.links.mission_patch_small} alt={v.mission_name} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header
                      as={Header}
                      color="blue"
                      content={
                        <a href={v.links.article_link}>
                          {v.mission_name}#{v.flight_number}
                        </a>
                      }
                    />
                    <Card.Description>
                      <b>Missions</b> :{" "}
                      {v.mission_id.length === 0
                        ? "No Mission in this Launch"
                        : v.mission_id.map((i) => i + " ")}
                    </Card.Description>
                    <Card.Meta>
                      <span className="date">
                        Launched in {v.launch_year} which was{" "}
                        {v.launch_success ? (
                          <b>Successful</b>
                        ) : (
                          <b>Unsuccessful</b>
                        )}
                      </span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })
        ) : undefined}
      </Grid>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    loading :  state.loading,
    launches: Object.values(state.launches),
  };
};
export default connect(mapStateToProps, { getAllLaunches })(Launches);
