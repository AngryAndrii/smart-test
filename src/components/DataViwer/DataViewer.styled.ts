import styled from 'styled-components';

export const StyledDataViewer = styled.div`
  background-color: rgba(142, 151, 165, 0.392);
  padding-top: 20px;
  padding-bottom: 20px;
  height: 360px;

  .table {
    margin: 0 auto;
    border-collapse: collapse;
  }

  table {
    width: 800px;
  }

  .table td {
    border: 1px solid white;
    width: 25%;
    padding-left: 5px;
  }

  .table tr {
    height: 25px;
  }

  .table th {
    height: 30px;
  }

  .table input {
    height: 100%;
    border: none;
    color: black;
    font-size: 16px;
    font-weight: 400;
    padding-left: 5px;
    border-radius: 5px;
  }

  .table input:hover {
    outline: 2px solid #a0a88a;
  }

  .table input:focus-visible {
    border: none;
    outline: none;
  }

  .no-res-data {
    padding-top: 10px;
  }

  .no-res-data td {
    text-align: center;
    color: #e1ff72;
  }
`;
