import React, { Component } from 'react';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

class RowDiplayer extends Component {
  render() {
    let tableRowStyle = {
      'background-color': '#40BB6A',
      color: 'white',
    };

    let firstColumnStyle = {
      width: '1%',
    };

    return <TableRow style={this.props.stripped ? tableRowStyle : undefined }>
      <TableRowColumn style={firstColumnStyle}><h2>{this.props.number || 1}</h2></TableRowColumn>
      <TableRowColumn><h2>{this.props.pseudo || 'John Doe'}</h2></TableRowColumn>
      <TableRowColumn><h2>{this.props.score}</h2></TableRowColumn>
      <TableRowColumn><h2>{this.props.time + ' s'}</h2></TableRowColumn>
      <TableRowColumn><h2>{this.props.energy}</h2></TableRowColumn>
      <TableRowColumn><h2>{this.props.postit}</h2></TableRowColumn>
    </TableRow>
  }
}

export default RowDiplayer;
