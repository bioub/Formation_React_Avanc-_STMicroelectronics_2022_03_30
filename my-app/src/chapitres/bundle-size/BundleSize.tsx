import React, { Component, createRef } from 'react';
import { getRandomInt } from './random';
// import { utils, writeFile } from 'xlsx';

// Tree Shaking

class BundleSize extends Component {
  state = {
    loading: false,
  }
  dataTableRef = createRef<HTMLTableElement>()
  handleClick = async () => {
    // Dynamic import
    this.setState({
      loading: true,
    })
    const { utils, writeFile } = await import('xlsx');
    const wb = utils.table_to_book(this.dataTableRef.current, {sheet:"Demo XLSX"});
    writeFile(wb, 'SheetJSTableExport.xlsx');
    this.setState({
      loading: false,
    })
  };
  render() {
    const { loading } = this.state;
    return (
      <div className="BundleSize">
        <div>
          Random number : {getRandomInt(0, 100)}
        </div>
        <div>
          <table ref={this.dataTableRef}>
            <tbody>
              <tr>
                <td>A1</td>
                <td>B1</td>
                <td>C1</td>
              </tr>
              <tr>
                <td>A2</td>
                <td>B2</td>
                <td>C2</td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.handleClick} disabled={loading}>{!loading ? 'Export to Excel' : 'Loading'}</button>
        </div>
      </div>
    );
  }
}

export default BundleSize;
