import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/blog/UsersOverview";
import UsersByDevice from "./../components/blog/UsersByDevice";
import NewDraft from "./../components/blog/NewDraft";
import Discussions from "./../components/blog/Discussions";
import TopReferrals from "./../components/common/TopReferrals";

class BlogOverview extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      smallStats: [
        {
          label: "Heart Rate",
          value: "120",
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "6", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(0, 184, 216, 0.1)",
              borderColor: "rgb(0, 184, 216)",
              data: []
            }
          ]
        },
        {
          label: "Stress",
          value: "Average",
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "6", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(23,198,113,0.1)",
              borderColor: "rgb(23,198,113)",
              data: [1, 2, 3, 3, 3, 4, 4]
            }
          ]
        },
        {
          label: "Sleep",
          value: "8hr 22mins",
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "4", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(255,180,0,0.1)",
              borderColor: "rgb(255,180,0)",
              data: [2, 3, 3, 3, 4, 3, 3]
            }
          ]
        },
        {
          label: "Motionless",
          value: "5hr 36min",
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "4", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(255,65,105,0.1)",
              borderColor: "rgb(255,65,105)",
              data: [1, 7, 1, 3, 1, 4, 8]
            }
          ]
        },
      ]
    }
  }

  componentDidMount(){
    fetch("https://testing-graycare.herokuapp.com/getHeartRate").then(res => res.json()
    ).then((data)=> {
      console.log(this.state.smallStats[0])
      const fun = this.state.smallStats;
      console.log(fun[0].value)
      fun[0].value = data.value;
      console.log(fun[0].datasets[0].data)
      fun[0].datasets[0].data = data.data.map(Object.values);
      console.log(data.data);
      this.setState({smallStats: fun})
      console.log(this.state.smallStats[0])
    });
    fetch("https://testing-graycare.herokuapp.com/getStress").then(res => res.json()
    ).then((data)=> {
      const fun = this.state.smallStats;
      fun[1].value = data.value;
      fun[1].datasets[0].data = data.data;
      this.setState({smallStats: fun})
    });
    fetch("https://testing-graycare.herokuapp.com/getSleep").then(res => res.json()
    ).then((data)=> {
      const fun = this.state.smallStats;
      fun[2].value = data.value;
      fun[2].datasets[0].data = data.data;
      this.setState({smallStats: fun})
    });
    fetch("https://testing-graycare.herokuapp.com/getMotionless").then(res => res.json()
    ).then((data)=> {
      const fun = this.state.smallStats;
      fun[3].value = data.value;
      fun[3].datasets[0].data = data.data;
      this.setState({smallStats: fun})
    });
  }
  
  render() {
    return (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Overview" subtitle="Dashboard" className="text-sm-left mb-3" />
    </Row>

    {/* Small Stats Blocks */}
    <Row>
      {this.state.smallStats.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-${idx}`}
            variation="1"
            chartData={stats.datasets}
            chartLabels={stats.chartLabels}
            label={stats.label}
            value={stats.value}
          />
        </Col>
      ))}
    </Row>

    <Row>
      {/* Users Overview */}
      <Col lg="8" md="12" sm="12" className="mb-4">
        <UsersOverview />
      </Col>

      {/* Users by Device */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <UsersByDevice />
      </Col>
      
      {/* New Draft */}
      {/*
      <Col lg="4" md="6" sm="12" className="mb-4">
        <NewDraft />
      </Col>
      */}
      {/* Discussions */}
      {/*
      <Col lg="5" md="12" sm="12" className="mb-4">
        <Discussions />
      </Col>
      */}
      {/* Top Referrals */}
      {/*
      <Col lg="3" md="12" sm="12" className="mb-4">
        <TopReferrals />
      </Col>
      */}
    </Row>
  </Container>
    )
  }
}

BlogOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

BlogOverview.defaultProps = {};

export default BlogOverview;
