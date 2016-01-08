import React, { Component } from 'react';
import RowDisplayer from './RowDisplayer';

import Table from 'material-ui/lib/table/table';
import TableBody from 'material-ui/lib/table/table-body';
import TableFooter from 'material-ui/lib/table/table-footer';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import FontIcon from 'material-ui/lib/font-icon';
import CircularProgress from 'material-ui/lib/circular-progress';

import $ from 'jquery';

class App extends Component {
  constructor(...props) {
    super(...props);

    this.loadData = this.loadData.bind(this);

    this.state = {
      intervalId: 0,
      data: [],
    };
  }

  loadData() {
    let _this = this;
    $.get('http://0.0.0.0:3000/top/50').success((data) => {
      data = JSON.parse(data);
      _this.setState({
        data,
      });
    });
  }

  componentWillMount() {
    this.loadData();
  }

  componentDidMount() {
    let intervalId = window.setInterval(this.loadData, 3000);
    this.setState({
      intervalId,
    });
  }

  componentWillUnmount() {
    window.clearInterval(this.state.intervalId);
  }

  render() {
    let counter = 1;
    let rows = this.state.data.map((row) => {
      let stripped = ((counter) % 2) == 0;
      return <RowDisplayer
        number={counter++}
        stripped={stripped}
        pseudo={row.nameUser}
        score={row.score}
        time={row.time}
        energy={row.currentGenerated}
        postit={row.feedback} />;
    });

    console.log('rows:', rows);

    let titleStyle = {
      'text-align': 'center',
      width: '100%',
    }

    let fontIconsStyle = {
      padding: 0,
      margin: 0,
      border: 0,
      width: '30px',
      height: '24px',
      'text-align': 'center',
    };

    let styleGreen = {
      color: '#40BB6A',
    };

    let styleYellow = {
      color: '#F9A72B',
    };

    let firstColumnStyle = {
      width: '1%',
    };

    let columnStyle = {
      'background-color': 'white',
    }

    return this.state.data.length > 0 ? <Table
      fixedHeader={true}
      selectable={false}>
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}>
        <TableRow>
          <h1 style={titleStyle}>WattThePark - le parc au courant</h1>
        </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={false}
        stripedRows={true}>
        <TableRow
          style={columnStyle}>
          <TableRowColumn style={firstColumnStyle}>
          </TableRowColumn>
          <TableRowColumn
            style={columnStyle}>
          <h1 style={styleGreen}>
            <FontIcon className="material-icons" style={Object.assign({}, fontIconsStyle, styleGreen)}>mood</FontIcon> Pseudo
          </h1>
          </TableRowColumn>
          <TableRowColumn
            style={columnStyle}>
          <h1 style={styleGreen}>
            <FontIcon className="material-icons" style={Object.assign({}, fontIconsStyle, styleGreen)}>grade</FontIcon> Score
          </h1>
          </TableRowColumn>
          <TableRowColumn
            style={columnStyle}>
          <h1 style={styleGreen}>
            <FontIcon className="material-icons" style={Object.assign({}, fontIconsStyle, styleGreen)}>alarm_on</FontIcon> Temps
          </h1>
          </TableRowColumn>
          <TableRowColumn
            style={columnStyle}>
          <h1 style={styleYellow}>
            <FontIcon className="material-icons" style={Object.assign({}, fontIconsStyle, styleYellow)}>flash_on</FontIcon> Energie générée
          </h1>
          </TableRowColumn>
          <TableRowColumn
            style={columnStyle}>
          <h1 style={styleGreen}>
            <FontIcon className="material-icons" style={Object.assign({}, fontIconsStyle, styleGreen)}>sms</FontIcon> Message
          </h1>
          </TableRowColumn>
        </TableRow>
        {rows}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
            Vous est proposé par : ...
          </TableRowColumn>
        </TableRow>
      </TableFooter>
    </Table> : <h1><CircularProgress mode="indeterminate"  />Chargement des données...</h1>
  }
}

export default App;
