import styled from 'styled-components'

export const DropDownContainer = styled.div`
  position: relative;
  width: 20rem;

  .item {
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-size: 1.6rem;
    text-align: start;
  }

  .dropDownHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #ededed;
    border: solid 0.1rem #ededed;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  }

  .dropDownList {
    z-index: 4;
    position: absolute;
    top: 3rem;
    left: 0;
    overflow: scroll;
    width: 100%;
    max-height: 20rem;
    border: solid 0.1rem #ededed;
    background-color: white;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  }

  .listItem:hover {
    color: white;
    background-color: #027ffe;
  }
`
