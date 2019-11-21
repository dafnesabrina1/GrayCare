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
      chartDataDevice: {
        datasets: [
          {
            hoverBorderColor: "#ffffff",
            data: [68.3, 24.2, 7.5],
            backgroundColor: [
              "rgba(0,123,255,0.9)",
              "rgba(0,123,255,0.5)",
              "rgba(0,123,255,0.3)"
            ]
          }
        ],
        labels: ["Happy", "Sad", "Neutro"]
      },
      chartData: {
        labels: Array.from(new Array(30), (_, i) => (i === 0 ? 1 : i)),
        datasets: [
          {
            label: "Current Month",
            fill: "start",
            data: [
              500,
              800,
              320,
              180,
              240,
              320,
              230,
              650,
              590,
              1200,
              750,
              940,
              1420,
              1200,
              960,
              1450,
              1820,
              2800,
              2102,
              1920,
              3920,
              3202,
              3140,
              2800,
              3200,
              3200,
              3400,
              2910,
              3100,
              4250
            ],
            backgroundColor: "rgba(0,123,255,0.1)",
            borderColor: "rgba(0,123,255,1)",
            pointBackgroundColor: "#ffffff",
            pointHoverBackgroundColor: "rgb(0,123,255)",
            borderWidth: 1.5,
            pointRadius: 0,
            pointHoverRadius: 3
          },
          {
            label: "Past Month",
            fill: "start",
            data: [
              380,
              430,
              120,
              230,
              410,
              740,
              472,
              219,
              391,
              229,
              400,
              203,
              301,
              380,
              291,
              620,
              700,
              300,
              630,
              402,
              320,
              380,
              289,
              410,
              300,
              530,
              630,
              720,
              780,
              1200
            ],
            backgroundColor: "rgba(255,65,105,0.1)",
            borderColor: "rgba(255,65,105,1)",
            pointBackgroundColor: "#ffffff",
            pointHoverBackgroundColor: "rgba(255,65,105,1)",
            borderDash: [3, 3],
            borderWidth: 1,
            pointRadius: 0,
            pointHoverRadius: 2,
            pointBorderColor: "rgba(255,65,105,1)"
          }
        ]
      },
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
              data: [0,0,0,0,0,0,0]
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
              data: [0,0,0,0,0,0,0]
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
              data: [0,0,0,0,0,0,0]
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
              data: [0,0,0,0,0,0,0]
            }
          ]
        },
        {
          label: "Steps",
          value: "5hr 36min",
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "4", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(255,65,105,0.1)",
              borderColor: "rgba(255,65,105,0.1)",
              data: [0,0,0,0,0,0,0]
            }
          ]
        },
      ]
    }
  }

  componentDidMount(){
    fetch("https://testing-graycare.herokuapp.com/getHeartRate").then(res => res.json()
    ).then((data)=> {
      const fun = this.state.smallStats;
      fun[0].value = data.value;
      fun[0].datasets[0].data = data.data;
      this.setState({smallStats: fun})
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
    fetch("https://testing-graycare.herokuapp.com/getExercise").then(res => res.json()
    ).then((data)=> {
      const f = this.state.chartData;
      f.datasets[1].data = data.dataCurrent;
      f.datasets[0].data = data.dataPast;
      this.setState({chartData: f})
    });
    fetch("https://testing-graycare.herokuapp.com/getMood").then(res => res.json()
    ).then((data)=> {
      const f = this.state.chartDataDevice;
      f.datasets[0].data = data.data;
      this.setState({chartDataDevice: f})
      console.log(this.state.chartDataDevice);
    });
    fetch("https://testing-graycare.herokuapp.com/getPasos").then(res => res.json()
    ).then((data)=> {
      const fun = this.state.smallStats;
      fun[4].value = data.data;
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
        <UsersOverview chartData= {this.state.chartData}/>
      </Col>

      {/* Users by Device */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <UsersByDevice chartData = {this.state.chartDataDevice}/>
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
